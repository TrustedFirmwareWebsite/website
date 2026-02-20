---
author: bharath-subramanian
title: Rusted Firmware-A (RF-A) - v0.2.0 Released
date: 2026-02-20 09:00:00

image: "../../assets/images/blog/mp1_avenger_tf_crop_1500x1500.png"
---

The TrustedFirmware.org community is pleased to announce the release of __Rusted Firmware-A (RF-A) v0.2.0__, tagged on 6 February 2026.

This release builds on the foundations laid in v0.1.0 and focuses on early-boot robustness, expanded architectural feature support, broader runtime service coverage, and improved build and supply-chain workflows. As with previous releases, RF-A continues its goal of providing a Rust implementation of EL3 runtime firmware (BL31) for Armv9-A and later systems.


## A more robust early boot path
One of the key architectural updates in v0.2.0 is the introduction of an “early mapping” stage. This enables the MMU and caches before any Rust code is executed . The change ensures that Rust code runs in an environment where architectural guarantees around memory behaviour are fully defined. These changes strengthen the early firmware environment while maintaining a clear and explicit memory model.

## Build system decoupling and workflow improvements
RF-A v0.2.0 decouples the Rust build from TF-A. BL31 and the Secure Test Framework (STF) are built directly with Cargo, while a build-and-run.sh script coordinates end-to-end FVP and QEMU runs by building TF-A BL1/BL2/FIP alongside the Rust BL31 image.

Additional workflow updates include:
* Support for an alternate Cargo output directory via CARGO_TARGET_DIR.
* Optional EL3 branch-protection configurations (Pointer Authentication and BTI) controlled through build variables, which switch the build into a -Zbuild-std configuration when enabled.

These changes provide clearer separation of responsibilities between RF-A and TF-A while improving flexibility for developers and integrators.


## Architectural extensions and errata handling
This release introduces a structured CpuExtension framework for configuring Arm architecture extensions. Extensions can be enabled per-world and per-CPU, with optional save/restore hooks for world switching.

A CPU errata framework has also been added, along with an implementation of the Arm Errata Management Firmware Interface (DEN0100), enabling CPU_ERRATUM_FEATURES queries.

Support has been extended with Cpu implementations for Arm C1-Pro and C1-Ultra, including reset and runtime workarounds and platform register dump support.

When built with the pauth Cargo feature, FEAT_PAuth can be enabled at EL3 early in boot using platform-provided key material. Crash reporting strips Pointer Authentication Codes (PAC) from the link register before printing return addresses.

System register accessors have been factored into a standalone arm-sysregs crate , improving modularity and reuse across the project.

## Expanded runtime services

__PSCI enhancements__

PSCI support has been extended with:
* Extended power-state encoding for CPU_SUSPEND and implementation of OS-Initiated (OSI) mode via PSCI_SET_SUSPEND_MODE.
* Platform hooks and feature advertisement for SYSTEM_OFF2 and SYSTEM_RESET2, where applicable.
* Updated context handling on CPU_ON and resume from suspend to reset lower-EL architectural state to PSCI-required values.

__FF-A and SPMD__

The FF-A Secure Partition Manager Dispatcher (SPMD) has been moved into a dedicated module and extended to handle additional FF-A interfaces . Support for newer messaging and notification interfaces has been added, along with PSCI callbacks used when SPMD is present.

__TRNG service__

RF-A now includes a TRNG service implementing the Arm TRNG Firmware Interface (DEN0098). It supports version and feature discovery, UUID reporting, and RND32/RND64 calls backed by a platform-defined entropy source and an internal entropy pool.

__RME and RMMD updates__

RME support has been expanded in several areas:
* RMI function IDs are forwarded to the Realm world and RMM-EL3 boot manifest packing is implemented.
* Attestation-related calls such as ATTEST_GET_REALM_KEY and ATTEST_GET_PLAT_TOKEN are implemented.
* Warm-boot handling for CPU_SUSPEND generates the register arguments expected by the RMM EL3 interface, and when built with RME enabled, the Granule Protection Table is discovered via arm-gpt.
* STF has been extended with an R-EL2 payload image and documentation to exercise the RME path on FVP.

## Platform updates
On the Arm Base RevC AEM FVP platform, PSCI integration has been expanded, GIC handling is fully integrated into the platform implementation, a wider set of architectural extension controls is enabled, and explicit CCI-550 control has been added.

For QEMU, support has been added for SYSTEM_OFF and SYSTEM_RESET via the secure PL061 GPIO device model, along with CPU_SUSPEND handling.

## Testing and documentation
The test suite has been extended with additional unit and STF integration tests.

Documentation updates include a refreshed architecture overview, updates to the threat model, and improvements to the getting-started and requirements guides.

This release also introduces explicit cargo vet configuration and an expanding audit set under supply-chain/, along with local developer tooling improvements such as pre-push checks and expanded clippy coverage for STF.

* [Latest Release (RF-A v0.2.0)](https://git.trustedfirmware.org/plugins/gitiles/RF-A/rusted-firmware-a/+/refs/tags/v0.2.0)
* [Rusted Firmware - A - repository](https://git.trustedfirmware.org/RF-A/rusted-firmware-a)
* [Rust Crates](https://review.trustedfirmware.org/admin/repos/q/filter:arm-firmware-crates/)
* [GitHub Issues Tracker](https://github.com/RustedFirmware-A/rusted-firmware-a/issues)
* [Mailing List](https://lists.trustedfirmware.org/mailman3/lists/rusted-firmware-a.lists.trustedfirmware.org/)
* [Discord Channel](/faq): #rusted-firmware-a
* [Rusted Firmware - A - OpenCI](https://review.trustedfirmware.org/plugins/gitiles/next/ci/tf-a-job-configs/+/refs/heads/master)


## About TrustedFirmware.org

TrustedFirmware.org is an open source project implementing foundational software components for creating secure devices. Trusted Firmware provides a reference implementation of secure software for processors implementing both the A-Profile and M-Profile Arm architecture. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. Trusted Firmware code is the preferred implementation of Arm specifications, allowing quick and easy porting to modern chips and platforms. This forms the foundations of a Trusted Execution Environment (TEE) on application processors, or the Secure Processing Environment (SPE) of microcontrollers.

[TrustedFirmware.org](https://www.trustedfirmware.org) is member driven and member funded.

To learn more about membership and its benefits, please see the [following page](/about) or send a request for more information to enquiries@trustedfirmware.org.
