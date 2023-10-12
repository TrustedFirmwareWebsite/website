---
author: trusted-firmware
title: Trusted Firmware – A & TF-A-Tests v2.2 released
date: 2019-11-07 10:00:00

image: "../../assets/images/blog/x15_demo_tf_crop_1500x1500.png"
---

Trusted Firmware-A and the related Trusted Firmware-A tests v2.2 have now been released! The TF-A change logs and TF-A-Test change logs show the updates, but we've shown some of the highlights below:

Important highlights of the TF-A log include:

- Armv8.3 Pointer Authentication use in Secure world (EL3 and lower S-ELs)
- Adds support for ARMv8.3-Pointer Authentication in BL1 SMC calls and BL2U image for firmware updates.
- Armv8.5 Branch Target Identification
- Armv8.5 Memory Tagging Extension (MTE) enabled for the Normal world and Secure world
- MTE support is now enabled by default on systems that support it at EL0.
- GICv3 Driver updates for multi socket GIC redistributor discovery
- RSA - 3072 support as per latest version of TBSA/TBFU
- Speculative Store Bypass Safe (SSBS): Further enhance protection against Spectre variant 4 by disabling speculative loads/stores (SPSR.SSBS bit) by default.

Additionally, Arm CPU support now includes the following features:

- Support introduced for new cores: Hercules, HerculesAE, Cortex- A76AE, Cortex- A65, A65AE
- Various errata workarounds for the cores: N1, Cortex-A76, A55, A35, A9 and for the DSU
- New/enhanced features:
  - Neoverse N1: force cacheable atomic to near atomic and workaround for various errata.
  - Zeus: apply MSR SSBS instruction

Many new partner platform ports have been added to our current lineup. This includes support for:

- Amlogic S905X2 (G12A) and S905x (GXL) platform
- Arm A5 DesignStart and Arm Corestone-700
- Intel Agilex
- MediaTek mt8183
- QEMU SBSA platform
- Renesas R-Car Gen3: New platform support added for D3
- Rockchip px30 and rk3288
- Raspberry Pi 4

The highlights for the TF-A-Tests include:

- Secure partition quark

- New tests:

  - Basic unit tests for xlat table library v2.
  - Tests for validating SVE support in TF-A.
  - Stress tests for dynamic xlat table library.
  - PSCI test to measure latencies when turning ON a cluster.
  - Series of AArch64 tests that stress the secure world to leak sensitive counter values.
  - Test to validate PSCI SYSTEM_RESET call.
  - Basic tests to validate Memory Tagging Extensions are being enabled and ensuring no undesired leak of sensitive data occurs.

- Enhanced tests:
  - Improved tests for Pointer Authentication support. Checks are performed to see if pointer authentication keys are accessible as well as validate if secure keys are being leaked after a PSCI version call or TSP call.
  - Improved AMU test to remove unexecuted code iterating over Group1 counters and fix the conditional check of AMU Group0 counter value.

For more information, please see the [TF-A change log](https://trustedfirmware-a.readthedocs.io/en/latest/change-log.html#version-2-2) and [TF-A Tests change log](https://git.trustedfirmware.org/TF-A/tf-a-tests.git/about/docs/change-log.rst#trusted-firmware-a-tests-version-2-2).
