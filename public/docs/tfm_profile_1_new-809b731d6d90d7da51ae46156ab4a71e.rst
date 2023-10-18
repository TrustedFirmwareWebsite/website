###################################
Trusted Firmware-M Profile 1 Design
###################################

:Authors: David Hu
:Organization: Arm Limited
:Contact: david.hu@arm.com
:Status: Detailed

************
Introduction
************

The capabilities and resources may dramatically vary on different IoT devices.
Some IoT devices may have very limited memory resource. The program on those
devices should keep small memory footprint and basic functionalities.
On the other hand, some devices may consist of more memory and extended storage,
to support stronger software capabilities.

Diverse IoT use cases also require different levels of security and requirements
on device resource. For example, use cases require different cipher
capabilities. Selecting cipher suites can be sensitive to memory footprint on
devices with constrained resource.

Trusted Firmware-M (TF-M) Profile defines 3 general profiles to provide
different levels of security to fit diverse device capabilities and use cases.
Each profile specifies a predefined list of features, targeting typical use
cases with specific hardware constraints. Profiles can serve as reference and
basic designs, based on which devices can continue further development and
configurations.

As one of the TF-M Profiles, TF-M Profile 1 consists of lightweight TF-M
framework and basic Secure Services to keep smallest memory footprint,
supporting fundamental security features on devices with ultra constrained
resource.

This document summarizes and discusses the features specified in TF-M Profile 1.

**************
Overall design
**************

TF-M Profile 1 defines the following features:

    - Lightweight framework

        - Library model
        - Level 1 isolation
        - Buffer sharing allowed
        - Single secure context

    - Crypto

        - Symmetric cipher only
        - Support the same capabilities as required in pre-shared key (TLS-PSK)
          cipher suite, such as TLS_PSK_WITH_AES_128_CBC_SHA256 [1]_.

            - Advanced Encryption Standard (AES) as symmetric crypto algorithm
            - SHA256 as Hash function
            - HMAC as Message Authentication Code algorithm

    - Internal Trusted Storage (ITS)

        - No encryption
        - No rollback protection
        - Decrease internal transient buffer size

    - Lightweight boot

        - Single image boot
        - Anti-rollback protection is enabled

Initial Attestation service is not enabled in Profile 1 so far. Whether Initial
Attestation should be in Profile 1 and how Initial Attestation should be
implemented are to be decided.

Protected Storage, Audit logging and other Secure Services provided by TF-M are
disabled by default.

**************
Design details
**************

More details of TF-M Profile 1 design are discussed in following sections.

Lightweight framework
=====================

Library model
-------------

Profile 1 selects Library model in TF-M. Library model implements secure
function calls, via which clients directly call secure services. It provides a
more simple implementation of TF-M framework and may reduce memory footprint,
compared with Inter-Process Communication (IPC) model [2]_.

.. note ::

    **Implementation note**

    Please note that there is no public dedicated specification for Library
    model.
    The design, interfaces and implementation of Library model in TF-M may vary.

Level 1 isolation
-----------------

So far, TF-M Library model only supports level 1 isolation [2]_, which isolates
Secure Processing Environment (SPE) from Non-secure Processing Environment
(NSPE). Neither level 2 nor level 3 isolation [2]_ is implemented in TF-M
Library model yet.

PSA Root of Trust (PSA RoT) and Application Root of Trust (ARoT) are isolated
from each other in level 2 isolation.
Individual secure partitions are isolated from each other even within a
particular security domain (PSA RoT, ARoT, NSPE), in level 3 isolation.

Profile 1 dedicated use cases with simple service model may not require level 2
or level 3 isolation. Devices which Profile 1 aims at may be unable to implement
stricter isolation, limited by hardware capabilities.

Level 1 isolation reduces requirements enforced by hardware isolation and cost
of software for management.

.. note ::

    **Security note**

    If a device or a use case enforces level 2 or level 3 isolation, it is
    suggested to apply other configurations, other than TF-M Profile 1.

Buffer sharing allowed
----------------------

To simplify interface and reduce memory footprint, TF-M Library model directly
handles client call input vectors from non-secure client buffers and later
writes results back to those buffers, without keeping a copy in a transient
buffer inside TF-M.

