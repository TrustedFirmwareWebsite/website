---
author: akanksha-jain
title: Trusted Firmware-A v2.9 released!
date: 2023-06-05 09:00:00
categories:
  - Blog
layout: "../../layouts/BlogLayout.astro"
image: "../../assets/images/blog/mp1_avenger_tf_crop_1500x1500.png"
---

## Introduction

Trusted Firmware-A has completed the official v2.9 release, tagged across multiple repositories including TF-A, TF-A Tests,
Hafnium, TF-A OpenCI Scripts & Jobs and  TF-RMM 0.3.0

## Highlights

The main highlights comprise :

- Support for the 2021, 2022 Architecture extensions,
- Dynamic feature detection,
- Errata Management Firmware Interface against spec 1.0
- FF-A v1.2 Spec Early Adoption, FF-A v1.1 Memory Sharing
- Realm Support to leverage SVE hardware functionality

The whole content of the release is described on the respective [TF-A](https://trustedfirmware-a.readthedocs.io/en/v2.9/change-log.html#id1), [TF-A-Tests](https://trustedfirmware-a-tests.readthedocs.io/en/v2.9/change-log.html#version-2-9), [Hafnium](https://review.trustedfirmware.org/plugins/gitiles/hafnium/hafnium/+/refs/tags/v2.9/docs/ChangeLog.md) and [TF-RMM](https://tf-rmm.readthedocs.io/en/tf-rmm-v0.3.0/about/change-log.html#v0-3-0) change logs.

- Architecture extensions support:
  - Support for PSCI OS initiated mode
  - Architecture support for FEAT_TCR2, Guarded Control Stack (FEAT_GCS), Config Register Support for FEAT_HCX
  - Save/Restore Support for FEAT_PIE/POE, FEAT_SME \| SME2, FEAT_MPAM: runtime check
  - Added dynamic detection of architecture feature enablement
  - System registers access trap handler
- Added RAS extension handling and crash reporting
- Eighteen CPU Errata Mitigations for Cortex-A510, A-78, X2, Neoverse V1, N2 cores and GICv3 bug fixes
- Errata Management Firmware Interface implementation supported for version 1.0 of the public specification
- First release done solely relying on [TrustedFirmware.org Open CI](https://www.trustedfirmware.org/projects/open-ci/)
- Ethos-N NPU Driver Added support for Protected Firmware Setup
- EL3 SPMC enhanced feature hardening (scan warning fixes, report execution stage in partition info etc)
- Arm CCA support:
  - Support for Trusted Boot rooted into RSS RoT.
  - Support for PSA attestation scheme with Measured Boot rooted into RSS.
  - General improvements and hardening of the boot and attestation support.
- Hardening efforts in the X.509 certificate parser, including a security fix (TFV-10, CVE-2022-47630)
- TF-RMM Enhancements:
  - Refactoring Stage 1 Translation Table to better fit RMM Usage
  - PMU usage in Realms as per RMM v1.0 BET0 spec
  - Realm support to leverage SVE hardware functionality, if enabled
  - Improve dynamic config of RMM by adding support for DRAM info in RMM-EL3 interface
  - RMM Unit test support for granule and slot-buffer components
  - Mask MTE capability so that realms can see that MTE is not supported
  - Build improvements in RMM comprising : build times, decouple dependencies during build cycle and support multi-config builds
- Hafnium SPM & FF-A enablement:
  - FF-A v1.2 Early Adoption
    - Implemented partition info get ABI using GP registers
    - Group0 secure interrupt handling delegation
    - Improved console log ABI
  - FF-A v1.1 Enhanced Support
    - Interrupt handling (S-EL0 partition signaling, allow a physical interrupt to be routed to a specified PE)
    - Memory sharing (support for FF-A backward compatibility, share/lend/donate memory to multiple borrowers, normal/secure fragmented memory sharing)
    - Power management (events relayed to the SPMC and removed limitations)
    - Indirect messaging (buffer synchronization and ownership transfer rules)
    - Hardened SP manifest memory regions boot time validation
    - CI migration to LLVM/clang 15.0.6
    - Removal of non-VHE build and test configurations
    - Added EL3 SPMC test configurations using the Hafnium's CI infrastructure
- TF-A Tests
  - support for 2021 Architecture Extensions
  - new tests for FEAT_RME and RMM Testing
  - support for FF-A v1.1 Feature testing
- New cores/platforms support:
  - Arm TC3 CPU cores support
  - Power Domain support for N1SDP and Morello hardware
  - Allwinner T507 SoC  support
  - Legacy support for Nvidia Tegra 210
  - MT8188 | MT8195 Platform support
- Qemu : Enable Dynamic Feature Detection for Normal World

## About TrustedFirmware.org

TrustedFirmware.org is an open source project implementing foundational software components for creating secure devices. Trusted Firmware provides a reference implementation of secure software for processors implementing both the A-Profile and M-Profile Arm architecture. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. Trusted Firmware code is the preferred implementation of Arm specifications, allowing quick and easy porting to modern chips and platforms. This forms the foundations of a Trusted Execution Environment (TEE) on application processors, or the Secure Processing Environment (SPE) of microcontrollers.

[TrustedFirmware.org](https://www.trustedfirmware.org) is member driven and member funded.

To learn more about membership and its benefits, please see the [following page](https://www.trustedfirmware.org/about) or send a request for more information to enquiries@trustedfirmware.org.
