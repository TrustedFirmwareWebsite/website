---
author: matteo.carlini
title: Trusted Firmware-A v2.9 released!
date: 2022-12-08 09:00:00
categories:
  - Blog
layout: post
image: /assets/images/blog/mp1_avenger_tf_crop_1500x1500.png
---

Introduction
------------
Trusted Firmware-A has completed the official v2.9 release, tagged across multiple repositories including TF-A, TF-A Tests, 
Hafnium, TF-A OpenCI Scripts & Jobs and  TF-RMM 0.3.0


Highlights
------------
The main highlights comprise :
- Support for the 2021|2022 Architecture extensions,
- Dynamic feature detection,
- Errata Management Firmware Interface against spec 1.0
- FF-A v1.2 Spec Early Adoption, FF-A v1.1 Memory Sharing
- Realm Support to leverage SVE hardware functionality 

  The whole content of the release is described on the respective TF-A (1), TF-A-Tests (2), Hafnium (3) and TF-RMM (4) and (5) change logs.
- Architecture extensions support:
  - Support for PSCI OS initiated mode
  - Architecture support for FEAT_TCR2, Guarded Control Stack (FEAT_GCS), Config Register Support for FEAT_HCX
  - Save/Restore Support for FEAT_PIE/POE, FEAT_SME | SME2, FEAT_MPAM: runtime check
  - Added dynamic detection of architecture feature enablement
  - System registers access trap handler
- Added RAS extension handling and crash reporting
- Eighteen CPU Errata Mitigations for Cortex-A510, A-78, X2, Neoverse V1, N2 cores and GICv3 bug fixes
- Errata Management Firmware Interface implementation supported for version 1.0 of the public specification



About TrustedFirmware.org
----------
TrustedFirmware.org is an open source project implementing foundational software components for creating secure devices. Trusted Firmware provides a reference implementation of secure software for processors implementing both the A-Profile and M-Profile Arm architecture. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. Trusted Firmware code is the preferred implementation of Arm specifications, allowing quick and easy porting to modern chips and platforms. This forms the foundations of a Trusted Execution Environment (TEE) on application processors, or the Secure Processing Environment (SPE) of microcontrollers. 

[TrustedFirmware.org](https://www.trustedfirmware.org) is member driven and member funded. 

To learn more about membership and its benefits, please see the [following page](https://www.trustedfirmware.org/about) or send a request for more information to enquiries@trustedfirmware.org.

