---
author: bharath-subramanian
title: TF-A - Trusted Firmware-A v2.15 Released
date: 2026-06-02 09:00:00

image: "../../assets/images/blog/mp1_avenger_tf_crop_1500x1500.png"
---

## Introduction

The [TrustedFirmware.org](http://trustedfirmware.org) community is pleased to announce the release of Trusted Firmware-A (TF-A) v2.15, together with significant updates across the Trusted Firmware ecosystem including TF-A Tests, TF-RMM, and Hafnium.

This release continues to advance support for the latest Arm architecture features, strengthens security and validation frameworks, expands platform enablement, and delivers substantial progress in Realm Management Extension (RME), Live Firmware Activation (LFA), Firmware Interface for RME (FIRME), and FF-A v1.3 adoption.

We would like to thank all contributors from Arm and our ecosystem partners for their contributions to this release.

## Highlights

### Architectural Feature Enablement
TF-A v2.15 introduces support for several new Arm architectural features:
* **Armv8.9** FEAT_RASv2
* **Armv9.5** FEAT_HACDBS
* **Armv9.5** FEAT_HDBSS
* **Armv9.5** FEAT_STEP2
* **Armv9.6** FEAT_UINJ

Support has also been expanded for mandatory Armv9.4–Armv9.6 architectural features through enhanced feature detection and default enablement.

### Enhanced Security and Validation
Security remains a key focus of this release. Notable improvements include:
* Fixes for CVE-2026-0095 and CVE-2025-0647
* New SMC validation framework capabilities including:
  * Shadow-copying support
  * Type-safe range validation
  * Integer overflow detection
  * Reduced exposure to Parameter Buffer Forgery (PBF) and Time-of-Check to Time-of-Use (TOCTOU) vulnerabilities in SiP handlers
* Crypto extensions enabled in BL2
* Updated Mbed TLS 3.6.6 across the project

### Live Firmware Activation Matures
Live Firmware Activation (LFA) continues to evolve across the Trusted Firmware stack.

* **TF-A adds:**
  * Enhanced EL3 agent support
  * Improved activators for TF-RMM
  * Secure Partition LFA enablement
* **TF-RMM introduces:**
  * Low virtual address memory management
  * Runtime granule allocation
  * Dynamic VA allocation and mapping
  * New EL3 interfaces for memory reservation
* **Hafnium adds:**
  * Secure Partition lifecycle management interfaces
  * Full live activation start and completion flows
  * Activation state tracking
  * Live-state buffer support
  * FF-A discovery enhancements for activation-aware partitions

Together, these improvements further advance in-service firmware update capabilities for secure systems.

### FIRME Progress
The Firmware Interface for RME (FIRME) receives significant enhancements:
* Early ALP2 support
* Discovery services
* Granule management services
* FIRME version and feature testing
* GPI_SET support in TF-RMM

These additions continue to lay the groundwork for future RME platform deployments.

### Measured Boot Improvements
Measured Boot capabilities have been significantly expanded:
* Dynamic hash provisioning
* Crypto-agile event log infrastructure
* TPM integration through libtpm
* New helper APIs for hash and event metadata management

These enhancements provide greater flexibility for platform attestation and integrity measurement workflows.

---

## TF-A Platform Support Expansion

### Texas Instruments
Initial support for TI K3 Low Power / AM62L platforms includes:
* SCMI server and protocol support
* Power and clock management
* Device-state handling
* PSC, PLL, oscillator and clock frameworks
* DDR and firewall integration
* Boot-time performance optimizations

### Renesas
Expanded support includes:
* Initial BL31 support for R-Car Gen5 X5H
* New Gen3 M3Le and Geist board support
* SCIF console implementation rewritten in C
* Multiple boot-flow, SVE and AMU fixes

### STMicroelectronics
Substantial STM32 platform work includes:
* Watchdog integration
* PMIC, clock and power management updates
* New board and device-tree enablement for:
  * STM32MP21
  * STM32MP23
  * STM32MP25

### AMD/Xilinx
Enhancements for Versal2 include:
* Compile-time topology selection
* New topology-aware power management
* Alternate primary core support
* Robustness improvements across multiple configurations

### Additional Platform Updates
Additional enablement and improvements landed for:
* NXP S32G274ARDB
* Qualcomm Technologies (QTI) Lemans and Kodiak platforms
* Arm Morello
* Arm FVP
* Juno
* RD-V3
* TC platforms
* Corstone-1000
* RD-Aspen

---

## TF-A Tests Updates

TF-A Tests continues to expand validation coverage for emerging architecture and firmware capabilities. Highlights include:

### Realm and RME Validation
* Alignment with RMM 2.0-beta0-rc1
* Expanded Realm Management Interface (RMI) coverage
* FIRME validation support
* Device Assignment (DA) testing enhancements
* SMMUv3 DMA validation
* IDE key refresh and reset testing

### New Architectural Tests
Coverage has been added for:
* FEAT_AIE
* FEAT_PFAR
- FEAT_HACDBS
- FEAT_HDBSS
- FEAT_STEP2
* FEAT_MOPS in Realms
* LS64
* AMU world-switch behaviour
* Firmware Update (FWU) error handling
* Non-secure memory attribute transitions

### Fuzzing Support
A new PSCI fuzzing framework provides:
* Constraint-aware fuzzing
* Reserved-bit validation
* Enhanced status reporting

---

## TF-RMM Advances Toward RMM 2.0

TF-RMM v2.15 represents a major milestone in RME enablement. Key developments include:

### RMM 2.0 Adoption
* EL2/EL3 interface version 2.0
* Updated RSI and RMI ABIs
* New range-based granule delegation APIs
* RTT_DATA_MAP and RTT_DATA_UNMAP support
* Additional architectural feature register support

### Stateful RMI Operations
Introduction of Stateful RMI Operations (SRO) includes:
* SRO context library
* Continue operation support
* Memory donate, reclaim and cancel workflows
* REC lifecycle integration

### Device Assignment
The device assignment framework has been substantially reworked with:
* Updated PDEV/VDEV flows
* DMA enablement support
* Mapping validation improvements
* Host-side DA integration

### SMMUv3 Support
New capabilities include:
* Native SMMUv3 driver support
* Multiple SMMU support
* Per-VMID TLBI operations
* PSMMU ABI enablement

### Quality and Reliability
* AFL++ fuzzing infrastructure
* Automated corpus generation
* Crash triage support
* Continuous fuzzing workflows

---

## Hafnium Enhancements

Hafnium continues its evolution as the FF-A Secure Partition Manager.

### FF-A v1.3 Support
Major FF-A v1.3 enhancements include:
* Extended partition descriptors
* UUID reporting during partition discovery
* Canonical UUID parsing
* Duplicate UUID validation
* Improved service modelling

### Live Firmware Activation
Hafnium now supports:
* Secure Partition live activation workflows
* Activation lifecycle management
* Global activation tracking
* Runtime state migration infrastructure

### Memory Management Improvements
A new platform memory allocator abstraction provides:
* Rollback-aware allocation
* Per-CPU rollback pools
* Improved FF-A memory operations
* Better scalability and maintainability

### CI and Test Infrastructure
Continuous integration improvements include:
* Shrinkwrap configurations
* EL2 SPMC TFTF overlays
* Remote-source build targets
* Per-test log isolation
* Enhanced UART log capture

---

## Open CI and Ecosystem Improvements

Alongside the core projects, the release includes updates to:
* TF-A Open CI Jobs
* TF-A Open CI Scripts
* Project build, validation and testing infrastructure

These changes improve automation reliability, test coverage, and overall contributor experience across the Trusted Firmware ecosystem.

---

## Getting Started

The TF-A v2.15 release and associated project releases are available now from the [TrustedFirmware.org](http://trustedfirmware.org) repositories.

For complete details, release notes, and changelogs, please refer to:
* Trusted Firmware-A
* TF-A Tests
* TF-RMM
* Hafnium
* TF-A Open CI Jobs
* TF-A Open CI Scripts

on the [TrustedFirmware.org](http://trustedfirmware.org) project pages and associated Git repositories.

---

## Acknowledgements

The [TrustedFirmware.org](http://trustedfirmware.org) Board and Technical Steering Committee would like to thank all maintainers, reviewers, contributors, ecosystem partners, and community members who made this release possible.

We look forward to continued collaboration as we advance secure firmware standards and implementations for the Arm ecosystem.

## About TrustedFirmware.org

TrustedFirmware.org is an open source project implementing foundational software components for creating secure devices. Trusted Firmware provides a reference implementation of secure software for processors implementing both the A-Profile and M-Profile Arm architecture. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. Trusted Firmware code is the preferred implementation of Arm specifications, allowing quick and easy porting to modern chips and platforms. This forms the foundations of a Trusted Execution Environment (TEE) on application processors, or the Secure Processing Environment (SPE) of microcontrollers.

[TrustedFirmware.org](https://www.trustedfirmware.org) is member driven and member funded.

To learn more about membership and its benefits, please see the [following page](/about) or send a request for more information to enquiries@trustedfirmware.org.
