---
author: jerome.forissier
title: Trusted Firmware OP TEE Release 4.0.0
date: 2023-10-20 10:00:00
categories:
- Blog
layout: post
image: /assets/images/blog/musca_tf_crop_1500x1500.png
---

**Trusted Firmware OP TEE: v4.0.0 Release**
=====================================================

Introduction
------------

Trusted Firmware OP TEE [v4.0.0](https://github.com/OP-TEE/optee_os/blob/4.0.0/CHANGELOG.md) was released on the 20th of October, 2023. The release is a major version update which introduces a new version of the MBedTLS library, deprecates some older code, and includes a few new features and platform updates.

Highlights 
----------

This is a major version update, from 3.x to 4.x. Here are a few questions and answers explaining why and how this has changed.
- Why stepping up? What's the reason for this?
    - OP-TEE follows [Semantic Versioning 2.0.0](https://semver.org/) and we’re making incompatible API/ABI changes
    - The changes are needed to make the code easier to maintain and to keep up with changes in third-party code
- What new features will we see?
    - Stepping up to 4 is not about introducing new major features, but making some incompatible changes
- What will disappear?
    - MBedTLS crypto code baseline is updated from 2.28.1 to 3.4.0 in the TEE core. That is an internal change which is relevant only to people building OP-TEE with CFG_CRYPTOLIB_NAME=mbedtls CFG_CRYPTOLIB_DIR=lib/libmbedtls. Even so, no functional or performance impact is expected.
    - MBedTLS will switch from 2.28.1 to 3.4.0 for TAs, too (see impacts below)
- Will security issues be backported in some way to 3.x.x?
    - No, unless someone steps up to maintain a 3.x branch.
- What impacts will have the stepping up to the major version?
    - TAs calling other TAs with memory buffers as arguments will need to be recompiled to overcome the ABI changes (see [Remove TA temp memory #6318](https://github.com/OP-TEE/optee_os/pull/6318)).
    - TAs using MBedTLS may need to be updated to use the new API in MBedTLS 3.x compared to the old 2.x API. Otherwise they might not compile cleanly.
- Tools working with TAs may need to be updated due to [Relax location of ta head #6316](https://github.com/OP-TEE/optee_os/pull/6316)
- Who is going to be impacted?
    - TAs using the MBedTLS API when recompiling, an old binary will still work unless the other point below applies
    - TAs calling other TAs with memory buffers as arguments
        - A binary produced with OP-TEE version 3.6.0 or earlier will not succeed in calling another TA using memory buffers
        - Recompiling without source changes should be enough

**Here are some of the main additions in OP TEE 4.0.0:** 
- Support for PAN (Privileged Access Never)
- Some refactoring in the interrupt handling framework
- Address static code analysis issues (Coverity)
- Enable ASAN (Address Sanitizer) on 64-bit QEMU (QEMUv8)
- Support larger number of cores
- PKCS11 fixes and improvements
    - Calculate CKA_MODULUS_BITS on RSA public key import
    - Fix Elliptic Curve private key import
- Added an internal interface for non-volatile monotonic counter, used by secure storage when RPMB is not available
- Introduced a remoteproc firmware signing script
- Fault mitigation framework: support non-threaded (interrupt) code
- Introduced a power regulator framework
- Some RISC-V updates (including SBI support)
- SPMC (Secure Partition Manager Core) updates, see [https://developer.trustedfirmware.org/w/trusted-services/op-tee-spmc/](https://developer.trustedfirmware.org/w/trusted-services/op-tee-spmc/) for details
    - Added support for the boot-order property of the SP manifest
    - Xen hypervisor support (Dom0 and DomU)
    - Bug fixes
- Platform updates
    - STM32 updates (I2C, UART, GPIO, SAES, PMIC)
    - Nuvoton
    - LS (SPI)
    - i.MX (CAAM fixes, CAAM DEK blob support, SRC/PSCI/GPCv2/CSU driver updates)
    - Marvell: support CN10K
    - ZynqMP
    - K3

**The release included updates to the following repos:**
- [optee_os](https://optee.readthedocs.io/en/latest/building/gits/optee_os.html#optee-os) 
- [optee_client](https://optee.readthedocs.io/en/latest/building/gits/optee_client.html#optee-client) 
- [optee_test](https://optee.readthedocs.io/en/latest/building/gits/optee_test.html#optee-test) 
- [build](https://optee.readthedocs.io/en/latest/building/gits/build.html#build) 
- [manifest] (https://optee.readthedocs.io/en/latest/building/gits/build.html#manifests)


More details can be found [here](https://github.com/OP-TEE/optee_os/blob/4.0.0/CHANGELOG.md).

Testing of the release has been performed by the committers and can be found [here](https://github.com/OP-TEE/optee_os/commit/2a5b1d1232f582056184367fb58a425ac7478ec6)
Test plan for this release using the OP-TEE are [here](https://optee.readthedocs.io/en/latest/building/gits/optee_test.html) test suite. Testing results can be found in the [pull request itself](https://github.com/OP-TEE/optee_os/pull/6341)

The release has been tagged at [4.0.0](https://github.com/OP-TEE/optee_os/releases/tag/4.0.0) using the OP TEE [release procedure](https://optee.readthedocs.io/en/latest/general/releases.html#release-procedure). 

The OP TEE release roadmap can be found [here](https://optee.readthedocs.io/en/latest/general/releases.html). 

Any security fixes prior to the next release will be made available on the [Security Advisories page](https://github.com/OP-TEE/optee_os/security/advisories?state=published). 

About TrustedFirmware.org
----------
TrustedFirmware.org is an open source project implementing foundational software components for creating secure devices. Trusted Firmware provides a reference implementation of secure software for processors implementing both the A-Profile and M-Profile Arm architecture. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. Trusted Firmware code is the preferred implementation of Arm specifications, allowing quick and easy porting to modern chips and platforms. This forms the foundations of a Trusted Execution Environment (TEE) on application processors, or the Secure Processing Environment (SPE) of microcontrollers. 


Visit[ https://www.trustedfirmware.org/](https://www.trustedfirmware.org) for more informoation.


TrustedFirmware.org is member driven and member funded. To learn more about membership and its benefits, please see the [following page](https://www.trustedfirmware.org/about) or send a request for more information to enquiries@trustedfirmware.org.
