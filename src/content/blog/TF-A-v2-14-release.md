---
author: bharath-subramanian
title: Trusted Firmware-A v2.14 released!
date: 2025-11-26 10:00:00

image: "../../assets/images/blog/mp1_avenger_tf_crop_1500x1500.png"
---

## Introduction

Trusted Firmware-A (TF-A) 2.14 has been officially released, delivering a host of enhancements focused on security, platform support, and maintainability. This release introduces key updates including support for Arm Architecture features, expanded RMM functionality, and improved integration with third-party firmware components. TF-A 2.14 also strengthens its commitment to platform diversity with new and updated support for several Arm reference platforms and silicon partner boards. Alongside performance and security optimisations, the release includes refinements to testing infrastructure and documentation to streamline adoption by the wider Arm ecosystem.

This milestone reflects the strength of **community collaboration across the TrustedFirmware.org ecosystem**. Our thanks go to the many members and partners who contributed code, reviews, testing, and technical feedback across multiple components.

We sincerely appreciate the time and effort invested by all contributors. This collective effort is what enables Trusted Firmware-A to remain the trusted foundation for secure world software on Arm platforms.

## Highlights

**TF-A/EL3**
- New architectural features support: FEAT_FGWTE3, FEAT_IDTE3, FEAT_RME_GPC2, FEAT_AIE, FEAT_CPA2, FEAT_MPAM_PE_BW_CTRL, FEAT_PFAR, FEAT_RME_GDI.
- Live Firmware Activation: base support enabling TF-RMM LFA, added RMM MEM RESERVE ABI.
- Armv9 CPU power down abandon support
- GICv5 driver permitting normal world kernel boot
- GIC720-AE support added
- Per-cpu framework supporting NUMA platforms
- SMCCC SoC name support (SMCCC v1.6 SMCCC_ARCH_SOC_ID)
- SPMD: added FF-A v1.3 FFA_NS_RES_INFO_GET,  FFA_ABORT interfaces
- EL3 SPMC: add multiple UUIDs support, TPM event log delivered by HOB list, FFA_MEM_RETRIEVE_REQ from hypervisor
- RME: FEAT_D128 for realm world, SMCCC_ARCH_FEATURE_AVAILABILITY
- Platforms: RD-Aspen added, updates to Arm FVP/Juno, AMD Versal Gen2, Intel, MT8189, MT8196, i.MX94, i.MX95, S32G274A, QTI Kodiak, Renesas R-Car, STM32MP1, STM32MP2, STM32MP21, STM32MP25, Xilinx Versal, ZynqMP

  
**Boot flow**

- Transfer list and event log libraries now offered as shared libraries consumed as submodules by TF-A.
- Update to mbedTLS 3.6.5
- Various PSA FWU improvements, namely BL2 in a dedicated FIP, GPT-corruption notifications to BL32, and expanded FWU tests.


**Errata/Security mitigations (CPU/GIC)**

- New CPU support: **Arm Lumex C1, Dionysus, Caddo/Veymont, Venom.**
- Added close to 30 new CPU errata across multiple processor families, based on the latest SDEN updates.


**Hafnium/SPM (S-EL2)**

- -FF-A v1.3 early adoption
  - FFA_NS_RES_INFO_GET ABI added
  - Partition lifecycle support: new states, abort handling. Pre-requisite to secure partitions is live firmware activation.
  - Notifications support refactored with per-vCPU notifications removed.
- Multi-GIC configuration supporting complex topologies.
- Shrinkwrap used at the core of Hafnium testing infrastructure.


**TF-RMM (R-EL2)**

- RMM v1.1 Planes support
  - PMU, timer, GIC ownership transfer.
  - Support for FEAT_S1POE/S1PIE, FEAT_S2POE/S2PIE
- RMM v1.1 Memory Encryption Contexts (MEC) support
- Realm Device Assignment
  - RMM v1.1. ALP12 base Device Assignment support 
  - RMI VDEV ABIs, PDEV life cycle, root port IDE key programming, SPDM client as EL0 app.
- Improved ID registers trapping leveraging SMCCC ARCH_FEATURE_AVAILABILITY,  in light of future FEAT_IDTE3 support.
- Additional architectural support: FEAT_TCR2, FEAT_D128, single-copy atomics, 


**TF-A Tests**

- RME: DA and PCIe, Planes, MEC
- SPM/FF-A
  - Bumped support o FF-A v1.3
  - FFA_ABORT ABI
  - Deprecated per-vCPU notifications.
- FWU: added negative testing (invalid image size, corrupted ROTPK)
- GICv5 support added
- Arm architecture tests
  - FEAT_TCR2 (for RME) , FEAT_IDTE3, FEAT_MPAM_PE_BW_CTRL, FEAT_EBEP, FEAT_AIE, FEAT_PFAR
  - SMCCC_ARCH_SOC_ID
  - SMCCC_ARCH_FEATURE_AVAILABILITY
- Fuzzing: added SMC fuzzer documentation
- Basic LFA framework tests
- Platforms updates: AMD/Xilinx, Arm FVP, Corstone-1000


**Trusted Services**
- RD-Aspen platform support added.
- EFI ESRT handling in FWU Proxy (supporting Corstone1000 platform).
- Block Storage service threat modelling.


Detailed Changelog refer [here](https://trustedfirmware-a-tests.readthedocs.io/en/latest/change-log.html#version-2-14)




## About TrustedFirmware.org

TrustedFirmware.org is an open source project implementing foundational software components for creating secure devices. Trusted Firmware provides a reference implementation of secure software for processors implementing both the A-Profile and M-Profile Arm architecture. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. Trusted Firmware code is the preferred implementation of Arm specifications, allowing quick and easy porting to modern chips and platforms. This forms the foundations of a Trusted Execution Environment (TEE) on application processors, or the Secure Processing Environment (SPE) of microcontrollers.

[TrustedFirmware.org](https://www.trustedfirmware.org) is member driven and member funded.

To learn more about membership and its benefits, please see the [following page](/about) or send a request for 
