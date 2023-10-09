---
author: matteo.carlini
title: Trusted Firmware-A Tests First Public release
date: 2018-11-08 09:00:00
categories:
  - Blog
layout: post
image: "@assets/images/blog/mp1_avenger_tf_crop_1500x1500.png"
---

As recently anticipated, the [Trusted Firmware-A Tests](https://git.trustedfirmware.org/TF-A/tf-a-tests.git/about/) code has now been released as an open-source project under the TrustedFirmware.org community project initiative.

The Trusted Firmware-A Tests (TF-A-Tests) is a suite of bare-metal tests to exercise the [Trusted Firmware-A (TF-A)](https://github.com/ARM-software/arm-trusted-firmware) features from the Normal world.
It enables strong TF-A functional testing without dependency on a Rich OS, mainly interacting with TF-A through its SMC interface.

The initially released software (labelled as version [2.0](https://git.trustedfirmware.org/TF-A/tf-a-tests.git/tag/?h=v2.0)) includes testing of the following TF-A features (the list is not exhaustive):

- [SMC Calling Convention](http://infocenter.arm.com/help/topic/com.arm.doc.den0028b/ARM_DEN0028B_SMC_Calling_Convention.pdf)
- [Power State Coordination Interface (PSCI)](http://infocenter.arm.com/help/topic/com.arm.doc.den0022d/Power_State_Coordination_Interface_PDD_v1_1_DEN0022D.pdf)
- [Software Delegated Exception Interface (SDEI)](http://infocenter.arm.com/help/topic/com.arm.doc.den0054a/ARM_DEN0054A_Software_Delegated_Exception_Interface.pdf)
- Performance Measurement Framework (PMF)
- Communication and interaction with the Test Secure Payload (TSP)
- Firmware update (or recovery mode)
- EL3 payload boot flow
- Secure partition support

The v2.0 release has been tested on Arm Fixed Virtual Platforms and Juno platforms (r0, r1 and r2 variants).
More information about the content of this first release can be found in the [change log](https://git.trustedfirmware.org/TF-A/tf-a-tests.git/about/docs/change-log.rst).

Though these tests do not currently allow a full test coverage of the TF-A codebase nor do they constitute a compliance test suite for the Arm interface standards used in TF-A (such as PSCI), they nonetheless provide a strong basis for TF-A developers to validate their own platform ports and add their own test cases.
All TF-A adopters are anyway encouraged to develop and perform their own comprehensive tests to validate and assess their production codebase and hardware/firmware features.

Other useful resources to get started with TF-A-Tests include:

- The [User Guide](https://git.trustedfirmware.org/TF-A/tf-a-tests.git/about/docs/user-guide.rst) for instructions on how to install, build and use the TF-A Tests.
- The [Design Guide](https://git.trustedfirmware.org/TF-A/tf-a-tests.git/about/docs/design.rst) for information on how the TF-A Tests internally work.
- The [Porting Guide](https://git.trustedfirmware.org/TF-A/tf-a-tests.git/about/docs/porting-guide.rst) for information about how to use this software on another Armv8-A platform.
- The [official Mailing List](https://lists.trustedfirmware.org/mailman3/lists/tf-a-tests.lists.trustedfirmware.org/) for project's discussion.

In line with the parent TF-A project, the TF-A-Tests open-source code is released under a [BSD 3-Clause license](https://git.trustedfirmware.org/TF-A/tf-a-tests.git/about/license.rst) and contributions to the project are accepted under the same license with developer sign-off as described in the [Contributing Guidelines](https://git.trustedfirmware.org/TF-A/tf-a-tests.git/about/contributing.rst).

Everyone is welcome in contributing to it and if you would like to know more about TF-A-Tests and the wider TrustedFirmware.org community project, please get in touch with [enquiries@trustedfirmware.org](mailto:enquiries@trustedfirmware.org) for more details.
