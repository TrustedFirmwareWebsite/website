---
author: matteo.carlini
title: Trusted Firmware-A v2.5 released through OpenCI!
date: 2021-05-26 08:00:00
categories:
  - Blog
layout: post
image: "@assets/images/blog/synquacer_tf_crop_1500x1500.png"
---

# Trusted Firmware-A v2.5 released through OpenCI!

Trusted Firmware-A has just completed the official v2.5 release, tagged across four main repositories: TF-A, TF-A-Tests, Hafnium and TF-A OpenCI Scripts.

This is the very first release to make use of and leverage the recently deployed Open Continuous Integration (1) infrastructure now integral part of Trusted Firmware.org!

The whole content of the release is described on the respective TF-A (2), TF-A-Tests (3) and Hafnium (4) change-logs, but here are some interesting highlights.

- TF-A Public Threat Model published
- 2020 Architecture Extensions support:
  - MTE Asymmetric Fault Handling extension (FEAT_MTE3)
  - Privileged Access Never extension (FEAT_PAN3)
- Armv8.6 features support:
  - Activity Monitors extension version 1.1 (FEAT_AMUv1p1)
  - Multi-threaded PMU extension (FEAT_MTPMU)
- Armv8.5 features support:
  - Speculation Barrier (SB) for non-Armv8.5 platforms starting from Armv8.0 (FEAT_SB)
  - Helper functions for Random number generator registers (FEAT_RNG)
- Support for TRNG firmware interface service
- SiP service to configure Ethos-N NPU
- GPT Image Support aligned to Firmware update specification
- Hafnium SPM updates:
  - Pointer Authentication (PAuth) & Branch Target Identifier (BTI) support
  - SMMUv3.2 S-EL2 driver support to perform stage 2 translation, protection and isolation of upstream peripheral device transactions
  - Arm FF-A v1.0 Non-secure interrupt handling
  - Arm FF-A Power management support at boot time
  - Arm FF-A Direct message interfaces
  - Arm FF-A Memory sharing interfaces
  - Added SPMC support to Hafnium CI
  - SIMD save/restore support of other world FP/NEON/SIMD state

New Arm cores and Arm/Partners platforms support:

- Arm CPUs: Cortex-X2, Makalu & Makalu ELP, Cortex-A78C, Neoverse-N2
- Arm RD-N2 platform
- MediaTek MT8195
- Allwinner H616 SoC
- NXP lx2160a family: lx2160a-aqds, lx2160a-rdb, lx2162a-aqds

1. [OpenCI Homepage](https://www.trustedfirmware.org/projects/open-ci/)
2. [TF-A v2.5 ChangeLog](https://trustedfirmware-a.readthedocs.io/en/latest/change-log.html#version-2-5)
3. [TF-A-Tests v2.5 ChangeLog](https://trustedfirmware-a-tests.readthedocs.io/en/latest/change-log.html#version-2-5)
4. [Hafnium v2.5 ChangeLog](https://review.trustedfirmware.org/plugins/gitiles/hafnium/hafnium/+/HEAD/docs/ChangeLog.md#v2_5)