.. note ::

    **Security note**

    There can be security vulnerabilities if non-secure client buffers are
    directly shared between NSPE and SPE, such as Time-of-check to time-of-use
    (TOCTOU) attack.

    Developers need to check if this can meet the Security Functional
    Requirements (SFR) of the integration on their devices.

Single secure context
---------------------

TF-M Library model only supports single secure context.

It cannot support multiple contexts or the scheduling implemented in IPC model.
It neither can support multiple outstanding PSA client calls.

But correspondingly, it can save memory footprint and runtime complexity in
context management and scheduling.

.. note ::

    **Security note**

    Non-secure software should prevent triggering multiple outstanding PSA
    client calls concurrently. Otherwise, it may crash current running secure
    context.

Crypto service
==============

TF-M Profile 1 only requires symmetric crypto since symmetric algorithms require
shorter keys and less computational burden, compared with asymmetric crypto.

By default, TF-M Profile 1 requires the same capabilities as defined in cipher
suite TLS_PSK_WITH_AES_128_CBC_SHA256 [1]_ in pre-shared key protocol (TLS-PSK).

.. note ::

    **Implementation note**

    Please note that TF-M Profile 1 doesn't require that TLS-PSK is mandatory in
    applications. Instead, Profile 1 only requires the same capabilities as
    defined in TLS-PSK, such as one symmetric cipher algorithm and one hash
    function.

    The actual use cases and connection protocols are out of the scope of this
    document.

TF-M Profile 1 selects TLS_PSK_WITH_AES_128_CBC_SHA256 as reference, which
requires:

    - AES-128-CBC (AES CBC mode with 128-bit key) as symmetric crypto algorithm
    - SHA256 as Hash function
    - HMAC as Message Authentication Code algorithm

TF-M Profile 1 prefers TLS_PSK_WITH_AES_128_CBC_SHA256 since it requires small
key length and less hardware capabilities, while keeping expected level of
security.

.. note ::

    **Security note**

    It is recommended not to use MD5 or SHA-1 for message digests as they are
    subject to collision attacks [3]_ [4]_.

.. note ::

    **Implementation note**

    Developers can replace default algorithms with others or implement more
    algorithms according to use cases and device capabilities.

    Refer to `Crypto service configurations`_ for implementation details.

Secure Storage
==============

TF-M Profile 1 assumes that extremely constrained devices only contain basic
on-chip storage, without external or removable storage.
As a result, TF-M Profile 1 includes ITS service and disables Protected Storage
service.

Encryption and rollback protection
----------------------------------

Neither encryption nor rollback protection is enabled in current ITS
implementation.

It is expected that ITS relies solely on the physical inaccessibility property
of on-chip storage, together with PSA isolation, without requiring additional
cryptographic protection.

Internal transient buffer
-------------------------

ITS implements a internal transient buffer [5]_ to hold the data read
from/written to storage, especially for flash, to solve the alignment and
security issues.

The internal transient buffer is aligned to the flash device’s program unit.
Copying data to it from the caller can align all write requests to the flash
device’s program unit.
The internal transient buffer can help protect Flash access from some attacks,
such as TOCTOU attack.

Although removing this internal buffer can save some memory consumption,
typically 512 bytes, it may bring alignment or security issues.
Therefore, to achieve a better trade-off between memory footprint and security,
TF-M Profile 1 optimizes the internal buffer size to 32 bytes by default.

As discussed in `Crypto service`_, TF-M Profile 1 requires AES-128 and SHA-256,
which use 128-bit key and 256-bit key respectively.
Besides, either long public/private keys or PKI-based certificates should be
very rare as asymmetric crypto is not supported in Profile 1.
Therefore, a 32-byte internal buffer should cover the assets in TF-M Profile 1
use cases.

The buffer size can be adjusted according to use case and device Flash
attributes. Refer to `Internal Trusted Storage configurations`_ for more
details.

Lightweight boot
================

If MCUBoot provided by TF-M is enabled, single image boot [6]_ is selected by
default in Profile 1.
In case of single image boot, secure and non-secure images are handled as a
single blob and signed together during image generation. It can simplify the
booting and image authentication.

