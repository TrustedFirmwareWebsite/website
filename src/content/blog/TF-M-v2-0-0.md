---
author: shebu-kuriakose
title: Trusted Firmware-M v2.0.0 Released!
date: 2023-11-28 10:00:00

image: "../../assets/images/blog/musca_tf_crop_1500x1500.png"
---

# **TF-M: 2.0.0: Smaller footprint Trusted Firmware-M**

## Introduction

Trusted Firmware-M (TF-M) [v2.0.0](https://git.trustedfirmware.org/TF-M/trusted-firmware-m.git/tag/?h=TF-Mv2.0.0) was released on 28th November 2023. There is significant reduction in
memory requirement compared to previous release (v1.8.0) due to the introduction of a small footprint
ECC implementation in PSA Crypto service. The release includes build system changes splitting the
secure TF-M and non-secure builds simplifying how non-secure builds integrate TF-M. Below are some
of the highlights of the release.

## Release Highlights

- **Memory Footprint:** TF-M has been updated to MbedTLS release v3.5.0 as the PSA Crypto service. This includes p256-m, an alternative implementation of ECC (Elliptic Curve Cryptography) on the
curve SECP256R1, supporting ECDH, ECDSA (randomized) and key generation. The ECC implementation, made available via the PSA Crypto API, has much smaller code size and RAM usage
compared to the default implementation.

  p256-m has been enabled as the ECC implementation in TF-M’s PSA Crypto service for ARoT-less medium and medium profiles. **There is around 14kB reduction in code size on Arm reference
platform, AN521. See release notes for latest TF-M memory figures.**

- [STM32H573I-DK](https://tf-m-user-guide.trustedfirmware.org/platform/stm/common/stm32h5xx/readme.html) is the new platform available in the release.

- **Split Build:** TF-M had a single build process to generate the secure (TF-M), bootloader and non-
secure images. This required complex build configurations and dependencies. The build system has
been refactored to make building the secure and bootloader images independent from the non-
secure build. The non-secure build combines with it the secure and bootloader images which have
been built independently. This reduces the build system complexity and maintenance overheads of
TF-M and projects that integrate TF-M.

- **New Mailbox NS Agent API:** A new design of the mailbox NS agent that manages the client requests
on dual core (non-secure and secure in two physically separate cores) has been introduced. The
design makes the agent work like a RoT service without being tightly coupled with the SPM. This will
also allow mailbox agent to differentiate multiple non-secure clients using the client IDs. Design
details can be found [here](https://tf-m-user-guide.trustedfirmware.org/design_docs/dual-cpu/mailbox_ns_agent_update.html).

- Optimizations in SPM critical section reducing the non-secure interrupt latency in PSA isolation
levels 2 and 3.

- The release integrates the latest MCUboot release v2.0.0

The project continuously tracks key KPIs in various modes using [squad dashboard](https://qa-reports.linaro.org/tf/tf-m/metrics/?environment=PERF-AN521-GCC-Level1-SFN-Release&environment=MEMORY-AN521-ARMCC-Medium-Minsizerel&environment=MEMORY-AN521-ARMCC-Small-Minsizerel&environment=MEMORY-AN521-ARMCC-Default-Minsizerel&environment=PERF-AN521-GCC-Level1-IPC-Release&environment=MEMORY-AN521-ARMCC-Large-Minsizerel&environment=PERF-AN521-GCC-Level3-IPC-Release&environment=PERF-AN521-GCC-Level2-IPC-Release&metric=:summary:). In addition to the
memory usage, the cycle counts of PSA FF-M API calls across the Trustzone boundary in SFN and IPC
modes under the three PSA isolation levels are also included.

More details can be found [here](https://tf-m-user-guide.trustedfirmware.org/releases/2.0.0.html). Testing of the release has been done on Trustedfirmware.org [Open CI](https://ci.trustedfirmware.org/).
The [next release](https://tf-m-user-guide.trustedfirmware.org/releases/index.html#future-release-plans) will be in April 2024 which is tentatively planned to be
TF-M’s first Long Term Stable (LTS) release. Any security fixes prior to the next release will be made
available as patch releases in v2.0.x release branch.

## About TrustedFirmware.org

TrustedFirmware.org is an open source project implementing foundational software components for creating secure devices. Trusted Firmware provides a reference implementation of secure software for processors implementing both the A-Profile and M-Profile Arm architecture. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. Trusted Firmware code is the preferred implementation of Arm specifications, allowing quick and easy porting to modern chips and platforms. This forms the foundations of a Trusted Execution Environment (TEE) on application processors, or the Secure Processing Environment (SPE) of microcontrollers.

[TrustedFirmware.org](https://www.trustedfirmware.org) is member driven and member funded.

To learn more about membership and its benefits, please see the [following page](/about) or send a request for more information to enquiries@trustedfirmware.org.
