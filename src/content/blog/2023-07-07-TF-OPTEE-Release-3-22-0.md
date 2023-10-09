---
author: jerome.forissier
title: Trusted Firmware OP TEE Release 3.22.0
date: 2023-07-07 10:00:00
categories:
  - Blog
layout: post
image: "@assets/images/blog/musca_tf_crop_1500x1500.png"
---

# **Trusted Firmware OP TEE: v3.22.0 Release**

## Introduction

Trusted Firmware OP TEE [v3.22.0](https://github.com/OP-TEE/optee_os/blob/3.22.0/CHANGELOG.md) was released on the7th of July, 2023. The release includes cryptography improvements, new FF-A features, platform updates and more.

## Highlights

Here are some of the main additions in OP TEE 3.22.0:

- Support for FF-A v1.1
- Support for stack canary randomization
- Interrupt framework updates, new interrupt chip framework
- New i2c framework
- Performance improvements of the ftrace implementation
- PKCS#11 TA fixes related to authentication mode
- Platform updates
  - AOSP build fixes
  - TPM2 driver removed
  - CAAM driver updates
  - SE050 driver updates (software fallback)
  - Plat-k3 updates, plat-stm32mp1 updates (SCMI, GPIO, DTS)
- Miscellaneous fixes and improvements

The release included updates to the following repos:

- [optee_os](https://optee.readthedocs.io/en/latest/building/gits/optee_os.html#optee-os)
- [optee_client](https://optee.readthedocs.io/en/latest/building/gits/optee_client.html#optee-client)
- [optee_test](https://optee.readthedocs.io/en/latest/building/gits/optee_test.html#optee-test)
- [build](https://optee.readthedocs.io/en/latest/building/gits/build.html#build)
- [manifest](https://optee.readthedocs.io/en/latest/building/gits/build.html#manifests)

More details can be found [here](https://github.com/OP-TEE/optee_os/blob/3.22.0/CHANGELOG.md).

Testing of the release has been performed by the committers and can be found [here](https://github.com/OP-TEE/optee_os/commit/001ace6655dd6bb9cbe31aa31b4ba69746e1a1d9). Test plans for this release using the OP-TEE test suites are [here](https://optee.readthedocs.io/en/latest/building/gits/optee_test.html). Testing results can be found in the [pull request itself](https://github.com/OP-TEE/optee_os/pull/6125).

The release has been tagged at [3.22.0](https://github.com/OP-TEE/optee_os/releases/tag/3.22.0) using the OP TEE [release procedure](https://optee.readthedocs.io/en/latest/general/releases.html#release-procedure).

The OP TEE release roadmap can be found [here](https://optee.readthedocs.io/en/latest/general/releases.html).

Any security fixes prior to the next release will be made available on the [Security Advisories page](https://github.com/OP-TEE/optee_os/security/advisories?state=published).

## About TrustedFirmware.org

TrustedFirmware.org is an open source project implementing foundational software components for creating secure devices. Trusted Firmware provides a reference implementation of secure software for processors implementing both the A-Profile and M-Profile Arm architecture. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. Trusted Firmware code is the preferred implementation of Arm specifications, allowing quick and easy porting to modern chips and platforms. This forms the foundations of a Trusted Execution Environment (TEE) on application processors, or the Secure Processing Environment (SPE) of microcontrollers. Visit: [https://www.trustedfirmware.org/](https://www.trustedfirmware.org) for more information.
TrustedFirmware.org is member driven and member funded. To learn more about membership and its benefits, please see the [following page](https://www.trustedfirmware.org/about) or send a request for more information to [enquiries@trustedfirmware.org](mailto:enquiries@trustedfirmware.org).
