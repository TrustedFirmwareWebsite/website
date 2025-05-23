---
author: bharath-subramanian
title: Trusted Firmware-A v2.13 released!
date: 2025-05-22 17:00:00

image: "../../assets/images/blog/mp1_avenger_tf_crop_1500x1500.png"
---

## Introduction

Trusted Firmware-A (TF-A) 2.13 has been officially released, delivering a host of enhancements focused on security, platform support, and maintainability. This release introduces key updates including support for Arm Architecture features, expanded RMM functionality, and improved integration with third-party firmware components. TF-A 2.13 also strengthens its commitment to platform diversity with new and updated support for several Arm reference platforms and silicon partner boards. Alongside performance and security optimisations, the release includes refinements to testing infrastructure and documentation to streamline adoption by the wider Arm ecosystem.

This milestone reflects the strength of **community collaboration across the TrustedFirmware.org ecosystem**. Our thanks go to the many members and partners who contributed code, reviews, testing, and technical feedback across multiple components:

- **TF-A**: Contributions from Arm, Linaro, Amd, Mediatek, Altera, NXP, Rockchip, ST, GigaDevice, Renesas, and others helped drive core enhancements and platform support.
- **TF-RMM (Realm Management Monitor)**: Arm, Huawei, Linaro, and Nvidia contributed to evolving Realm support and RME validation.
- **Hafnium (SPM/FF-A)**: Contributions from Arm, Microsoft, and Nvidia strengthened partition management and secure communication testing.
- **CI infrastructure**: Maintained and improved by Arm, Linaro, Amd, Mediatek, NXP, Rockchip, and Altera.

We sincerely appreciate the time and effort invested by all contributors. This collective effort is what enables Trusted Firmware-A to remain the trusted foundation for secure world software on Arm platforms.

## Highlights

### TF-A/EL3
- Alto CPU support
- Architecture feature support for PMUv3p9. PAUTH_LR and SPE_FDS.
- [PSCI] Powerdown abandon feature support
- SMCCC_FEATURE_AVAIBILITY support based on smccc 1.5 specification
- Firmware Handoff
  - Library enhancements to add more TE types in library
  - FVP  interfaces are now migrated to use Transfer List except SPMD → SPMC(hafnium)
  - TC is now using Transfer List for booting
- HOB creation Library (from edk2) is now hosted in TF-A
- New Platforms: mt8189, mt8196 qcs615, RK3576, AM62L
  
### Boot flow

- Feature Additions
  - Added discrete TPM support in BL1/BL2 for the RPi3 platform.
  - Support for MbedTLS PSA Crypto with ROMLIB on FVP.
  - Redesigned PSA Crypto Key ID management to avoid repeated key creation/destruction.
- Test Additions
  - Support for MbedTLS PSA Crypto with ROMLIB on FVP.
  - Added basic boot test for TF-RMM with TF-A and TFTF (Realm Payload) in Jenkins CI.
  - Integrated DRTM ACS test suite into TF-A Jenkins CI.
  - Added missing test configuration for ROTPK in register on FVP platform.
- Build System
  - Refactored ROTPK key/hash generation to auto-generate required files during build.
- mbedTLS Improvements
  - Migrated to mbedTLS version 3.6.3.

### Errata/Security mitigations (CPU/GIC)

- CVE-2024-5660, CVE-2024-7881
- Cortex-A510, Cortex-A715, Cortex-X4, Cortex-X925, Neoverse V3

### Hafnium/SPM (S-EL2)

- FF-A v1.2 completed: indirect messaging with service UUIDs.
- FF-A v1.3 early adoption: Update to FFA_MEM_PERM_GET ABIs.
- StMM integration: provide HOB structure as boot information.
- Power management update:
  - Bootstrapped secondary vCPUs on secondary cores power on flows.
  - SP's subscription to the power off event.
- SP loading: SP artefacts can be bundled in a TL format. I.e SP binary and SP manifest (DTB).
- Resuming ECs for interrupt handling assisted by NWd Scheduler when the SP is in waiting state, with ```sri-interrupts-policy``` field in the SP manifest.

### TF-RMM (R-EL2)

- Deprivileging RMM code via EL0 App support
- Added some support for some RMMv1.1 APIs - ```RMI_DEV_MEM_(UN)MAP```, support for device granules in ```RMI_GRANULE_DELEGATE``` and  ```RMI_GRANULE_UNDELEGATE```.
- Additional hardening of RMM via compiler flags ```-fstack-protector-strong```, ```-Wextra```, ```-Wstrict-overflow```,  ```-D_FORTIFY_SOURCE=2``` and ```-Wnull-dereference```.
- New platform support for RD-V3-R1 and RD-V3-R1-Cfg1 FVPs.
- Dynamic discovery of PCIE Root complex topology and device memory from the Boot manifest. 

### Trusted Services (v1.2.0)

- Introduced the fTPM SP. The implementation is experimental.
- Introduce the new Arm Reference Design-1 AE platform targeting the Automotive segment. It features high-performance Arm Neoverse V3AE Application Processor compute system, Arm Cortex-R82AE based Safety Island, and a Runtime Security Engine (RSE) for enhanced security.
- Updated the se-proxy deployment and added support for the Firmware Update Proxy service. The FWU Proxy implements a [Platform Security Firmware Update for the A-profile Arm Architecture](https://developer.arm.com/documentation/den0118/latest/) compliant FWU Agent which runs a [PSA Certified Firmware Update API 1.0](https://arm-software.github.io/psa-api/fwu/1.0/) compliant client as its backend. 

### TF-A Tests

- Enhancements to fuzzing tests (EL3 vendor specific SMC, SDEI, FF-A interface, capability for randomized fuzzing inputs)
- Functionality test
  - Firmware Handoff : AArch32 tests and event log testing
  - SMCCC_ARCH_FEATURE_AVAILABILITY
  - RAS system registers, FPMR, SCTLR2, THE and D128
  - validate psci_is_last_cpu_to_idle_at_pwrlvl
  - SPM/FF-A : HOB generation, PPI timer interrupts, v1.2 RXTX headers
  - RMM: Tests introduced for majority of features developed in RMM
- Platform Support
  - Versal NET
  - Versal
  - Neoverse-RD

Detailed Changelog refer [here](https://trustedfirmware-a-tests.readthedocs.io/en/latest/change-log.html#version-2-13)




## About TrustedFirmware.org

TrustedFirmware.org is an open source project implementing foundational software components for creating secure devices. Trusted Firmware provides a reference implementation of secure software for processors implementing both the A-Profile and M-Profile Arm architecture. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. Trusted Firmware code is the preferred implementation of Arm specifications, allowing quick and easy porting to modern chips and platforms. This forms the foundations of a Trusted Execution Environment (TEE) on application processors, or the Secure Processing Environment (SPE) of microcontrollers.

[TrustedFirmware.org](https://www.trustedfirmware.org) is member driven and member funded.

To learn more about membership and its benefits, please see the [following page](/about) or send a request for more information to enquiries@trustedfirmware.org.
