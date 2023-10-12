---
author: matteo-carlini
title: Trusted Firmware-A v1.6 and v2.0 released!
date: 2018-10-08 09:00:00

image: "../../assets/images/blog/synquacer_tf_crop_1500x1500.png"
---

The Trusted Firmware-A team recently produced two new official releases (v1.6/v2.0) of the Trusted Firmware-A codebase.

The two releases share the same set of functionalities, with the v2.0 carrying the removal of deprecated interfaces as only difference with respect to the v1.6.

The v1.6 release, available since September 21st, comes with a large amount of new features and enhancements.
A few highlights comprise:

- RAS (Reliability, Availability, Serviceability) handling on AArch64:
  - The Armv8 RAS Extensions introduce Standard Error Records, which are a set of standard registers to configure RAS node policy and allow RAS Nodes to record and expose error information for error handling agents.
  - The v1.6 release includes Firmware support for v8.2 RAS extensions (Error Synchronization Barrier) and v8.4 RAS extensions (Fault Injection), as well as handlers for Uncontainable errors, Double Faults and EL3 External Aborts.
- v8.4 MPAM (Memory Partitioning And Monitoring) EL3 enablement:
  - MPAM is an Armv8.4 feature that enables various memory system components and resources to define partitions. Software running at various ELs can then assign themselves to the desired partition to control their performance aspects.
  - This release allows EL3 to enable lower ELs accessing their own MPAM registers without trapping to EL3.
- Speculation Security Vulnerabilities (1):
  - Implementation of a static workaround for CVE-2018-3639 for AArch32 and AArch64 on Cortex-A57, Cortex-A72, Cortex-A73 and Cortex-A75.
  - Added support for dynamic mitigation for CVE-2018-3639 and implement dynamic mitigation on Cortex-A76.
- Dynamic Configuration Framework:
  - Add dynamic configurations for BL31, BL32 and BL33, enabling support for Chain of Trust (COT).
- ROM Lib Feature:
  - Support combining several libraries into a self-called "romlib" image, that may be shared across images to reduce memory footprint.
  - The romlib image is stored in ROM but is accessed through a jump-table that may be stored in read-write memory, allowing for the library code to be patched.
- Backtrace Feature:
  - This function displays the backtrace, the current EL and security state to allow a post-processing tool to choose the right binary to interpret the dump.
- MISRA C-2012 guidelines alignment:
  - As a continuation of the work initiated in previous releases, further code hygiene changes and additional alignment with MISRA C-2012 guideline have been included in the release.
- Various changes to support Clang linker and assembler
  - The clang assembler/preprocessor is used when Clang is selected. However, the clang linker is not used because it is unable to link TF-A objects due to immaturity of clang linker functionality at this time.
- Arm Cortex-A cores support:
  - Added support for Cortex-Ares, Cortex-A76, Cortex-Deimos, Cortex-Helios
- New Platforms support:
  - Arm SGI-575 & Arm SGM-775
  - Allwinner sun50i_64 & sun50i_h6
  - NXP QorIQ LS1043A, i.MX8QX, i.MX8QM and i.MX7Solo WaRP7
  - TI K3
  - Socionext Synquacer SC2A11
  - Marvell Armada 8K
  - STMicroelectronics STM32MP1
- Arm TrustZone Media Protection 1 (TZMP1) support added on Arm Juno Platform

The v2.0 release is available since October 2nd. It only differs from the v1.6 above in the removal of all deprecated interfaces (previously marked with the ERROR_DEPRECATED compilation flag), except for the MULTI_CONSOLE_API, that is planned for removal in the next v2.1 release.

A new Platform Compatibility Policy (2) document has also been created for clarifying the project's policy around compatibility for upstream platforms.
Various Arm and partners platforms have been updated to remove the use of deprecated API's in this release.

The v2.0 release will be used as the official baseline for all new developments.

A new Release information page (3) has also been created with all the information on upcoming releases, releases schedules and a list of deprecated interfaces.

References:

1. [Trusted Firmware-A Security Advisory TFV-7](https://github.com/ARM-software/arm-trusted-firmware/wiki/Trusted-Firmware-A-Security-Advisory-TFV-7)

2. [Platform Ports Policy](https://github.com/ARM-software/arm-trusted-firmware/blob/master/docs/process/platform-ports-policy.rst)

3. [Trusted Firmware-A Release information](https://github.com/ARM-software/arm-trusted-firmware/wiki/TF-A-Release-information)
