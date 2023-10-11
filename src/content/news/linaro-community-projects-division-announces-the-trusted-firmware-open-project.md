---
author: trusted-firmware
title: Linaro Community Projects Division announces the Trusted Firmware open project
date: 2018-10-16 08:00:00
categories:
  - News
layout: "../../layouts/BlogLayout.astro"
image: "../../assets/images/trusted-firmware.jpg"
---

Linaro Community Projects Division, the division of Linaro managing open source community projects with open governance, today announced that Trusted Firmware is available as a Linaro Community Projects Division open project. Trusted Firmware provides a reference implementation of Secure World software for Armv7, Armv8-A and Armv8-M architectures. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. This forms the foundations of a Trusted Execution Environment (TEE) on application processors, or the Secure Processing Environment (SPE) on microcontrollers.

The process of moving the project to open governance included the launch of Trusted Firmware-M at Linaro Connect HKG18 earlier this year in March. The Trusted Firmware project is designed to reduce porting and integration work across the ecosystem by creating reusable reference implementations for SoC and Trusted OS developers at [trustedfirmware.org](http://trustedfirmware.org/). Membership of the Trusted Firmware project is equally open to Linaro members and non-members. The governance will now be overseen by a board of member representatives. This board initially consists of Arm, Texas Instruments, Google LLC, Cypress Semiconductor and Linaro. Data I/O joins the project as a General Member.

"Arm based systems rely on a number of standards, and open source reference implementations make adhering to these standards much easier for the ecosystem. We're very pleased that Arm is releasing Trusted Firmware as an open source project with open governance," said Rob Booth, Linaro COO and leading the Linaro Community Project Division. "We look forward to working with Arm and a broadening range of contributors who can influence the integration, interfaces, IP and software framework support for the codebase".

“As the number of connected devices continues to increase, enabling engineers to implement security as quickly and simply as possible is essential,” said Mark Hambleton, vice president open source software, Arm. “Moving Trusted Firmware-A to [trustedfirmware.org](https://trustedfirmware.org/) and opening up the governance of the project is the right next step in the ongoing evolution of the project as it enables partners to collaborate on a code base that’s common to a vast array of Arm-based systems across all market segments.”

“The Trusted Firmware project promises to provide an important software foundation to further security development for both Cortex-A and Cortex-M/R processors. By establishing a standard software baseline, this project is taking an important step forward in advancing the development of secure embedded applications.” said Bill Mills, open source architect, Texas Instruments.

"Security is a core component of Cypress’ IoT solutions. By joining the Trusted Firmware Project, our goal is to participate in creating an ecosystem for the connected IoT devices and give our customers the solid foundations to bring secure products to market quickly and efficiently" said John Rayfield, VP Software Engineering, Cypress Semiconductor Corporation.

“As the Internet of Things (IoT) market grows and attacks become increasingly prevalent, OEMs of all sizes must have a cost-effective and integrated method to enable hardware-based security from product design through manufacturing,” said Rajeev Gulati, CTO of Data I/O Corporation. “This is one of the reasons Data I/O was an early supporter of Arm’s Platform Security Architecture (PSA).  Building on PSA, the Trusted Firmware project will help guide the overall security community towards a common reference code base and implementation best practices. Data I/O’s SentriX™ Secure Provisioning System is built specifically to provision Secure MCUs and Secure Elements. Because of this, Data I/O is in a unique position to ensure that decisions made on secure firmware design can be readily transferred to volume production environments.”

The Trusted Firmware project is provided under a BSD-3-Clause license and contributions are accepted under the term of Developer Certificate of Origin.

Trusted Firmware-A (TF-A) supports Armv7 and Armv8-A systems, including a Secure Monitor executing at Exception Level 3 (EL3). It implements various Arm interface standards including the Power State Coordination Interface (PSCI), Trusted Board Boot Requirements (TBBR, Arm DEN0006C-1), SMC Calling Convention, and System Control and Management Interface.

Trusted Firmware-M (TF-M) provides a reference implementation of the Arm [Platform Security Architecture](https://pages.arm.com/psa-resources.html) (PSA) for Arm Cortex-M processors and leverages Arm’s TrustZone technology (https://static.docs.arm.com/100690/0100/armv8_m_architecture_trustzone_technology_100690_0100_00_en.pdf) on Arm v8-M cores. TF-M is being built as a set of highly configurable set of software components suitable for constrained systems. It consists of secure boot and a set of secure runtime services including: Secure Storage, Cryptography, Audit Logs and Provisioning that can be used by Applications.

### About Linaro Community Projects Division

Linaro Community Projects Division is the division of Linaro managing open source community projects with open governance. Linaro is leading collaboration on open source development in the Arm ecosystem. The company has over 300 engineers working on consolidating and optimizing open source software for the Arm architecture, including developer tools, the Linux kernel, Arm power management, and other software infrastructure. Linaro is distribution neutral: it wants to provide the best software foundations to everyone by working upstream, and to reduce non-differentiating and costly low level fragmentation. The effectiveness of the Linaro approach has been demonstrated by Linaro’s growing membership, and by Linaro consistently being listed as one of the top five company contributors, worldwide, to Linux kernels since 3.10. To ensure commercial quality software, Linaro’s work includes comprehensive test and validation on member hardware platforms. The full scope of Linaro engineering work is open to all online. To find out more, please visit [http://www.linaro.org](http://www.linaro.org/) and [http://www.96Boards.org](http://www.96boards.org/).
