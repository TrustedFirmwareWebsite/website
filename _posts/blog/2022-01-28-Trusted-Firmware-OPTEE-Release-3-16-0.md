---
author: don.harbin
title: Trusted Firmware OP-TEE Release 3.16.0
date: 2022-01-31 10:00:00
categories:
- Blog
layout: post
image: /assets/images/blog/musca_tf_crop_1500x1500.png
---

Introduction
------------

Trusted Firmware OP TEE [v3.16.0](https://github.com/OP-TEE/optee_os/blob/master/CHANGELOG.md) was released on the 28th of January, 2022. The release includes support for asynchronous notifications, FF-A updates, BTI (Branch Target Identification), generic driver probing sequence and many more.

Highlights 
----------

Here are some of the main additions in OP TEE 3.16.0:

- Patches to support asynchronous notification to the non-secure world have been merged in optee-os and arm-soc tree for linux kernel v5.17. 
- Generic clock framework support.
- Generic driver probing sequence. With this a driver has been added to parse secure device tree and call driver probe functions for nodes with matching compatible drivers.
- Armv8 Security Extension Support
  - FEAT_BTI (Branch Target Identification) support - Armv8.5-A introduces support of BTI’s to protect against JOP (Jump oriented programming) attacks. This can now be enabled for OP-TEE core and TA’s.
- FF-A Support
  - OP-TEE FF-A kernel driver has been merged in kernel v5.16.0. With this FF-A ABI support in OP-TEE is a stable ABI that needs to be backward compatible.
  - Support for FFA ABI’s for memory sharing between SP’s and to return partition information.
- The option is now available for signing TA’s with AWS KMS. A new option added for verifying the signed TA’s.
- Build environments
  - Support for testing Trusted Keys framework with OP-TEE on QEMU v8.
  - Support for FF-A on QEMU v8 using the new SPMC_AT_EL flag.
- New Platform Support
  - i.MX8ULP
  - i.MX8DXL
  - Aspeed AST2600
  - Advantech RSB-3720 board

More details regarding the updates in this release can be found [here](https://github.com/OP-TEE/optee_os/blob/master/CHANGELOG.md). 

Additional information 
----------

The release included updates to the following repos:
- [optee_os](https://optee.readthedocs.io/en/latest/building/gits/optee_os.html#optee-os) - 327 commits and 132 PR's
- [optee_client](https://optee.readthedocs.io/en/latest/building/gits/optee_client.html#optee-client) - 11 commits and 8 PR's
- [optee_test](https://optee.readthedocs.io/en/latest/building/gits/optee_test.html#optee-test) - 13 commits and 13 PR's
- [build](https://optee.readthedocs.io/en/latest/building/gits/build.html#build) - 19 commits and 15 PR's
 
Testing of the release has been performed by the committers and can be found [here](https://github.com/OP-TEE/optee_os/pull/5094/commits/c73f274f1ecacd7553e7ec4e56fcd1c343edc566)
Thirty eight devices were tested for this release using the OP-TEE [xtest](https://optee.readthedocs.io/en/latest/building/gits/optee_test.html) test suite. Testing results can be found in the [pull request itself](https://github.com/OP-TEE/optee_os/pull/5094)

The release has been tagged at [3.16.0](https://github.com/OP-TEE/optee_os/releases/tag/3.16.0) using the OP TEE [release procedure](https://optee.readthedocs.io/en/latest/general/releases.html#release-procedure).

The OP TEE release roadmap can be found [here](https://optee.readthedocs.io/en/latest/general/releases.html). 

Any security fixes prior to the next release will be made available on the [Security Advisories page](https://github.com/OP-TEE/optee_os/security/advisories?state=published). 
