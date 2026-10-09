---
author: bharath-subramanian
title: Rusted Firmware-A (RF-A) - v0.3.0 Released: Advancing Platform Portability and Realm Management Support
date: 2026-11-08 09:00:00

image: "../../assets/images/blog/mp1_avenger_tf_crop_1500x1500.png"
---

The TrustedFirmware.org community is pleased to announce the release of __Rusted Firmware-A (RF-A) v0.3.0__, continuing the development of Rust-based EL3 runtime firmware for Armv9-A and later systems.

Building on the foundations established in earlier releases, RF-A v0.3.0 introduces a more modular firmware architecture, expands support for Arm architectural extensions, and makes further progress in Realm Management Extension (RME) functionality. The release also brings improvements to power management, platform integration, diagnostics, testing, and developer workflows.

## A modular architecture for platform integration
One of the main changes in this release is the restructuring of RF-A into a platform-independent core and separate platform implementations.

The central firmware crate, now named rf-a-core, contains the common EL3 runtime functionality, while the Arm Fixed Virtual Platform (FVP) and QEMU implementations have been moved into dedicated platform crates. This separation reduces platform-specific dependencies within the firmware core and establishes a clearer interface for integrating RF-A with different platforms.

The architecture now makes greater use of Rust traits, generics, and platform-owned static data to support platform-specific configuration. Per-core state management, interrupt controller integration, and peripheral handling have also been refined as part of this restructuring.

To accompany these changes, the project now includes a porting guide to help developers understand the interfaces and requirements involved in bringing RF-A to additional platforms.

## Progress in Realm Management Extension support
RF-A v0.3.0 brings further development to its support for the Arm Realm Management Extension (RME), building on the Realm Management Monitor Dispatcher (RMMD) functionality introduced in previous releases.

A significant part of this work focuses on Granule Protection Tables (GPT), including discovery, enablement, descriptor access, and support for contiguous descriptors. The release also introduces support for RMM_GTSI_DELEGATE and RMM_GTSI_UNDELEGATE calls, extending the functionality available for managing granule protection.

Support for the FEAT_RME_GDI and FEAT_RME_GPC2 architectural extensions has been added, alongside improvements to RMM boot-failure handling and restoration of granule-protection checks following warm boot.

These developments expand the RME functionality implemented in RF-A and provide additional building blocks for systems using the Realm world.

## Broader Arm architectural extension support
Supporting an evolving Arm architecture remains an important part of RF-A development.

This release expands the CPU extension framework introduced in v0.2.0, with additional support for architectural features including FEAT_AMUv1, FEAT_AMUv1p1, FEAT_CSV2_2, FEAT_FGWTE3, FEAT_FPMR, FEAT_GCS, FEAT_PFAR, FEAT_SCTLR2, and FEAT_TTCNP.

The handling of SIMD, Scalable Vector Extension (SVE), and Scalable Matrix Extension (SME) state has also been reworked, including support for Realm world configurations and additional context management during CPU powerdown.

Further improvements address Pointer Authentication, Branch Target Identification (BTI), Statistical Profiling Extension (SPE), and exception handling. The Secure Test Framework (STF) has been extended with additional tests covering architectural extension configuration and context switching.

## Improvements to power management and runtime services
RF-A v0.3.0 continues to refine its Power State Coordination Interface (PSCI) implementation, particularly around CPU powerdown and suspend handling.

The release introduces support for abandoning a CPU powerdown operation, including handling for Arm C1-Ultra. It also improves power-domain state bookkeeping, validation in OS-Initiated (OSI) suspend mode, and runtime discovery of supported PSCI features.

The Firmware Framework for Arm A-profile (FF-A) Secure Partition Manager Dispatcher (SPMD) receives improvements to warm-boot handling and version reporting, together with an update to the arm-ffa crate.

Another change is the separation of non-essential runtime services from the firmware core. Platforms can now select the services they require, rather than providing placeholder implementations for services they do not support.

## Developer experience, diagnostics, and testing
Alongside architectural and runtime changes, v0.3.0 includes updates intended to make RF-A easier to develop, debug, and maintain.

The build system can now generate linker maps and disassembly files, and developers can optionally enable the Iris Server when running on FVP. Improvements to incremental builds, build reproducibility, and feature-configuration checks are also included.

Diagnostic capabilities have been extended to produce architectural crash reports when Rust panics occur, with additional improvements to logging configuration and optional timestamp support. Work on memory handling and build optimisation also addresses binary size and memory usage.

The release updates the Rust baseline to version 1.90 and expands unit tests, STF integration tests, and checks across different feature combinations.

Documentation has been extended with the new porting guide, RMMD documentation, architectural extension information, and guidance for development and continuous integration.

Dependency management also continues to receive attention, with updated third-party crate audits and the addition of cargo-deny configuration alongside the project's existing cargo vet practices.

## Continuing the development of Rust-based firmware
RF-A v0.3.0 marks another stage in the project's development, with a particular focus on separating reusable firmware functionality from platform-specific implementations and extending support for Arm architectural features and RME.

These changes provide a foundation for further platform integration and continued development of Rust-based EL3 runtime firmware.

The TrustedFirmware.org community welcomes developers, platform integrators, and organisations interested in contributing to RF-A. Feedback, testing, and contributions remain important as the project continues to evolve.

* [Latest Release (RF-A v0.3.0)](https://git.trustedfirmware.org/plugins/gitiles/RF-A/rusted-firmware-a/+/refs/tags/v0.3.0)
* [Rusted Firmware - A - repository](https://git.trustedfirmware.org/RF-A/rusted-firmware-a)
* [Rust Crates](https://review.trustedfirmware.org/admin/repos/q/filter:arm-firmware-crates/)
* [GitHub Issues Tracker](https://github.com/RustedFirmware-A/rusted-firmware-a/issues)
* [Mailing List](https://lists.trustedfirmware.org/mailman3/lists/rusted-firmware-a.lists.trustedfirmware.org/)
* [Discord Channel](/faq): #rusted-firmware-a
* [Rusted Firmware - A - OpenCI](https://review.trustedfirmware.org/plugins/gitiles/next/ci/tf-a-job-configs/+/refs/heads/master)

Read the release changelog and documentation in the RF-A repository.

## About TrustedFirmware.org

TrustedFirmware.org is an open source project implementing foundational software components for creating secure devices. Trusted Firmware provides a reference implementation of secure software for processors implementing both the A-Profile and M-Profile Arm architecture. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. Trusted Firmware code is the preferred implementation of Arm specifications, allowing quick and easy porting to modern chips and platforms. This forms the foundations of a Trusted Execution Environment (TEE) on application processors, or the Secure Processing Environment (SPE) of microcontrollers.

[TrustedFirmware.org](https://www.trustedfirmware.org) is member driven and member funded.

To learn more about membership and its benefits, please see the [following page](/about) or send a request for more information to enquiries@trustedfirmware.org.