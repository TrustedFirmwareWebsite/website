---
author: matteo.carlini
title: Trusted Firmware-A v2.6 released with Armv9 features support!
date: 2022-12-07 09:00:00
categories:
  - Blog
layout: post
image: /assets/images/blog/mp1_avenger_tf_crop_1500x1500.png
---
Trusted Firmware-A has just completed the official v2.6 release, tagged across four main repositories: TF-A, TF-A-Tests, Hafnium and TF-A OpenCI Scripts.

This is the very first release to enable support for the recently announced Armv9 architecture features.

The whole content of the release is described on the respective TF-A (1), TF-A-Tests (2) and Hafnium (3) change-logs, but here are some interesting highlights.

- Armv9 features support:
   - Realm Management Extension (FEAT_RME): first prototype implementation (ENABLE_RME)
      - Context management changes
      - ENABLE_RME build option and support for RMM image
      - GPT library support
      - Realm security state definition
      - Added register definitions and helper functions for FEAT_RME
      - RMM dispatcher (RMMD)
      - Test Realm Payload (TRP) 
   - Scalable Matrix Extension (FEAT_SME) enabled for Normal world use
   - Trace Buffer Extension (FEAT_TRBE): enable access to trace buffer control registers from Normal world
   - Embedded Trace Extension (FEAT_ETE, FEAT_ETEv1p1): enabled for Normal world use
- Other Armv8 Architecture features support:
   - Activity Monitors Extension (FEAT_AMU): enable per-core AMU auxiliary counters
   - Support for the HCRX_EL2 register (FEAT_HCX)
   - Scalable Vector Extension (FEAT_SVE): enabled for the Secure world
   - Self-hosted Trace Extensions (FEAT_TRF): enable trace system registers access from Normal world
- Support for the Arm Firmware Update specification
- Hafnium SPM & FF-A enablement:
   - Arm FF-A v1.1 notifications support
   - Arm FF-A v1.1 interrupt handling (Hafnium para-virtualized interface)
   - S-EL0 partitions support through VHE architecture extension in the secure world
   - SVE:
      - Support for saving/restoring the SVE live state such that S-EL2/Hafnium preserves the normal world state on world switches
      - Secure partitions are permitted to use FP/SIMD while normal world uses SVE/SIMD/FP on the same core.
   - Updated toolchain to LLVM/Clang 12
   - Published new SPMC threat model

**New Arm cores and Arm/Partners platforms support:**  
- Arm CPUs: Neoverse-Demeter, Cortex Hunter & Hayes
- Arm FVP-R: BL1 support for Armv8-R64 FVP
- Arm TC platforms support
   - Introduced new TC1 platform
   - Enabled MPMM
   - Enable SVE for both Normal and Secure world
   - Add support for trusted services
- Arm Dipdha 64b support
- Allwinner R329 SoC
- Marvell SolidRun CN913X CEx7 Evaluation Board
- NXP Layerscape Ls1028a soc and board support
- QTI sc7280 platform

Various Hardware errata software workarounds added for Cortex-A78, Cortex-A710, Neoverse-N2, Neoverse-V1

https://trustedfirmware-a.readthedocs.io/en/latest/change-log.html#version-2-6
https://trustedfirmware-a-tests.readthedocs.io/en/latest/change-log.html#version-2-6
https://review.trustedfirmware.org/plugins/gitiles/hafnium/hafnium/+/HEAD/docs/ChangeLog.md#v2_6

