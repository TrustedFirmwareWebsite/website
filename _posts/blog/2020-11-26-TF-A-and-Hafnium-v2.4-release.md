---
author: matteo.carlini
title: Trusted Firmware-A v2.4 released with Secure EL2 Hafnium SPM and much more!
date: 2020-11-26 08:00:00
categories:
- Blog
layout: post
image: /assets/images/blog/synquacer_tf_crop_1500x1500.png
---

Trusted Firmware-A v2.4 released with Secure EL2 Hafnium SPM and much more!
=============================================================================

Trusted Firmware-A has just completed the official v2.4 release which involves tagging of three main repositories: TF-A, TF-A-Tests and, for the first time ever, Hafnium as reference implementation of a Secure Partition Manager!

This is a major step towards defragmentation and standardization in the Secure Firmware space, by providing partners a reference solution for the Secure EL2 virtualization extension, compliant with the Arm Firmware Framework for Armv8-A specification.

Hafnium, which has joined Trusted Firmware.org earlier this year (read the full press release here), serves as Secure Partition Manager for the S-EL2 extension, enabling:

* Isolation through virtualization in the Secure world
* Deployment scenarios with coexistence of multiple mutually distrusting TEEs
* EL3, S-EL2 and Normal world protection from malicious or compromised software running in Secure Partitions in the Secure world
* EL3 and S-EL2 defragmentation and standardization, allowing partners to migrate their Secure software to lower Secure-ELs

The whole content of the release is described on the respective TF-A (1), TF-A-Tests (2) and Hafnium (3) change-logs, but here are some interesting highlights.

* Armv8.4 Secure EL2 extension:
  * First ever release of Hafnium as reference SPM (Secure Partition Manager) firmware for S-EL2, supporting the FF-A v1.0 specification
  * Feature implementation and testing of FF-A setup and discovery, direct messaging and memory sharing interfaces, multiple S-EL1 partitions support
  * Bare minimum implementation for S-EL1 partitions provided in TF-A-tests repository (Cactus)
  * Support for booting OP-TEE as a guest S-EL1 Secure Partition on top of Hafnium in S-EL2
  * Complete SPM documentation can be found [here](https://trustedfirmware-a.readthedocs.io/en/latest/components/secure-partition-manager.html)

* Armv8.6 features support:
  * Enhanced Counter Virtualization (ECV)
  * Fine Grained Traps (FGT)
  * WFE trap delays
		
* Reference implementation of Firmware Measured Boot on Arm along with support for a fTPM test service
* Support for dual-root Chain of Trust for Secure Partitions
* Dynamic SDEI configuration
* Numerous CPUs Errata including but not limited to Speculative AT Errata workarounds for Cortex-A53
* Chain of Trust in device tree:  moved the Chain of Trust in a more human-readable format
* SMC Fuzzer module in TF-A-Tests

New Arm cores and Arm/Partners platforms support:
* Arm Morello
* Arm Total Compute TC0: See also the TC0 [documentation](https://git.linaro.org/landing-teams/working/arm/arm-reference-platforms.git/about/docs/tc0/release_notes.rst) for the initial support of Secure EL2 on the first Armv8.4 enabled platform (based on TF-A-v2.4-rc0)
* iEi PUZZLE-M801
* Marvell OCTEON TX2 T9130
* MediaTek MT8192
* NXP i.MX 8M Nano & Plus
* QTI CHIP SC7180
* STM32MP151F, STM32MP153F, STM32MP157F, STM32MP151D, STM32MP153D, STM32MP157D

1. [TF-A v2.4 ChangeLog](https://trustedfirmware-a.readthedocs.io/en/latest/change-log.html#version-2-4)
2. [TF-A-Tests v2.4 ChangeLog](https://trustedfirmware-a-tests.readthedocs.io/en/latest/change-log.html#version-2-4)
3. [Hafnium v2.4 ChangeLog](https://review.trustedfirmware.org/plugins/gitiles/hafnium/hafnium/+/HEAD/docs/ChangeLog.md#v2_4)
