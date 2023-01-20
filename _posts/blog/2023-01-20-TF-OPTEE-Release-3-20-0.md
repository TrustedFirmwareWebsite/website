---
author: don.harbin
title: Trusted Firmware OP TEE Release 3.20.0
date: 2023-01-20 10:00:00
categories:
- Blog
layout: post
image: /assets/images/blog/musca_tf_crop_1500x1500.png
---

**Trusted Firmware OP TEE: v3.20.0 Release**
=====================================================

Introduction
------------

Trusted Firmware OP TEE [v3.20.0](https://github.com/OP-TEE/optee_os/blob/3.20.0/CHANGELOG.md) was released on the 20th of January, 2023. The release includes support for signing TAs using subkey, SCMI server from SCP-firmware, platform updates and more.

Highlights 
----------

Here are some of the main additions in OP TEE 3.20.0:

- Signing TAs using subkeys
- SCMI server from SCP-firmware
- SHA-512 and SM3 using ARMv8.2-A cryptographic extensions
- Add support for compiler stack protector (Core and TAs)
- Adds support for the SM4-XTS algorithm
- Adds mitigations in TA loading against hardware fault injection attacks
- Reject weak hash algorithms when verifying for instance signed TAs

The release included updates to the following repos:

- [optee_os](https://optee.readthedocs.io/en/latest/building/gits/optee_os.html#optee-os) 
- [optee_client](https://optee.readthedocs.io/en/latest/building/gits/optee_client.html#optee-client) 
- [optee_test](https://optee.readthedocs.io/en/latest/building/gits/optee_test.html#optee-test) 
- [build](https://optee.readthedocs.io/en/latest/building/gits/build.html#build) 
 
More details can be found in the change log [here](https://github.com/OP-TEE/optee_os/blob/3.20.0/CHANGELOG.md).

Testing of the release has been performed by the committers and can be found [here](https://github.com/OP-TEE/optee_os/commit/8e74d47616a20eaa23ca692f4bbbf917a236ed94)

Test plan for this release using the OP-TEE are [here](https://optee.readthedocs.io/en/latest/building/gits/optee_test.html) test suite. 
Testing results can be found in the [pull request itself](https://github.com/OP-TEE/optee_os/pull/5751)

The release has been tagged at [3.20.0](https://github.com/OP-TEE/optee_os/releases/tag/3.20.0) using the OP TEE [release procedure](https://optee.readthedocs.io/en/latest/general/releases.html#release-procedure). 

The OP TEE release roadmap can be found [here](https://optee.readthedocs.io/en/latest/general/releases.html). 

Any security fixes prior to the next release will be made available on the [Security Advisories page](https://github.com/OP-TEE/optee_os/security/advisories?state=published). 

About TrustedFirmware.org
----------
TrustedFirmware.org is an open source project implementing foundational software components for creating secure devices. Trusted Firmware provides a reference implementation of secure software for processors implementing both the A-Profile and M-Profile Arm architecture. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. Trusted Firmware code is the preferred implementation of Arm specifications, allowing quick and easy porting to modern chips and platforms. This forms the foundations of a Trusted Execution Environment (TEE) on application processors, or the Secure Processing Environment (SPE) of microcontrollers. 

To learn more about TrustedFirmware.org, please visit: [https://www.trustedfirmware.org/](https://www.trustedfirmware.org)

TrustedFirmware.org is member driven and member funded. To learn more about membership and its benefits, please see the [following page](https://www.trustedfirmware.org/about) or send a request for more information to enquiries@trustedfirmware.org.
