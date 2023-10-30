---
author: jerome-forissier
title: Trusted Firmware OP TEE 3.21.0 Released
date: 2023-04-14 10:00:00

image: "../../assets/images/blog/musca_tf_crop_1500x1500.png"
---

# **Trusted Firmware OP TEE: v3.21.0 Released**

## Introduction

Trusted Firmware OP TEE [v3.21.0](https://github.com/OP-TEE/optee_os/blob/3.21.0/CHANGELOG.md) was released on the14th of April, 2023. The release includes cryptography improvements, new FF-A features, platform updates and more.

## Highlights

Here are some of the main additions in OP TEE 3.21.0:

- Support for TEE_ALG_SM2_DSA_SM3 in the crypto driver framework
- SHA-3 acceleration on platforms with Armv8.2-A Cryptography Extensions
- Support for MD5 hashes in RSA sign/verify operations (for Android test suite compatibility)
- FF-A: allow multiple Secure Partitions having the same interface UUID
- FF-A: introduce support for custom Secure Partition binary format
- StandaloneMM: the UUID of the StMM service is now reported to non-secure world in the same list as pseudo-TAs
- The default toolchain is updated to GCC 11.3.1
- Platform updates
  - NXP: EdgeLock driver for i.MX8ULP and i.MX93 ; TZASC support for imx8mscale ; CAAM manufacturing protection driver + PTA ; i.MX PTA for OCOTP and DIGPROG
  - plat-sam: Add support for sama5d27_wlsom1_ek
  - Xilinx Versal ACAP: enable crypto driver for asymmetric cipher and authentication
  - STM32MP13: hardware RNG support

The release included updates to the following repos:

- [optee_os](https://optee.readthedocs.io/en/latest/building/gits/optee_os.html#optee-os)
- [optee_client](https://optee.readthedocs.io/en/latest/building/gits/optee_client.html#optee-client)
- [optee_test](https://optee.readthedocs.io/en/latest/building/gits/optee_test.html#optee-test)
- [build](https://optee.readthedocs.io/en/latest/building/gits/build.html#build)

More details can be found [here](https://github.com/OP-TEE/optee_os/blob/3.21.0/CHANGELOG.md).

Testing of the release has been performed by the committers and can be found [here](https://github.com/OP-TEE/optee_os/commit/e8abbcfbdf63437a640d5fd87b7e191caab6445e)
Test plan for this release using the OP-TEE are [here](https://optee.readthedocs.io/en/latest/building/gits/optee_test.html) test suite. Testing results can be found in the [pull request itself](https://github.com/OP-TEE/optee_os/pull/5908)

The release has been tagged at [3.21.0](https://github.com/OP-TEE/optee_os/releases/tag/3.21.0) using the OP TEE [release procedure](https://optee.readthedocs.io/en/latest/general/releases.html#release-procedure).

The OP TEE release roadmap can be found [here](https://optee.readthedocs.io/en/latest/general/releases.html).

Any security fixes prior to the next release will be made available on the [Security Advisories page](https://github.com/OP-TEE/optee_os/security/advisories?state=published).

## About TrustedFirmware.org

TrustedFirmware.org is an open source project implementing foundational software components for creating secure devices. Trusted Firmware provides a reference implementation of secure software for processors implementing both the A-Profile and M-Profile Arm architecture. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. Trusted Firmware code is the preferred implementation of Arm specifications, allowing quick and easy porting to modern chips and platforms. This forms the foundations of a Trusted Execution Environment (TEE) on application processors, or the Secure Processing Environment (SPE) of microcontrollers.

[TrustedFirmware.org](https://www.trustedfirmware.org) is member driven and member funded.

To learn more about membership and its benefits, please see the [following page](/about) or send a request for more information to enquiries@trustedfirmware.org.
