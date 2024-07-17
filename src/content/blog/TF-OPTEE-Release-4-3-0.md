---
author: jens-wiklander
title: Trusted Firmware OP TEE Release 4.3.0
date: 2024-07-12 10:00:00

image: ../../assets/images/blog/musca_tf_crop_1500x1500.png
---

**Trusted Firmware OP TEE: v4.3.0 Release**
=====================================================

Introduction
------------

Trusted Firmware OP-TEE [v4.3.0](https://github.com/OP-TEE/optee_os/blob/4.3.0/CHANGELOG.md) was released on the 12th of July, 2024. The release is a minor version update with full backward compatibility. In total 100 pull requests merged, or 188 new commits, in total counting the optee_os, optee_client, optee_test, and build gits. The majority of the pull requests and commits are as usual in the optee_os git.

Highlights 
----------

Here are some of the main additions in OP TEE 4.3.0: 
- Timeout parameter for condition variables
- Optionally allow a public RSA exponent as low as 3 for AOSP compatibility
- A bugfix for Arm accelerated AES-XTS encryption and decryption
- Improve AOSP compatibility for how block ciphers are buffered by TEE_CipherInit(), TEE_CipherUpdate(), and TEE_CipherDoFinal()
- UBSAN updates: add __ubsan_handle_type_mismatch_v1() and __ubsan_handle_pointer_overflow()
- Upgrade Libtomcrypt to the latest on the upstream development branch as of 2024-04-12
- Add FFA_CONSOLE console driver for use with FF-A
- Fix a possible overflow in shdr_alloc_and_copy()
- Add a firewall framework for devices
- CI test on QEMUv8 (64-bit) for Xen FF-A mediator
- Fix a possible race condition when loading a TA, PTA, or StMM context
- Fix an REE-FS internal dirfile reference counting error
- Upgrade MbedTLS to version 3.6.0
- Add CFG_PGT_CACHE_ENTRIES to improve scaling with very large TAs
- Improve FF-A memory sharing compliance for SPs
- Support FF-A notifications with non-secure virtualization
- Fix SHA3-224 using ARMv8.2-A cryptographic extensions
- Relicensing a few source files to BSD-2-Clause, affecting plat-d06 and plat-stm32mp1 only
- Add HiSilicon Kunpeng hardware accelerator support for
  - Diffie-Hellman
  - SHA1, SHA224, SHA256, SHA384, SHA512, MD5, SM3, and, HMAC algorithms based on these algorithms
- Add SCP03 default keys for SE052F2 to support OEFID 0xB501

Platform updates:
- plat-stm32mp2
  - FMC, HPDMA, HSEM, IPCC, sysconfig, clocks platform, reset controller, RCC
- plat-stm32mp1
  - Fix SCP-firmware configuration
  - Restore default heap size configuration
- plat-sam
  - Remove PL310 locking to improve performance
  - Configure PM for sama7g5
- plat-corestone1000
  - Remove unused MMCOMM buffer

tee-supplicant updates:
  - send READY=1 notification to systemd

The release included updates to the following repos:
- [optee_os](https://optee.readthedocs.io/en/latest/building/gits/optee_os.html#optee-os) 
- [optee_client](https://optee.readthedocs.io/en/latest/building/gits/optee_client.html#optee-client) 
- [optee_test](https://optee.readthedocs.io/en/latest/building/gits/optee_test.html#optee-test) 
- [build](https://optee.readthedocs.io/en/latest/building/gits/build.html#build) 
- [manifest](https://optee.readthedocs.io/en/latest/building/gits/build.html#manifests)

More details can be found [here](https://github.com/OP-TEE/optee_os/blob/4.3.0/CHANGELOG.md).

Testing of the release has been performed by the committers and can be found [here](https://github.com/OP-TEE/optee_os/commit/1c0d52ace3c237ca6276cafb5c73f699a75c1d40)
Test plan for this release using the OP-TEE are [here](https://optee.readthedocs.io/en/latest/building/gits/optee_test.html). Testing results can be found in the [pull request itself](https://github.com/OP-TEE/optee_os/pull/6906)

The release has been tagged at [4.3.0](https://github.com/OP-TEE/optee_os/releases/tag/4.3.0) using the OP TEE [release procedure](https://optee.readthedocs.io/en/latest/general/releases.html#release-procedure). 

The OP TEE release roadmap can be found [here](https://optee.readthedocs.io/en/latest/general/releases.html). 

Any security fixes prior to the next release will be made available on the [Security Advisories page](https://github.com/OP-TEE/optee_os/security/advisories?state=published). 

About TrustedFirmware.org
----------
TrustedFirmware.org is an open source project implementing foundational software components for creating secure devices. Trusted Firmware provides a reference implementation of secure software for processors implementing both the A-Profile and M-Profile Arm architecture. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. Trusted Firmware code is the preferred implementation of Arm specifications, allowing quick and easy porting to modern chips and platforms. This forms the foundations of a Trusted Execution Environment (TEE) on application processors, or the Secure Processing Environment (SPE) of microcontrollers. Visit:[https://www.trustedfirmware.org/](https://www.trustedfirmware.org)
TrustedFirmware.org is member driven and member funded. To learn more about membership and its benefits, please see the [following page](https://www.trustedfirmware.org/about) or send a request for more information to enquiries@trustedfirmware.org.
