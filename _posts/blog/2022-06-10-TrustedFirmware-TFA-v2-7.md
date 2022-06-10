---
author: matteo.carlini
title: Trusted Firmware-A v2.7 released with lots of new content!
date: 2022-06-10 09:00:00
categories:
  - Blog
layout: post
image: /assets/images/blog/mp1_avenger_tf_crop_1500x1500.png
---

Introduction
------------
Trusted Firmware-A has just completed the official v2.7 release, tagged across four main repositories: TF-A, TF-A-Tests, Hafnium and TF-A Open CI Scripts.
Support for the 2020 Architecture extensions, Spectre BHB mitigations, Secure Partition Manager (SPM) operating at EL3 and much much more!
The whole content of the release is described on the respective TF-A [1], TF-A-Tests [2] and Hafnium [3] change-logs, but here are some interesting highlights.


Highlights
------------
- Architecture extensions support:
  - Branch Record Buffer Extension (FEAT_BRBE) for Normal world support
  -	Statistical Profiling Extension (FEAT_SPEv1p2) support
  -	WFE/WFI instructions with Timeout (FEAT_WFxT) TF-A-Tests support
  - Alternate Floating-Point (FEAT_AFP) TF-A-Tests support
  - Increased precision of Reciprocal Estimate and Reciprocal Square Root Estimate (FEAT_RPRES) TF-A-Tests support
  - Armv8.3 Extended Cache Index (FEAT_CCIDX) support
- Spectre Branch History Buffer (BHB) Mitigations
- Various Software workarounds for Errata affecting Cortex-A710, Cortex-A510, Cortex-A78, Cortex-X2 
-	New Architectural Features Detection Mechanism (Experimental Feature)
- SMMU Granule Protection Checks (GPC) for Secure and Normal world transactions
-	FF-A & Secure Partition Manager (SPM) enablement:
  - Secure Partition Manager (SPM) operating at EL3 (Experimental Feature)
  -	Hafnium: Memory Tagging Extension (MTE) stack tagging support at S-EL2
  -	Hafnium FF-A implementation:
    - FF-A v1.1 EAC0 support: Boot protocol, Setup and discovery, Notifications
    - FF-A v1.1 Beta0: Interrupt handling improvements
    - FF-A v1.0 compliance suite fixes

**New Arm cores and Arm/Partners platforms support:**  
- Arm CPUs: Neoverse-Poseidon, Cortex-X1
- NXP Layerscape LS1043A*, LS1046A*, LS1088A* SoCs & Boards support
- Various updates to existing platforms

1. [https://trustedfirmware-a.readthedocs.io/en/latest/change-log.html#version-2-7](https://trustedfirmware-a.readthedocs.io/en/latest/change-log.html#version-2-7) \
2. [https://trustedfirmware-a-tests.readthedocs.io/en/latest/change-log.html#version-2-7](https://trustedfirmware-a-tests.readthedocs.io/en/latest/change-log.html#version-2-7) \
3. [https://review.trustedfirmware.org/plugins/gitiles/hafnium/hafnium/+/HEAD/docs/ChangeLog.md#v2_7  ](https://review.trustedfirmware.org/plugins/gitiles/hafnium/hafnium/+/HEAD/docs/ChangeLog.md#v2_7)  
