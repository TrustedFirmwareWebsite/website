---
author: david-brown
title: MCUboot v2.0.0 Release!
date: 2023-10-30 10:00:00

image: "../../assets/images/blog/musca_tf_crop_1500x1500.png"
---

# **MCUboot v2.0.0 Release**

## Introduction

I am pleased to announce the final release for [MCUboot 2.0.0](https://github.com/mcu-tools/mcuboot/releases/tag/v2.0.0
). Due to semantic
versioning, this bump is a major version change.

## Summary

Note that this release, 2.0.0 is a new major number, and contains a small API
change in the interface between mcuboot and the platform.  All platforms
contained within the MCUboot tree have been updated, but any external platforms
will have to be adjusted.  The following commit makes the API change, in the
function `boot_save_shared_data`.

    commit 3016d00cd765e7c09a14af55fb4dcad945e4b982
    Author: Jamie McCrae <jamie.mccrae@nordicsemi.no>
    Date:   Tue Mar 14 12:35:51 2023 +0000

        bootutil: Add active slot number and max app size to shared data

## Highlights

- Add error when flash device fails to open.
- Panic bootloader when flash device fails to open.
- Fixed issue with serial recovery not showing image details for
  decrypted images.
- Fixes issue with serial recovery in single slot mode wrongly
  iterating over 2 image slots.
- CDDL auto-generated function code has been replaced with zcbor function
  calls, this now allows the parameters to be supplied in any order.
- Added currently running slot ID and maximum application size to
  shared data function definition.
- Make the ECDSA256 TLV curve agnostic and rename it to ECDSA_SIG.
- imgtool: add P384 support along with SHA384.
- espressif: refactor after removing IDF submodule
- espressif: add ESP32-C6, ESP32-C2 and ESP32-H2 new chips support
- espressif: adjustments after IDF v5.1 compatibility, secure boot build and memory map organization
- Serial recovery image state and image set state optional commands added
- imgtool: add 'dumpinfo' command for signed image parsing.
- imgtool: add 'getpubhash' command to dump the sha256 hash of the public key
- imgtool's getpub can print the output to a file
- imgtool can dump the raw versions of the public keys
- Drop ECDSA P224 support
- Fixed an issue with boot_serial repeats not being processed when
  output was sent, this would lead to a divergence of commands
  whereby later commands being sent would have the previous command
  output sent instead.
- Fixed an issue with the boot_serial zcbor setup encoder function
  wrongly including the buffer address in the size which caused
  serial recovery to fail on some platforms.
- zcbor library files have been updated to version 0.7.0
- Reworked boot serial extensions so that they can be used by modules
  or from user repositories by switching to iterable sections.
- Removed Zephyr custom img list boot serial extension support.
- (Zephyr) Adds support for sharing boot information with
  application via retention subsystem
- Zephyr no longer builds in optimize for debug mode, this saves a
  significant amount of flash space.
- Reworked image encryption support for Zephyr, static dummy key files
  are no longer in the code, a pem file must be supplied to extract
  the private and public keys. The Kconfig menu has changed to only
  show a single option for enabling encryption and selecting the key
  file.
- Serial recovery can now read and handle encrypted seondary slot
  partitions.
- Serial recovery with MBEDTLS no longer has undefined operations which
  led to usage faults when the secondary slot image was encrypted.
- espressif: allow the use of a different toolchain for building
