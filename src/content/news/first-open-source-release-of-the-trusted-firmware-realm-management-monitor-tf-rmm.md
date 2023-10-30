---
author: trusted-firmware
title: First open-source release of the Trusted Firmware Realm Management Monitor (TF-RMM)
description: >
  Trusted Firmware is pleased to announce the release of the open-source Realm Management Monitor project (TF-RMM), the first reference implementation of the Arm® Realm Management Monitor (RMM) specification
date: 2022-12-01 10:00:00
image: "../../assets/images/trusted-firmware.jpg"
---

Trusted Firmware is pleased to announce the release of the open-source Realm Management Monitor project (TF-RMM), the first reference implementation of the Arm® Realm Management Monitor (RMM) [specification](https://developer.arm.com/documentation/den0137/).

Together with the Realm Management Extension (RME) to the Arm architecture, TF-RMM will enable partners to quickly develop and productize their future systems providing [confidential computing](https://www.arm.com/architecture/security-features). This is achieved by the introduction of new protected execution environments, called Realms. The RMM is the key software component that allows the isolated execution of Realms, interacting with a traditional Normal world hypervisor through [defined standard interfaces](https://developer.arm.com/documentation/den0127/0100/Overview).

> “Confidential Computing plays a key role in transforming security and protecting data wherever computing happens,” said Matteo Carlini, director, software technology management at Arm and chairman of the board for Trusted Firmware. “By having an open implementation of RMM as part of the Trusted Firmware community, we hope to drive greater ecosystem collaboration around the enablement of Realms to provide confidential computing, and empower developers with best in class security features.”

The TF-RMM open-source release is part of the Trusted Firmware.org community project and is comprised of:

- [Open-source code](https://git.trustedfirmware.org/TF-RMM/tf-rmm.git/) released under BSD 3-clause license
- A [GitHub mirror](https://github.com/TF-RMM/tf-rmm)
- A new dedicated [mailing list](https://lists.trustedfirmware.org/mailman3/lists/tf-rmm.lists.trustedfirmware.org/)
- A [new section](/projects/tf-rmm/) on the Trusted Firmware.org website

All contributions are accepted under DCO and BSD 3-Clause.

TF-RMM will be used in conjunction with the already upstream RME-enabled Trusted Firmware-A and patches supporting the RMM interfaces in the Linux Kernel and KVM, available in the coming months.

Members of Trusted Firmware, the open governance community project hosted by Linaro Community Projects Division, to date include Arm, Cypress, Futurewei, Google, Linaro, NXM Labs, NXP® Semiconductors N.V., Renesas Electronics Corporation and ST Microelectronics.

### About the Linaro Community Projects Division

The Linaro Community Projects division was formed to allow Linaro-hosted open source projects to become open-governance and make them more accessible. The division currently hosts the following projects: Trusted Firmware, MCUboot and OpenAMP. To find out more, go to [https://www.linaro.org/community-projects/](https://www.linaro.org/community-projects/)