However, secure and non-secure images must be updated together in single image
boot. It may decrease the flexibility of image update and cost longer update
process. Since the image sizes should usually be small with limited
functionalities in Profile 1 dedicated use case, the cost may still be
reasonable.

BL2 implementation can be device specific. Devices may implement diverse
boot processes with different features and configurations.
However, anti-rollback protection is required as a mandatory feature of boot
loader. Boot loader should be able to prevent unauthorized rollback, to protect
devices from being downgraded to earlier versions with known vulnerabilities.

**************
Implementation
**************

Overview
========

The basic idea is to add dedicated top-level CMake configuration files under
folder ``configs`` for TF-M Profile 1 default configuration.

The top-level Profile 1 config file collects all the necessary configuration
flags and set them to default values, to explicitly enable the features required
in TF-M Profile 1 and disable the unnecessary ones, during TF-M build.

An alternative option is to set only a global flag in top-level Profile 1 CMake
file and configure the remaining configurations in dedicated CMake files of each
module/secure service. However, since configuration flags are distributed in
multiple CMake files, it will become difficult for a platform/use case to
overwrite default configurations.
Therefore it is more reasonable to explicitly set all critical configurations in
a top-level CMake file.

A platform/use case can provide a configuration extension file to overwrite
Profile 1 default setting and append other configurations.
This configuration extension file can be added via parameter
``TFM_PROFILE_CONFIG_EXT`` in build command line. The top-level config file will
include the device configuration extension file to load platform/use case
specific configurations.

The overall build flow of Profile 1 is shown as the flowchart below.

.. uml::

    @startuml

    title Overall build flow

    start

    :Profile 1 CMake file;
    note left
        Top-level CMake config file under ""configs"".
        Set configurations to default values.
    endnote

    if (Platform config\nextension specified?) then (Yes)
        :Include platform specific\nconfig extension file;
        note left
            Platform specific configuration extension file
            is provided via ""TFM_PROFILE_CONFIG_EXT"" in
            build command line.
        endnote

        :Overwrite default configurations;
    else (No)
    endif

    :CommonConfig.cmake;
    note left
        Normal building sequence
    endnote

    stop

    @enduml

The control flags set in the top-level Profile 1 config file are listed below.
The details will be covered in each module in `Implementation details`_.

.. list-table:: Config flags in Profile 1 top-level CMake config file
   :widths: 20 15 30
   :header-rows: 1

   * - Configs
     - Default value
     - Descriptions
   * - ``CORE_IPC``
     - ``False``
     - Library model is selected
   * - ``TFM_LVL``
     - ``1``
     - Level 1 isolation
   * - ``TFM_PARTITION_INTERNAL_TRUSTED_STORAGE``
     - ``ON``
     - Enable ITS SP
   * - ``ITS_RAM_FS``
     - ``OFF``
     - Stop using RAM to simulate Flash
   * - ``ITS_BUF_SIZE``
     - ``32``
     - ITS internal transient buffer size
   * - ``TFM_PARTITION_CRYPTO``
     - ``ON``
     - Enable Crypto service
   * - ``CRYPTO_ASYMMETRIC_MODULE_DISABLED``
     - ``ON``
     - Disable asymmetric cipher in Crypto service
   * - ``CRYPTO_AEAD_MODULE_DISABLED``
     - ``ON``
     - Disable AEAD in Crypto service
   * - ``CRYPTO_KEY_DERIVATION_MODULE_DISABLED``
     - ``ON``
     - Disable key derivation in Crypto service
   * - ``MBEDTLS_CONFIG_FILE``
     - ``tfm_profile_1_mbedcrypto_config``
     - Default mbed-crypto config file for Profile 1 under
       ``platform/ext/common``
   * - ``TFM_PARTITION_AUDIT_LOG``
     - ``OFF``
     - Disable Audit Logging Logging service
   * - ``TFM_PARTITION_SECURE_STORAGE``
     - ``OFF``
     - Disable Protected Storage service
   * - ``TFM_PARTITION_INITIAL_ATTESTATION``
     - ``OFF``
     - Disable Initial Attestation service
   * - ``TFM_PARTITION_PLATFORM``
     - ``OFF``
     - Disable Platform service

Test cases settings in top-level Profile 1 config files are listed below.
The ``Default config`` stands for configuration without tests and the
``Regression config`` stands for configuration with regression tests.

