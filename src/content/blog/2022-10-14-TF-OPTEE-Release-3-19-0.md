---
author: don.harbin
title: Trusted Firmware OP TEE Release 3.19.0
date: 2022-10-14 10:00:00
categories:
  - Blog
layout: post
image: "@assets/images/blog/musca_tf_crop_1500x1500.png"
---

# **Trusted Firmware OP TEE: v3.19.0 Release**

## Introduction

Trusted Firmware OP TEE [v3.19.0](https://github.com/OP-TEE/optee_os/blob/3.19.0/CHANGELOG.md) was released on the 14th of October, 2022. The release includes support for Armv8.3-A Pointer Authentication in S-EL1, Ed25519 elliptic curve algorithms, platform updates and more.

## Highlights

Here are some of the main additions in OP TEE 3.19.0:

- Armv8.3-A Pointer Authentication support (FEAT_PAuth) for OP-TEE core at S-EL1
- Adds support for the elliptic curve algorithms Ed25519, Ed25519ctx and Ed25519ph as defined in TEE Internal Core API v1.3.1, as well as PKCS#11 support for the same
- LibTomCrypt updated to v1.18.2-681-ge6be20bf (tip of the `develop` branch on September 13, 2022)
- MBedTLS updated to 2.28.1
- Zlib updated to v1.12.1
- Fixes linker errors with GNU binutils 2.39
- Support for loading SP images from the TF-A FIP (Firmware Image Package)
- Added a new suite to xtest (ffa_spmc) to enable testing the SPMC as part of the normal OP-TEE test procedure
- Platforms: adds support for Arm Corstone-1000, NXP i.MX 93 EVK and TI K3 J784S4; various improvements and fixes for Renesas R-Car H3, STMicroelectronics STM32MP1, TI K3, Xilinx Versal, Xilinx ZynqMP

The release included updates to the following repos:

- [optee_os](https://optee.readthedocs.io/en/latest/building/gits/optee_os.html#optee-os)
- [optee_client](https://optee.readthedocs.io/en/latest/building/gits/optee_client.html#optee-client)
- [optee_test](https://optee.readthedocs.io/en/latest/building/gits/optee_test.html#optee-test)
- [build](https://optee.readthedocs.io/en/latest/building/gits/build.html#build)

More details can be found [here](https://github.com/OP-TEE/optee_os/blob/3.19.0/CHANGELOG.md).

Testing of the release has been performed by the committers and can be found [here](https://github.com/OP-TEE/optee_os/commit/afacf356f9593a7f83cae9f96026824ec242ff52)

Test plan for this release using the OP-TEE are [here](https://optee.readthedocs.io/en/latest/building/gits/optee_test.html) test suite. Testing results can be found in the [pull request itself](https://github.com/OP-TEE/optee_os/pull/5550)

The release has been tagged at [3.19.0](https://github.com/OP-TEE/optee_os/releases/tag/3.19.0) using the OP TEE [release procedure](https://optee.readthedocs.io/en/latest/general/releases.html#release-procedure).

The OP TEE release roadmap can be found [here](https://optee.readthedocs.io/en/latest/general/releases.html).

Any security fixes prior to the next release will be made available on the [Security Advisories page](https://github.com/OP-TEE/optee_os/security/advisories?state=published).
