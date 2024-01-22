---
author: jens-wiklander
title: Trusted Firmware OP TEE Release 4.1.0
date: 2024-01-18 10:00:00

image: ../../assets/images/blog/musca_tf_crop_1500x1500.png
---

**Trusted Firmware OP TEE: v4.1.0 Release**
=====================================================

Introduction
------------

Trusted Firmware OP TEE [v4.1.0](https://github.com/OP-TEE/optee_os/blob/4.1.0/CHANGELOG.md) was released on the 19th of January, 2024. The release is a minor version update which ……..

Highlights 
----------

Here are some of the main additions in OP TEE 4.1.0: 
- Experimental support for Firmware Handoff specification v0.9 [1]
- Refactor boot arguments from assembly to C parsing
- Update drivers to use the new internal interrupt API
- Remove old unused internal interrupt API
- Configure per CPU GICv3 redistributor address
- Support FF-A notifications with SPMC at S-EL1
- Support donating a secure SGI to normal world
- Remove 4k limit on RPC memory allocation with the recently merged kernel support
- Halt all cores on panic in a multi-core system
- Add clk_print_summary() to print clock tree summary
- Clarify statistics PTA ABI in a single header file
- Remove useless write_counter in struct rpmb_fat_entry
- Enable cache maintenance on non-secure buffers for CAAM
- Address static code analysis issues (Coverity)
- Optional automatic discovery of maximal physical address
- Small RISC-V fixes and improvements
- PKCS#11 fixes and improvements
  - Prevent user ID verification when user PIN is not set
  - Improve PIN counter handling robustness

Platform updates:
- Nuvoton
- stm32mp25x: Introduce minimal support for these 64-bit platforms
- stm32mp1:
  - Enable asynchronous notifications on stm32mp13
  - By default disabled reserved shared memory
  - Add remoteproc driver
- IMX: Add support for i.MX8DX
- Aspeed - AST2700
- Vexpress - QEMU Armv8-A and FVP
- Mediatek MT8xxx
- Michrochip SAMA
- K3

[1] https://github.com/FirmwareHandoff/firmware_handoff/releases/tag/v0.9

The release included updates to the following repos:
- [optee_os](https://optee.readthedocs.io/en/latest/building/gits/optee_os.html#optee-os) 
- [optee_client](https://optee.readthedocs.io/en/latest/building/gits/optee_client.html#optee-client) 
- [optee_test](https://optee.readthedocs.io/en/latest/building/gits/optee_test.html#optee-test) 
- [build](https://optee.readthedocs.io/en/latest/building/gits/build.html#build) 
- [manifest] (https://optee.readthedocs.io/en/latest/building/gits/build.html#manifests)

More details can be found [here](https://github.com/OP-TEE/optee_os/blob/4.1.0/CHANGELOG.md).

Testing of the release has been performed by the committers and can be found [here](https://github.com/OP-TEE/optee_os/commit/2a5b1d1232f582056184367fb58a425ac7478ec6)
Test plan for this release using the OP-TEE are [here](https://optee.readthedocs.io/en/latest/building/gits/optee_test.html) test suite. Testing results can be found in the [pull request itself](https://github.com/OP-TEE/optee_os/pull/6341)

The release has been tagged at [4.1.0](https://github.com/OP-TEE/optee_os/releases/tag/4.1.0) using the OP TEE [release procedure](https://optee.readthedocs.io/en/latest/general/releases.html#release-procedure). 

The OP TEE release roadmap can be found [here](https://optee.readthedocs.io/en/latest/general/releases.html). 

Any security fixes prior to the next release will be made available on the [Security Advisories page](https://github.com/OP-TEE/optee_os/security/advisories?state=published). 

About TrustedFirmware.org
----------
TrustedFirmware.org is an open source project implementing foundational software components for creating secure devices. Trusted Firmware provides a reference implementation of secure software for processors implementing both the A-Profile and M-Profile Arm architecture. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. Trusted Firmware code is the preferred implementation of Arm specifications, allowing quick and easy porting to modern chips and platforms. This forms the foundations of a Trusted Execution Environment (TEE) on application processors, or the Secure Processing Environment (SPE) of microcontrollers. Visit:[https://www.trustedfirmware.org/](https://www.trustedfirmware.org)
TrustedFirmware.org is member driven and member funded. To learn more about membership and its benefits, please see the [following page](https://www.trustedfirmware.org/about) or send a request for more information to enquiries@trustedfirmware.org.
