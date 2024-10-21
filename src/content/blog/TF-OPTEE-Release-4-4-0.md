---
author: jerome-forissier
title: Trusted Firmware OP TEE Release 4.0.0
date: 2024-10-20 10:00:00

image: "../../assets/images/blog/musca_tf_crop_1500x1500.png"
---

**Trusted Firmware OP TEE: v4.4.0 Release**
=====================================================

Introduction
------------

Trusted Firmware OP TEE [v4.4.0](https://github.com/OP-TEE/optee_os/blob/4.4.0/CHANGELOG.md) was released on the 18th of October, 2024. The release is a minor version update with full backward compatibility. In total 100 pull requests merged, or 196 new commits, in total counting the optee_os, optee_client, optee_test, and build gits. The majority of the pull requests and commits are as usual in the optee_os git.

Highlights 
----------

**Main updates to OP TEE 4.4.0:**
- Fix a possible crash in the TA ELF loader (ldelf) when a TA uses a SysV style .hash section
- Fix a bug in the TA stack protector code that would cause some TAs compiled with Clang 18 to crash on entry with “stack smashing detected”
- pkcs11 TA: fix a memory leak in error handling code
- Some NS virtualization refactoring
- Introduce CFG_CORE_STATIC_ASLR_SEED to help with ASLR debugging
- RISC-V updates
- remoteproc: add command to release firmware resources
- Fix makefile dependencies when compiling Device Tree (.dts -> .pre.dts -> .dtb)
- Power management: add unregister_pm_cb(), add type of suspend operation
- Move base64 functions from libutee to libutils
- Fix error handling in tee_svc_storage_init_head()
- CI updates (add check job for vexpress-qemu_armv8a with Clang, add build with Mbed TLS and Armv8 crypto extensions)
- Memory map cleanup and code refactoring. Add phys_mem allocation functions.
- Increate size of arm64 abort stack to 64K
- Remove absolute build time paths for reproducible builds
- Use CFLAGS from the environment
- Implement FF-A VM availability messages
- SCMI driver: fix voltage domain protocol version and clock rates enumeration
- PACBTI enablement in Trusted Services
- Add qsort helper functions for standard types to libutil
- Ensure all pager VA space is mapped with small pages
- dt_driver fixes
- NVMEM improvements and fixes
- Fix a couple of issues found by UBSan (undefined behavior sanitizer) in libtomcypt ed25519_make_key() and in user_access.c

**Platform updates**
- plat-stm
   - stm32mp15: PRNG fix
   - stm32mp13: clock gates initialization
   - stm32: SAES fixes, RNG, RISAF support, IAC and SERC drivers
   - stm32mp257f-ev1 GPIO and console support
   - stm32mp1: fix use-after-free in PMIC driver
- plat-imx
   - Add imx91 support
   - Add imx95 support
   - imx91evk: ELE
   - Use OTP die ID to derive Secure Storage Key by default
   - Enable attestation PTA by default
- plat-rd1ae
   - New platform added
- plat-corstone1000
   - Increase TZDRAM size
- plat-vexpress
   - qemu_armv8a: increase CFG_CORE_TZSRAM_EMUL_SIZE to 512 kB
- plat-k3
   - SA2UL: change sa2ul_init() from driver_init to service_init_crypto
- plat-sam
   - Implement PL310 SMC protocol
- plat-hisilicon
   - Add X25519 and X448 algorithms to crypto driver
   - Add authenticated encryption algorithms to crypto driver
   - Add ECC keypair generation, sign and verify, and ECDH support to crypto driver

**optee_client updates:**
   - tee-supplicant: Add udev rule and systemd service file
   - PKCS#11 (libckteec): fix memory leak in serialize_indirect_attribute()

**The release included updates to the following repos:**
- [optee_os](https://optee.readthedocs.io/en/latest/building/gits/optee_os.html#optee-os) 
- [optee_client](https://optee.readthedocs.io/en/latest/building/gits/optee_client.html#optee-client) 
- [optee_test](https://optee.readthedocs.io/en/latest/building/gits/optee_test.html#optee-test) 
- [build](https://optee.readthedocs.io/en/latest/building/gits/build.html#build) 
- [manifest](https://optee.readthedocs.io/en/latest/building/gits/build.html#manifests)


More details can be found [here](https://github.com/OP-TEE/optee_os/blob/4.4.0/CHANGELOG.md).

Testing of the release has been performed by the committers and can be found [here](https://github.com/OP-TEE/optee_os/commit/8f645256efc0dc66bd5c118778b0b50c44469ae1)
Test plan for this release using the OP-TEE are [here](https://optee.readthedocs.io/en/latest/building/gits/optee_test.html) test suite. Testing results can be found in the [pull request itself](https://github.com/OP-TEE/optee_os/pull/7058)

The release has been tagged at [4.4.0](https://github.com/OP-TEE/optee_os/releases/tag/4.4.0) using the OP TEE [release procedure](https://optee.readthedocs.io/en/latest/general/releases.html#release-procedure). 

The OP TEE release roadmap can be found [here](https://optee.readthedocs.io/en/latest/general/releases.html). 

Any security fixes prior to the next release will be made available on the [Security Advisories page](https://github.com/OP-TEE/optee_os/security/advisories?state=published). 

About TrustedFirmware.org
==========================
TrustedFirmware.org is an open source project implementing foundational software components for creating secure devices. Trusted Firmware provides a reference implementation of secure software for processors implementing both the A-Profile and M-Profile Arm architecture. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. Trusted Firmware code is the preferred implementation of Arm specifications, allowing quick and easy porting to modern chips and platforms. This forms the foundations of a Trusted Execution Environment (TEE) on application processors, or the Secure Processing Environment (SPE) of microcontrollers. 


Visit [https://www.trustedfirmware.org/](https://www.trustedfirmware.org/) for more information.


TrustedFirmware.org is member driven and member funded. To learn more about membership and its benefits, please see the [following page](https://www.trustedfirmware.org/about) or send a request for more information to enquiries@trustedfirmware.org.
