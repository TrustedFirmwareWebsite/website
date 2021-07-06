---
author: matteo.carlini
title: Introducing the TF-A Monitor code for the Arm CCA architecture!
date: 2021-07-06 08:00:00
categories:
- Blog
layout: post
image: /assets/images/blog/synquacer_tf_crop_1500x1500.png
---

Introducing the TF-A Monitor code for the Arm CCA architecture!
=============================================================================

Arm has recently disclosed its Confidential Compute Architecture (1), or Arm CCA, a key component of the Armv9-A architecture which has been announced earlier this year.

Arm CCA encompasses the latest enhancements to Arm’s support for confidential computing. Developer material and all related specifications have been published by Arm to its developer website. (2)(3)

In the Linaro Arm CCA Tech Event (4), the Arm team has introduced the hardware and software architectures with the relationship and boundaries among all the related CCA components. Furthermore, the open source software enablement plan was disclosed, with the Trusted Firmware.org project being at the heart of it. 

![](/assets/images/blog/TF-A_Drawing.png){:height="50%" width="50%"}

{% include image.html path="/assets/images/blog/TF-A_Drawing.png" alt="Demo Overview image" %}

TrustedFirmware.org will host a reference implementation of the new RMM component and a new TF-A Monitor implementing the RME architecture at the newly defined Root world, together with changes to the Hafnium SPM component for handling dynamic secure memory.

And the first step of this enablement is now published!

The Trusted Firmware project is delighted to welcome the initial TF-A Monitor prototype branch and its associated Tests bundle (5)(6), both derived from the upstream TF-A and TF-A-Tests projects.

The branch aims to showcase few important aspects of the RME architecture, including boot flow changes, GPT initialization, support for the new Realm world and an initial RMM dispatcher implementation, also including a Test Realm payload.

The TF-A-Tests branch instead has new testcases for the above and also demonstrates delegate and undelegate operations as defined by the Arm CCA specifications. Both prototype branches have been tested against an Arm AEM Base FVP which will be soon made available by Arm for free download.

Watch this space for more information and start contributing to the ecosystem enablement for Arm CCA within the TrustedFirmware.org project!

**Links:**

1. Arm CCA Landing page (https://www.arm.com/why-arm/architecture/security-features/arm-confidential-compute-architecture)
1. Blogpost about Arm CCA enablement https://community.arm.com/developer/ip-products/processors/b/processors-ip-blog/posts/unlocking-the-power-of-data-with-arm-cca
1. Arm CCA resources (https://dev	eloper.arm.com/architectures/architecture-security-features/confidential-computing)
1. Linaro Arm CCA Tech Event (https://connect.linaro.org/resources/arm-cca/)
1. TF-A Monitor branch (https://git.trustedfirmware.org/TF-A/trusted-firmware-a.git/log/?h=topics/rme_prototype)
1. TF-A Monitor Tests (https://git.trustedfirmware.org/TF-A/tf-a-tests.git/log/?h=topics/rme_prototype)

