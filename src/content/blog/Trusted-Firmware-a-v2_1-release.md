---
author: matteo-carlini
title: Trusted Firmware-A & TF-A-Tests v2.1 released
date: 2019-03-30 08:00:00

image: "../../assets/images/blog/synquacer_tf_crop_1500x1500.png"
---

Trusted Firmware-A and the related Trusted Firmware-A Tests v2.1 releases are now tagged!

The whole content of the two releases is described on the respective TF-A (1) and TF-A-Tests (2) change-logs, but here are some interesting highlights.

The TF-A release comes with new architectural features enablement:

- Armv8.3 Pointer Authentication is now enabled for Normal world software
  - Linux Kernel, general purpose Operating Systems and user-space applications can make use of this feature to protect against Return-Oriented programming attacks.
  - Support for Secure world use of Pointer authentication (both in Firmware and in Trusted OSs) is still experimental and it will be finalised in the next release.
- Armv8.4 Data Independent Timing (DIT) & Armv8.4 Small translation tables (TTST)
- Armv8.5 PSTATE.SSBS Speculation Store Bypass Safe (implemented on Arm Cortex-A76 & Neoverse-N1), an architecture-defined bit to ease firmware mitigation against Spectre Variant 4 (CVE-2018-3639)
  - Despite being introduced with the Armv8.5 extension, this is an optional Armv8.0 feature (ARMv8.0-SpecRest) that can be implemented by CPUs based on earlier version of the architecture. In fact, it's included in the Arm Cortex-A76 and Arm Neoverse-N1 CPUs.

Both TF-A and TF-A-Tests releases include updates to the Secure Partition Manager and its related testing, based on an early Alpha version of the SPCI and SPRT specifications. These are anyway highly subject to change and therefore should be still considered as experimental.
The currently supported SPM based on the Arm Management Mode (MM) Interface specification is still fully available and enabled by default under the SPM_MM compilation flag.

A lot of new Arm and Partners platforms have been included, particularly aligned with the Arm Neoverse Roadmap and recent announcements.

![Neoverse](../../assets/images/blog/arm_neoverse.jpg)

Arm Neoverse support in TF-A now includes:

- Neoverse N1 (already supported since v1.6/v2.0 as codename Ares) (3)
- Neoverse E1 (already supported since v1.6/v2.0 as codename Helios) (4)
- Neoverse N1 Reference Design FVP (5)
- Neoverse E1 Reference Design FVP (5)
- Neoverse N1 System Development Platform (N1SDP) (6)
- Neoverse Zeus preliminary support

New Partners platform support:

- NXP i.MX8MQ & i.MX7 Warp7
- Xilinx Versal ACAP
- Renesas R-Car Gen3
- Amlogic Meson S905
- Marvell Armada 3700
- Intel Stratix 10 SoC FPGA

Additional new features and enhancements:

- Rom Lib Feature:
  - Already released as experimental as part of v1.6/v2.0. Now allowing patching of romlib functions
- Dynamic Configuration
  - Position Independent Executable (PIE) support for BL31 (enabled on FVPs)
- Documentation updates:
  - Exception Handling Framework documentation
  - Library at ROM (romlib) documentation
  - RAS framework documentation
  - Coding Guidelines document
- CVE-2018-19440 mitigation against information leakage from one Normal world SMC client to another

1. [TF-A v2.1 ChangeLog](https://git.trustedfirmware.org/TF-A/trusted-firmware-a.git/about/docs/change-log.rst#trusted-firmware-a-version-2-1)
2. [TF-A-Tests v2.1 ChangeLog](https://git.trustedfirmware.org/TF-A/tf-a-tests.git/about/docs/change-log.rst#trusted-firmware-a-tests-version-2-1)
3. [Neoverse N1](https://developer.arm.com/ip-products/processors/neoverse/neoverse-n1)
4. [Neoverse E1](https://developer.arm.com/ip-products/processors/neoverse/neoverse-e1)
5. [Arm FVPs](https://developer.arm.com/tools-and-software/simulation-models/fixed-virtual-platforms)
6. [N1 Reference Platform](https://developer.arm.com/tools-and-software/development-boards/neoverse-reference-design)
