---
author: joakim-bech
title: Trusted Firmware OP-TEE v4.2.0 Release
date: 2024-04-14 08:00:00

image: "../../assets/images/blog/synquacer_tf_crop_1500x1500.png"
---

**Trusted Firmware OP-TEE: v4.2.0 Release**
=====================================================

Introduction
------------

Trusted Firmware OP-TEE [v4.2.0](https://github.com/OP-TEE/optee_os/blob/4.2.0/CHANGELOG.md) was released on the 12th of April, 2024. The release is a minor version update, however it still contains quite a few fixes with 145 pull requests merged in total counting the optee_os, optee_client, optee_test and build gits. These 145 pull requests added 320 new commits since the previous release earlier this year. The updates consist of additions of a couple of new platforms, various updates to the core and drivers to the OP-TEE OS itself. In addition to that we’ve also done some improvements to the CI jobs and the Trusted Applications that comes with OP-TEE. Here are some of the main additions in OP-TEE 4.2.0:

Highlights 
----------
**Platform Support**
- plat-sam: Updates to the SAM platform included adding support for the Microchip sama7g54-ek board and optimizing clock building for the sama5d2. NVMEM unique hardware key and Die ID support were enabled and clock registration for SCMI usage was implemented. Static shared memory address and size were fixed in order to avoid memory map overlap problems.
- plat-stm32mp2: Updates to the STM32MP1 platform included enabling SAES software fallback for 192-bit keys by default and disabling RCC MCKPROT if not needed to allow non-secure world access to the Cortex-M coprocessor on STM32MP15 platforms. Additionally, low power mode support was added for stm32mp25, with OP-TEE bookkeeping performed before executing power management sequences. Furthermore, support for up to 8GB of external RAM was enabled, along with default enabling of RNG and RNG PTA and activation of RIFSC and RIF drivers for STM32MP2 platforms. Then some embedded test support was enabled by default for STM32MP2x platforms.
- plat-vexpress: We’ve disabled PL011-specific code when the semihosting console is enabled. We initialize the callout service in various situations. We now use the serial callbacks “rx_intr_{en,dis}able()” for interrupt control from the console.


**CI updates**
- A job for building and testing with QEMU for Arm v7 (32-bit) was added, along with a 64-bit build for the RISC-V architecture. The CI scripts were adjusted to prevent adding unnecessary “rust/cargo” paths to the user's PATH variable. Additionally, enhancements were made to QEMUv8 jobs to include test cases with pager enabled and to avoid "no space left on device" errors. Variable names were improved for clarity and updates were made to Rust tests, enabling them by default for QEMUv8 while fixing issues related to PATH and disabled tests. The "checkout" action was updated and QEMUv8 jobs were configured to use a newer Docker image. Then, a fix was applied to address yet another "no space left on device" error encountered in the QEMUv8_Xen_check job.
- As part of putting IBART on hold, we’ve added a new job for building and testing with QEMU for Armv7 (32-bit). A 64-bit build for the RISC-V architecture was added. Our CI scripts were adjusted to prevent adding unnecessary “rust/cargo” paths to the user's PATH variable. For QEMUv8 jobs, we’ve fixed "no space left on device" errors which is a direct outcome of the Rust toolchain and OP-TEE Rust examples taking more disk space. The "checkout" GitHub Action was updated from v3 to v4. Then we’ve also updated the QEMUv8 configuration to use a newer Docker image. The last thing for CI was another fix to address yet another "no space left on device" error encountered in the QEMUv8_Xen_check job.


**Driver Updates**
- atmel: The updates were focused on ensuring compatibility with the SAMA7G5 platform. Changes included updating device match tables, adding configuration for specific peripherals available on the SAMA7G5 and controlling the USB reset functionality. Additionally, some optimizations and cleanup was made, such as removing unused variables and updating header file inclusions.
- caam: The CAAM updates included enabling RNG prediction resistance by default for the 8QX and the 8DX platforms. We’re introducing the CAAM key driver and CAAM key objects that add key support for DH, DSA, ECC and RSA algorithms. For SM2, support for software operations as fallback has been added.
- clk: We’ve included a new function to read clock duty cycles, added support for clock rate propagation to parent clocks. We’ve added definitions for ADC and SPI bus clocks for the STM32MP13 platform. Fixes for issues related to clock control and non wired oscillators to avoid panics. Introducing a new clock flag (CLK_SET_RATE_UNGATE) for enabling clocks during rate changes. Additionally, improvements have been made to clock handling during clock re-parenting and the clock framework lock has been changed from a spinning lock to a mutex for better handling of slow stabilizing clocks. New clock drivers have also been added for the SAMA7G5 platform, including PLL configuration and clock descriptions.
- crypto: For the STM32 crypto drivers, function references were cleaned up and the cipher operation structure was reorganized for better readability. Additionally, a 2us delay was added during CRYP peripheral reset to ensure proper reset. Power management support was added to the CRYP driver and requirements for reset binding were removed. A bug in SAES key selection was fixed (left shift missing). We’ve moved some context allocation/free functions for better maintenance. Lastly, a software fallback was implemented for 192-bit AES keys in the STM32 SAES driver. For the HiSilicon crypto driver, the HPRE (High-Performance RSA Engine) hardware block, code was added to initialize this block.
- nvmem: Two new drivers were added to the nvmem subsystem. The "nvmem-die-id" driver was introduced to read the die ID from an NVMEM. Similarly, the "nvmem-huk" driver was added to read the OTP unique hardware key from an NVMEM controller. Both utilise the nvmem framework for reading NVMEM cells from the device tree.
- regulator: The voltage level value is no longer cached in the struct regulator, ensuring that the current voltage level is always read from the device. This resolves issues related to regulator level values that depend on the parent regulator. Additionally, the .supported_voltages() operation was implemented in the regulator_gpio.c driver to list the voltage levels controlled by a GPIO. This change ensures compatibility with the scp-firmware voltage domain module when a regulator-gpio is exposed through an SCMI voltage domain. Then we’ve also started using the struct mutex_pm_aware that was introduced to protect regulator accesses.
- stm32_i2c: The function i2c_config_analog_filter() cannot fail, therefore we’ve removed unnecessary tests and return values. Additionally, the driver now applies pinctrl configuration at initialization, fixing an issue introduced by a previous change. Concurrent accesses to the STM32 I2C bus are now protected with a PM aware mutex to prevent conflicts.
- stm32_rng: In the STM32 RNG driver, support for the stm32mp25 platform was added. This included adjustments to handle a shared security clock, specifically the RNG kernel clock, which required separate management of the RNG bus clock. RNG configuration was moved to “compat” data structure to ensure that register values are not part of the device tree. The RNG version is now printed at driver probe time. Also, the maximum noise clock frequency was defined in the “compat” data structure to avoid the need for driver configuration flags. Then the use of CFG_PM was removed from the STM32 RNG driver since it's not defined in OP-TEE OS.



**Core updates**
- arm: Support for checking CRC32 hardware instruction in aarch32 was added. Helper functions were introduced to check the implementation of various cryptographic extensions. Masks were added for obtaining Crypto Extensions support status from the ID_ISAR5_EL1 register. Dead code warning was addressed when ARM32 is not defined. Additionally, integer overflow in generic_timer_handler() and generic_timer_start() was fixed and proper locking was implemented in virt_add_cookie_to_current_guest(). Main memory physical range(s) are now obtained from the secure embedded DTB if not found from the external DDR. Runtime checks for supported ARMv8 Crypto Extensions were added during boot and cache_op_outer() was updated for consistency. Rewrite and optimization were done for feat_crc32_implemented() and generic timer driver implementation, respectively.
- Arm64: Masks were added to obtain Crypto Extensions support status from the ID_AA64ISAR0_EL1 register, facilitating access to various cryptographic algorithms. Additionally, functions were added to read and write the Counter-timer Physical Secure Timer CompareValue register. Implementation of __do_semihosting() was done according to the “"Semihosting for Aarch32 and Aarch64" specification to support semihosting. timer_init_callout_service() was implemented to initialize the callout service (specific to AArch64). Furthermore, the STACK_ABT_SIZE was increased to prevent stack overflow issues when the log level is set to 0. Lastly, old definitions for ID_AA64ISAR0_EL1 CRC32 bitmask and shift were removed.
- ffa: Updates to the FF-A (Function Framework for Arm) core include support for asynchronous notifications via FF-A with SPMC at S-EL2 or EL3 was added, with SPMC probed using FFA_FEATURES to verify support for notifications. Additionally, SPMC_CORE_SEL1_MAX_SHM_COUNT was introduced to specify the maximum number of supported shared memory objects in a configuration with SPMC at S-EL1. The main exit/re-entry loop in ffa_msg_send_direct_resp() now ensures native (secure) interrupts are unmasked before exiting and masked again on re-entry to prevent pending interrupts during exit. FF-A version is now read from the SP manifest's ffa-version property and lastly, the shared memory bitmask tracking is stored in the current partition when configured with NS virtualization and SPMC at S-EL1.
- kernel: Semihosting functions have been added to enable communication with a host computer running a debugger, such as GDB. An API function, timeout_elapsed_us(), is introduced to measure time elapsed since or until an initialized timeout reference. Checks have been added to ensure proper handling of device tree property pointers and return values from snprintf() function. Additionally, delay and timeout implementation is factorized for RISC-V and Arm architectures into a generic core kernel source directory. Mutexes compliant with power management sequences have been introduced.Then, thread spin locking functions have been added for active spinning locks in thread contexts to prevent potential deadlock situations.
- notif: an assertion was added to ensure that the callback function pointer in notif_register_driver() points to an unpaged address, as it will be called from an interrupt handler and must not be paged. Additionally, an assert was included in notif_register_driver() to verify that the passed driver struct is located in nexus memory. All global state variables related to notifications were moved into nexus memory, except for the mutex used for yielding notifications.
- riscv: Several fixes from the RISC-V community in the form of Improvements to communication methods, changes to memory management and refinements in exception handling. Additionally, there were updates to naming conventions for better clarity.

**Trusted Applications**
- pkcs11: In the PKCS#11 TA, improvements were made to error handling and code clarity, where checks were added to prevent potential NULL pointer dereferences and code has been refactored to avoid confusion. Additionally, AES GCM authenticated encryption and decryption operations were implemented.
- remoteproc: In the Remoteproc TA, the remoteproc_load_fw function was modified to allow re-entrance.

The release included updates to the following repos:
- [optee_os](https://optee.readthedocs.io/en/latest/building/gits/optee_os.html#optee-os) 
- [optee_client](https://optee.readthedocs.io/en/latest/building/gits/optee_client.html#optee-client) 
- [optee_test](https://optee.readthedocs.io/en/latest/building/gits/optee_test.html#optee-test) 
- [build](https://optee.readthedocs.io/en/latest/building/gits/build.html#build) 
- [manifest](https://optee.readthedocs.io/en/latest/building/gits/build.html#manifests)



More details can be found [here](https://github.com/OP-TEE/optee_os/blob/4.2.0/CHANGELOG.md).

Testing of the release has been performed by the committers and can be found [here](https://github.com/OP-TEE/optee_os/commit/12d7c4ee4642d2d761e39fbcf21a06fb77141dea)
Test plan for this release using the OP-TEE are [here](https://optee.readthedocs.io/en/latest/building/gits/optee_test.html) test suite. Testing results can be found in the [pull request itself](https://github.com/OP-TEE/optee_os/pull/6770)

The release has been tagged at [4.2.0](https://github.com/OP-TEE/optee_os/releases/tag/4.2.0) using the OP-TEE [release procedure](https://optee.readthedocs.io/en/latest/general/releases.html#release-procedure). 

The OP-TEE release roadmap can be found [here](https://optee.readthedocs.io/en/latest/general/releases.html). 

Any security fixes prior to the next release will be made available on the [Security Advisories page](https://github.com/OP-TEE/optee_os/security/advisories?state=published). 

About TrustedFirmware.org
----------
TrustedFirmware.org is an open source project implementing foundational software components for creating secure devices. Trusted Firmware provides a reference implementation of secure software for processors implementing both the A-Profile and M-Profile Arm architecture. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. Trusted Firmware code is the preferred implementation of Arm specifications, allowing quick and easy porting to modern chips and platforms. This forms the foundations of a Trusted Execution Environment (TEE) on application processors, or the Secure Processing Environment (SPE) of microcontrollers. Visit:[https://www.trustedfirmware.org/](https://www.trustedfirmware.org)
TrustedFirmware.org is member driven and member funded. To learn more about membership and its benefits, please see the [following page](https://www.trustedfirmware.org/about) or send a request for more information to enquiries@trustedfirmware.org.
