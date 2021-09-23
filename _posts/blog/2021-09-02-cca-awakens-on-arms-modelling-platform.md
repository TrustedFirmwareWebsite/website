---
author: ryan.roberts
title: CCA Awakens on Arm’s Modelling Platform 
date: 2021-09-02 10:00:00
categories:
- Blog
layout: post
image: /assets/images/blog/musca_tf_crop_1500x1500.png
---

**CCA Awakens on Arm’s Modelling Platform**
==========================================================================

I’m sure many people will, by now, be aware of Arm’s Confidential Compute Architecture (CCA). This is a key component of the Armv9-A architecture and was announced earlier this year. If you missed it, I heartily recommend taking some time to watch the excellent presentations from the Linaro Arm CCA Tech Event [1] and review the documentation on Arm’s website [2], [3]. As part of the CCA Tech Event, Arm made public a branch of the TF-A Monitor to preview the required implementation changes to support CCA [4].

Today we are announcing the next piece of the puzzle; the release by Arm of a Fixed Virtual Platform (FVP) that supports the Realm Management Extension (RME) [5]. With this, it is now possible to execute the TF-A Monitor preview code. Full instructions are available at [6] which describe how to access and build all the code, and boot and run the new RME tests on the FVP.

For now, the rme_prototype branch replaces the secure world with realm world, replacing the secure world image (BL32) with the realm world binary. A Test Realm Payload (TRP) is packaged as BL32 by default, which is used as a mock Realm Management Monitor (RMM) by the TFTF tests. BL2 is also modified to run at EL3 and load firmware images in the realm and non-secure address spaces. A common RMM Dispatcher (RMMD) is included with the monitor, which rCoutes RMI calls between non-secure and realm worlds and provides the Granule Transition Service (GTS) for migrating memory between PASs. See [7] for more details.

{% include image.html path="/assets/images/blog/CCA_Pic1.png" alt="PAS Overview image" %}

<div align="center"></div>

While far from complete, the rme_prototype branch can provide developers with an understanding of the shape and direction of the ultimate solution. And by running it on the FVP, it should be possible to better understand the runtime behaviours. All feedback is welcome through the [TF-A mailing list](https://lists.trustedfirmware.org/mailman/listinfo/tf-a).

The TF-A team will keep submitting patches to mainline TF-A following the usual upstream contribution flow and, once these patches are merged, the rme_prototype branch will be retired. The goal is to get enough functionality into mainline TF-A in time for the TF-A v2.6 release in November, then continue to mature the support over time.

1: [Arm CCA sessions at Linaro Connect](https://connect.linaro.org/resources/arm-cca/)

2: [Arm CCA overview](https://www.arm.com/why-arm/architecture/security-features/arm-confidential-compute-architecture)

3: [Arm CCA introduction](https://developer.arm.com/architectures/architecture-security-features/confidential-computing)

4: [TF-A Monitor code for Arm CCA architecture blog on trustedfirmware.org](https://www.trustedfirmware.org/blog/TrustedFirwmare_TF-A_Monitor_blogpost/)

5: [Architecture Envelope Models(AEM) in Fixed Virtual Platforms(FVPs)](https://developer.arm.com/tools-and-software/simulation-models/fixed-virtual-platforms/arm-ecosystem-models) 

6: [Realm Management Extension(RME) Enabled TF-A Users Guide](https://trustedfirmware-a.readthedocs.io/en/topics-rme_prototype/components/rme/rme-userguide.html) 

7: https://connect.linaro.org/resources/armcca/tfa-monitor-firmware-deep-dive/ 
