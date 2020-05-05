---
author: matteo.carlini
title: Trusted Firmware-A & TF-A-Tests v2.3 released
date: 2020-04-30 08:00:00
categories:
- Blog
layout: post
image: /assets/images/blog/synquacer_tf_crop_1500x1500.png
---
Trusted Firmware-A and the related Trusted Firmware-A Tests v2.3 releases are now tagged!

The whole content of the two releases is described on the respective TF-A (1) and TF-A-Tests (2) change-logs, but here are some interesting highlights.

The TF-A release includes:
* Armv8.4 Secure EL2 extension:
	* Initial support for an EL3 Secure Partition Manager Dispatcher (SPMD) aligned with the PSA FF-A (SPCI) specification Beta1
* Armv8.5 Memory Tagging Extensions (MTE):
	* Now supported at EL3 for stack-tagging (tested against clang-llvm)
	* The lower ELs enablement was already included in v2.2
* SMCCC v1.2 initial support:
	* Updated register usage as defined by the new specification
	* Please note:
	* The SMCCC_ARCH_SOC_ID SMC support introduced is known to be affected by a problem which will be soon fixed on Master and will be part of the next v2.4 release
	* SVE registers save/restore that will considered as part of future S-EL2/SPM developments
* GIC extensions:
	* GIC-600 multichip configuration support
	* GICv4 extension support
* AArch64/AArch32: Prevent speculative execution past ERET (using architected Armv8.5 Speculation Barrier if implemented by the specific core)
* Multiple CoT (Chain of Trust):
	* Introduce a new dualroot CoT, extending the single monolithic CoT defined in TBBR.
	* The current support allows to enable two different Root of Trust:
		* ROTPK: owned by the Silicon Provider, used to sign BL1, BL2, BL31 and BL32
		* PROTPK: owned by the Platform owner, used to sign BL33
	* Support for multiple Secure Partitions signed by different ROT keys will be added later on
* Support for the [Firmware Configuration Framework](https://trustedfirmware-a.readthedocs.io/en/latest/components/fconf.html) (FCONF) - Experimental
	* Experimental new abstraction layer for platforms to consume dynamic configuration data in config files in a scalable way using the defined framework
* Support for the optional [Firmware encryption](https://trustedfirmware-a.readthedocs.io/en/latest/design/trusted-board-boot.html#authenticated-encryption-framework) feature (for BL31/BL32 images) - Experimental
	* Experimental feature to allow TF-A loading encrypted FIP payloads (mainly for BL32 Trusted OS) as described in TBBR
* Support for Read-only xlat tables in BL31
* Add DebugFS functionality
	* A new feature to expose firmware debug data to higher software layers such as a non-secure lower ELs
	* To be used in debug builds only
* Mbed TLS updated to v2.18

New Arm cores and Arm/Partners platforms support:
* Arm Matterhorn and Klein CPU support
* Arm Hercules: workaround for Errata #1688305
* Arm RD-Daniel FVP platform support
* Broadcom Stingray platform
* NVIDIA Tegra T194 

The TF-A-Test release includes:
* Internal CI upgraded to use GCC 9.2-2019.12 toolchain for tf-a-tests
* Support for extended register usage as per SMCCC v1.2 specification.
* Support for FVP platforms with SMT capabilities.
* Arm v8.3 Pointer Authentication enabled for all FWU tests in TFTF
* New tests added:
	* AArch32 tests for checking if PMU counters leak in secure world
	* Add new debug filesystem (debugfs) test
	* Add a SPCI direct messaging test targeting bare-metal cactus (test) SP

1. [TF-A v2.3 ChangeLog](https://trustedfirmware-a.readthedocs.io/en/latest/change-log.html#version-2-3)
2. [TF-A-Tests v2.3 ChangeLog](https://trustedfirmware-a-tests.readthedocs.io/en/latest/change-log.html#version-2-3)
