---
author: matteo.carlini
title: Trusted Firmware-A v2.8 released with new content and TF-RMM compatibility!
date: 2022-12-08 09:00:00
categories:
  - Blog
layout: post
image: /assets/images/blog/mp1_avenger_tf_crop_1500x1500.png
---

Introduction
------------
Trusted Firmware-A has just completed the official v2.8 release, tagged across multiple repositories.

Support for the 2021 Architecture extensions, DRTM, FF-A v1.1, EAC0 and, for the first time, compatibility with the [newly released TF-RMM](https://www.webwire.com/ViewPressRel.asp?aId=297328)!
The whole content of the release is described on the respective TF-A (1), TF-A-Tests (2) and Hafnium (3) change-logs.
See also the related TF-RMM v0.2.0 documentation (4) and release note (5).

Highlights
------------
- Architecture extensions support:
   - Added Pointer Authentication Extension helper support for QARMA3 (FEAT_PACQARMA3)
   - Partial EL3 support for RNDR/RNDRRS (FEAT_RNG_TRAP)
   - Added SVE fall back if SME not available (FEAT_SME)
   - Support full SVE vector Length (FEAT_SVE)
   - Added Branch Record Buffer Extension (FEAT_BRBE) and Trace Buffer Extension (FEAT_TRBE) under feature detection mechanism
- Added support for DRTM (Dynamic Root of Trust Measurement)
- Various Errata Mitigations for Cortex-A710, A510, X3, X2, A76, A77, A78C, Neoverse N1, N2, GIC-600
- Improved SVE support (as per SMCCCv1.3)
- Ethos-N Driver support for SMMU
- EL3 SPMC feature hardening
- FEAT_RME:
   - Bootflow chain of trust support for AEM FVP
   - Further developments to support TF-RMM upstreaming
   - Tested interop against TF-RMM v0.2.0
- Hafnium SPM & FF-A enablement:
   - FF-A v1.1 additions
      - Partition runtime model and CPU cycle allocation modes
      - Interrupt handling and managed exit flows
      - Memory sharing
      - Framework notifications and indirect messaging
   - Added FF-A console log ABI
   - Added support for GICv3.1 extended INTID ranges
   - Enhanced SVE by supporting up to the maximum vector length 
   - FF-A v1.0 ACS test suite integration in Open CI.
- TF-A Tests support for 4 new platforms (N1SDP, RD-N2, RD-N2-Cfg1, RD-V1)
- TF-A Tests FEAT_RME Realm Payload Testing
- TF-A Tests FF-A v1.1 Secure interrupts Testing
- New cores/platforms support:
   - Arm Hunter ELP CPU support
   - Arm TC2 platform support
   - MediaTek MT8188 platform support
   - Xilinx Versal NET
   - TI K3 J784S4

1. [https://trustedfirmware-a.readthedocs.io/en/latest/change-log.html#version-2-8](https://trustedfirmware-a.readthedocs.io/en/latest/change-log.html#version-2-8)  
2. [https://trustedfirmware-a-tests.readthedocs.io/en/latest/change-log.html#version-2-8](https://trustedfirmware-a-tests.readthedocs.io/en/latest/change-log.html#version-2-8)  
3. [https://review.trustedfirmware.org/plugins/gitiles/hafnium/hafnium/+/HEAD/docs/ChangeLog.md#v2_8](https://review.trustedfirmware.org/plugins/gitiles/hafnium/hafnium/+/HEAD/docs/ChangeLog.md#v2_8)
4. [https://tf-rmm.readthedocs.io/en/tf-rmm-v0.2.0/](https://tf-rmm.readthedocs.io/en/tf-rmm-v0.2.0/)  
5. [https://tf-rmm.readthedocs.io/en/tf-rmm-v0.2.0/about/change-log.html#v0-2-0](https://tf-rmm.readthedocs.io/en/tf-rmm-v0.2.0/about/change-log.html#v0-2-0)
