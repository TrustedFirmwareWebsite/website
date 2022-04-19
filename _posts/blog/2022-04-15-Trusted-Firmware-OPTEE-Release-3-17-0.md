---
author: don.harbin
title: Trusted Firmware OP TEE Release 3.17.0
date: 2022-04-15 10:00:00
categories:
- Blog
layout: post
image: /assets/images/blog/musca_tf_crop_1500x1500.png
---

**Trusted Firmware OP TEE: v3.17.0 Release**
=====================================================

Introduction
------------

Trusted Firmware OP TEE [v3.17.0](https://github.com/OP-TEE/optee_os/blob/3.17.0/CHANGELOG.md) was released on the 15th of April, 2022. The release includes support for remote attestation PTA, RTC  and TPMv2 driver, Spectre BHB workaround and many more.

Highlights 
----------

Here are some of the main additions in OP TEE 3.17.0:
- Spectre BHB workaround
- Armv8 Security Extension Support
   - FEAT_PAUTH (Pointer Authentication) support - Armv8.3-A introduces support of PAUTH to protect against ROP (Return oriented programming) attacks. This can now be enabled for TA’s.
- FF-A Support
   - FF-A with SPMC at EL3
- Remote Attestation PTA
- RTC support
- Driver for TPMv2 (MMIO based) 

The release included updates to the following repos:
- [optee_os](https://optee.readthedocs.io/en/latest/building/gits/optee_os.html#optee-os) - 202 commits and 71 PR's
- [optee_client](https://optee.readthedocs.io/en/latest/building/gits/optee_client.html#optee-client) - 9 commits and 6 PR's
- [optee_test](https://optee.readthedocs.io/en/latest/building/gits/optee_test.html#optee-test) - 9 commits and 7 PR's
- [build](https://optee.readthedocs.io/en/latest/building/gits/build.html#build) - 8 commits and 6 PR's
 

More details can be found [here](https://github.com/OP-TEE/optee_os/blob/master/CHANGELOG.md). 

Testing of the release has been performed by the committers and can be found [here](https://github.com/OP-TEE/optee_os/commit/f9e550142dd4b33ee1112f5dd64ffa94ba79cefa)
Thirty eight devices were tested for this release using the OP-TEE [xtest](https://optee.readthedocs.io/en/latest/building/gits/optee_test.html) test suite. Testing results can be found in the [pull request itself](https://github.com/OP-TEE/optee_os/pull/5094)

The release has been tagged at [3.17.0](https://github.com/OP-TEE/optee_os/releases/tag/3.17.0) using the OP TEE [release procedure](https://optee.readthedocs.io/en/latest/general/releases.html#release-procedure). 

The OP TEE release roadmap can be found [here](https://optee.readthedocs.io/en/latest/general/releases.html). 

Any security fixes prior to the next release will be made available on the [Security Advisories page](https://github.com/OP-TEE/optee_os/security/advisories?state=published). 