.. list-table:: Test config flags in Profile 1 top-level CMake config file
   :widths: 20 20 15 15
   :header-rows: 1

   * - Test cases
     - Configs
     - Default config
     - Regression config
   * - Regression test
     - ``REGRESSION``
     - ``OFF``
     - ``ON``
   * - Core test
     - ``CORE_TEST``
     - ``OFF``
     - ``ON``
   * - PSA API test
     - ``PSA_API_TEST``
     - ``OFF``
     - ``OFF``

Implementation details
======================

This section discusses the details of Profile 1 implementation.

.. note ::

    **Implementation note**

    The following sections focus on the feature selection via configuration
    setting.
    Dedicated optimization on memory footprint is not covered in this document.

Top-level Profile 1 CMake config file
-------------------------------------

There are two top-level Profile 1 CMake config files under folder ``configs``.

- ``ConfigProfile1Default.cmake`` completes Profile 1 default configurations
  without test cases.
- ``ConfigProfile1Regression.cmake`` enables regression and core test cases for
  the features defined Profile 1, besides default configurations.

The details of configuration control flags set in top-level configuration file
are listed in following sections.

Device configuration extension
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To overwrite default configurations and add platform specific configurations,
a platform can set the path to its own configuration extension file in parameter
``TFM_PROFILE_CONFIG_EXT`` in command line.

A platform can also add its device specific configurations into its specific
CMake file under ``platform/ext/`` folder.

TF-M framework setting
----------------------

The top-level Profile 1 CMake config file selects Library model and level 1
isolation.

Crypto service configurations
-----------------------------

Crypto Secure Partition
^^^^^^^^^^^^^^^^^^^^^^^

TF-M Profile 1 enables Crypto Secure Partition (SP) in its top-level CMake
config file. Crypto SP modules not supported in TF-M Profile 1 are disabled.
The disabled modules are shown below.

    - Disable asymmetric cipher
    - Disable Authenticated Encryption with Associated Data (AEAD)
    - Disable key derivation

Other modules and configurations [7]_ are kept as default values.

Additional configuration flags with more fine granularity can be added to
control building of specific crypto algorithms and corresponding test cases.

Mbed Crypto configurations
^^^^^^^^^^^^^^^^^^^^^^^^^^

TF-M Profile 1 adds a dedicated Mbed Crypto config file
``tfm_profile_1_mbedcrypto_config.h`` under ``platform/ext/common``.
TF-M Profile 1 specifies ``tfm_profile_1_mbedcrypto_config.h`` as the default
Mbed Crypto config in ``MBEDTLS_CONFIG_FILE`` in top-level CMake config file,
instead of common Mbed Crypto config file ``tfm_mbedcrypto_config.h`` [7]_.

Major Mbed Crypto configurations are set as listed below:

    - Enable SHA256
    - Enable generic message digest wrappers
    - Enable AES
    - Enable Cipher Block Chaining mode (CBC) for symmetric ciphers
    - Disable other modes for symmetric ciphers
    - Disable asymmetric ciphers
    - Disable HMAC-based key derivation function (HKDF)

A device/use case can replace Profile 1 default Mbed Crypto config file with
its specific one to overwrite the default configurations. Alternatively, a
device can overwrite the configurations by appending a config file via
``MBEDTLS_USER_CONFIG_FILE``.

Internal Trusted Storage configurations
---------------------------------------

ITS service is enabled in top-level Profile 1 CMake config file.

The internal transient buffer size ``ITS_BUF_SIZE`` [5]_ is set to 32 bytes by
default. A platform/use case can overwrite the buffer size in its specific
configuration extension according to its actual requirement of assets and Flash
attributes.

Profile 1 CMake config file won't touch the configurations of device specific
Flash hardware attributes [5]_.

Disabled secure services
--------------------------

Audit logging, Protected Storage, Initial Attestation and Platform Service are
disabled by default in Profile 1 top-level CMake config file.

BL2 setting
-----------

Profile 1 enables MCUBoot provided by TF-M by default. A platform can overwrite
this configuration by disabling MCUBoot in its configuration extension file or
in its specific CMake file under ``platform/ext/`` folder.

