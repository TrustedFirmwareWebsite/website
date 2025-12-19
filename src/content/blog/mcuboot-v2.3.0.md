---
author: david-brown
title: MCUboot v2.3.0 Release!
date: 2025-12-19 10:00:00

image: "../../assets/images/blog/musca_tf_crop_1500x1500.png"
---

# **MCUboot v2.3.0 Release**

## Introduction

I am pleased to announce the final release for
[MCUboot 2.3.0](https://github.com/mcu-tools/mcuboot/releases/tag/v2.3.0).

## Summary

This release contains numerous minor changes along with a few features,
such as a ram-load revert mode, and numerous hygienic improvements to the
Zephyr port.

## Highlights

- Added support for booting Cortex-R5 images
- Add support for cleaning up the Cortex-R core before final jumping
- Aligned the project security policy with the [TrustedFirmware.org security
  policy](https://www.trustedfirmware.org/.well-known/security.txt).
- Fixed imgtool dependency on click package version.
- Enabled support for ram-load revert mode, which functions using the same
  logic as direct-xip revert mode but loads the executable image to ram.
- Add cache flush after write/erase operations to avoid getting invalid
  data when these are followed by read operation.
- Fix image wrong state after swap-scratch when hardware flash encryption
  is enabled. When hardware flash encryption is enabled, force expected
  erased value (0xFF) into flash when erasing a region, and also always
  do a real erase before writing data into flash.
- Move the Virtual eFuse offset in flash configuration from hardcoded value to .conf file.
- Fixed issue in `boot_scramble_regions`, where incorrect boundary
  check would cause function to attempt to write pass a designated
  flash area.
- Fixed issue in `image_validate` when `MCUBOOT_HASH_STORAGE_DIRECTLY` is enabled
  for platforms with NVM memory that does not start at 0x00.
- Fixed issue in `image_validate` when `BOOT_SIGNATURE_TYPE_PURE` is enabled
  for platforms with NVM memory that does not start at 0x00.
- Fixed serial recovery with progressive erase for MCUboot modes of single
  updatable slot (`MCUBOOT_SINGLE_APPLICATION_SLOT`, `MCUBOOT_FIRMWARE_LOADER`,
  `MCUBOOT_SINGLE_APPLICATION_SLOT_RAM_LOAD`) which was previously failing due
  to attempting to access non-existent image status fields.
- Fixed issue with imgtool when trying to compress images with
  no header padding requested.
- Fixed issue with swap using offset when mininmal erase was
  enabled that did not offset the erase to the second sector and
  wrongly used the (empty) first sector of the secondary slot.
- Switched to picolibc as the default C library in Zephyr.
- Fixed wrong define specifying 2 slots in single loader mode
  instead of just 1
- Fixed wrong slot ID in hook calls from serial recovery.
- Fixed issues with serial recovery not building/not
  working/faulting.
- Swap using offset now includes the size of the unprotected TLV
  area which was wrongly missing before, this requires extra space
  in the swap status as the data is not part of the image header
- Control over compilation of unprotected TLV allow list has been exposed
  using `MCUBOOT_USE_TLV_ALLOW_LIST` mcuboot configuration identifier.
- Fixed issue with platforms that have
  `MCUBOOT_SUPPORT_DEV_WITHOUT_ERASE` set that did not scramble
  (delete) data sections from the trailer that should have been
  deleted.
- Fixed issue with `boot_scramble_region` escaping flash area due
  to error in the range check.
- A few changes to make vscode nicer, including a default package to build at
  the top level, and ignoring some of the cache files from vscode.
- Zephyr builds are now using Kconfig `CONFIG_MCUBOOT_BOOT_MAX_ALIGN`
  to set the `MCUBOOT_BOOT_MAX_ALIGN`.
- Fixed issue with checking pin reset not checking for single
  flag in Zephyr.
- imgtool verify when using a public ed25519 key has been fixed
  to work rather than show an invalid key type not matching the
  TLV record error.
- Zephyr signature and encryption key file path handling has now
  been aligned with Zephyr, this means values can be specified in
  multiple .conf file and the one that last set it will be the set
  value. This also means that key files will no longer be found
  relative to the .conf file and will instead be found relative
  to the build system ``APPLICATION_CONFIG_DIR`` variable, though
  the key file strings are now configured which allows for using
  escaped CMake variables to locate the files, for example with
  ``\${CMAKE_CURRENT_LIST_DIR}`` to specify a file relative to
  the folder that the file is in.
- Watchdog support in Zephyr has been reworked and fixed to allow
  installing a timeout (with a configurable value) before starting
  it. The default timeout is set to 1 minute and this feature has
  been enabled by default. 3 Kconfig options have been added which
  control how the watchdog is used in MCUboot:

    * ``CONFIG_BOOT_WATCHDOG_SETUP_AT_BOOT`` controls setting up
      the watchdog in MCUboot (if not set up, it can still be set,
      if the driver supports this non-compliant behaviour).
    * ``CONFIG_BOOT_WATCHDOG_INSTALL_TIMEOUT_AT_BOOT`` controls if
      a timeout is installed at bootup or not.
    * ``CONFIG_BOOT_WATCHDOG_TIMEOUT_MS`` sets the value of the
      timeout in ms.

- In addition, Zephyr modules can now over-ride the default
  watchdog functionality by replacing the weakly defined functions
  ``mcuboot_watchdog_setup`` and/or ``mcuboot_watchdog_feed``,
  these functions take no arguments.
- correct esp32c6 overlay

## Authors

This release contains contributions from the following authors:

- Abderrahmane JARMOUNI
- Abram Early
- Adam Szczygieł
- Alex Fabre
- Almir Okato
- Andre Heinemans
- Andrej Butok
- Andrzej Puzdrowski
- Artur Hadasz
- Benedek Kupper
- Bjarki Arge Andreasen
- Dan Handley
- Daniel DeGrasse
- David Brown
- David Vincze
- Diego Herranz
- Dominik Ermel
- Dávid Házi
- Ederson de Souza
- Erwan Gouriou
- Etienne Carriere
- Filipe Cavalcanti
- Francois Ramu
- Gowri Ramshankar
- Grzegorz Chwierut
- Jamie McCrae
- Jerzy Kasenberg
- Johan Hedberg
- Johann Fischer
- Jordan Yates
- Keith Packard
- Krzysztof Szromek
- Lukasz Fundakowski
- Marek Matej
- Mateusz Michalek
- Maulik Patel
- Michal Gorecki
- Michal Kozikowski
- Michał Stasiak
- Mika Braunschweig
- Ofir Shemesh
- Pieter De Gendt
- Samuel Coleman
- Sayooj K Karun
- Stefan Gloor
- Stephane Le Roy
- Thomas Altenbach
- Tim Pambor
- Tomasz Chyrowicz
- kkrentz
- moculll