If MCUBoot provided by TF-M is enabled, single image boot is selected in TF-M
Profile 1 top-level CMake config file.

The following table lists the configurations specified in Profile 1 top-level
config file for MCUBoot provided by TF-M.

.. list-table:: MCUBoot config flags in Profile 1 top-level CMake config file
   :widths: 30 15 30
   :header-rows: 1

   * - Configs
     - Default value
     - Descriptions
   * - ``BL2``
     - ``True``
     - MCUBoot is enabled
   * - ``MCUBOOT_IMAGE_NUMBER``
     - ``1``
     - Single image boot

If a device implements its own boot loader, the configurations are
implementation defined.

****************
Platform support
****************

To enable Profile 1 on a platform, the platform specific CMake file should be
added into the platform support list in top-level Profile 1 CMake config file.

Building Profile 1
==================

To build Profile 1, argument ``PROJ_CONFIG`` in build command line should be set
to ``ConfigProfile1Regression.cmake`` or ``ConfigProfile1Regression.cmake``.

Take AN521 as an example.

The following commands build Profile 1 without test cases on **AN521** with
build type **MinSizeRel**, built by **Armclang**.

.. code-block:: bash

    cmake -G"Unix Makefiles" -DPROJ_CONFIG=`readlink -f ../configs/ConfigProfile1Default.cmake` \
                             -DTARGET_PLATFORM=AN521       \
                             -DCMAKE_BUILD_TYPE=MinSizeRel \
                             -DCOMPILER=ARMCLANG ../
    cmake --build ./ -- install

The following commands build Profile 1 with regression test cases on **AN521**
with build type **MinSizeRel**, built by **Armclang**.

.. code-block:: bash

    cmake -G"Unix Makefiles" -DPROJ_CONFIG=`readlink -f ../configs/ConfigProfile1Regression.cmake` \
                             -DTARGET_PLATFORM=AN521       \
                             -DCMAKE_BUILD_TYPE=MinSizeRel \
                             -DCOMPILER=ARMCLANG ../
    cmake --build ./ -- install

More details of building instructions and parameters can be found TF-M build
instruction guide [8]_.

The following commands include platform specific configuration extension file
via ``TFM_PROFILE_CONFIG_EXT`` in command line. ``TFM_PROFILE_CONFIG_EXT`` can
be an absolute path or a relative one to TF-M code root directory.

.. code-block:: bash

    cmake -G"Unix Makefiles" -DPROJ_CONFIG=`readlink -f ../configs/ConfigProfile1Default.cmake` \
                             -DTARGET_PLATFORM=AN521       \
                             -DCMAKE_BUILD_TYPE=MinSizeRel \
                             -DCOMPILER=ARMCLANG           \
                             -DTFM_PROFILE_CONFIG_EXT=path/to/config_ext_file ../
    cmake --build ./ -- install

*********
Reference
*********

.. [1] `Pre-Shared Key Cipher Suites for TLS with SHA-256/384 and AES Galois Counter Mode <https://tools.ietf.org/html/rfc5487>`_

.. [2] `DEN0063 Arm Device Security Architecture Firmware Framework 1.0 <https://developer.arm.com/-/media/Files/pdf/DeviceSecurityArchitecture/Architect/DEN0063-PSA_Firmware_Framework-1.0.0-2.pdf?revision=2d1429fa-4b5b-461a-a60e-4ef3d8f7f4b4>`_

.. [3] `Updated Security Considerations for the MD5 Message-Digest and the HMAC-MD5 Algorithms <https://tools.ietf.org/html/rfc6151>`_

.. [4] `Transitioning the Use of Cryptographic Algorithms and Key Lengths <https://www.nist.gov/publications/transitioning-use-cryptographic-algorithms-and-key-lengths>`_

.. [5] :doc:`ITS integration guide </docs/user_guides/services/tfm_its_integration_guide>`

.. [6] :doc:`Secure boot </docs/user_guides/tfm_secure_boot>`

.. [7] :doc:`Crypto design </docs/design_documents/tfm_crypto_design>`

.. [8] :doc:`TF-M build instruction </docs/user_guides/tfm_build_instruction>`

--------------

*Copyright (c) 2020, Arm Limited. All rights reserved.*
