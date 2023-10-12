---
author: trusted-firmware
title: Trusted Firmware at OSFC19
date: 2019-09-23 10:00:00

image: "../../assets/images/blog/OSFC19.jpg"
---

Two weeks ago, firmware enthusiasts from across the world gathered in the San Francisco Bay Area for the 2019 [Open source Firmware Conference](https://osfc.io/) (OSFC). The conference, in its second year, brought together open source firmware engineers, managers, contributors and enthusiasts who share a common interest in the ecosystem. Hosted by Google & Facebook, the week saw a range of discussions surrounding different firmware projects across the ecosystem including coreboot and linuxboot. The depth of conversation and content allowed a rich flow of ideas and a means to strengthen the open source firmware ecosystem. The event allowed an opportunity to understand the new developments, challenges and innovations in open source firmware. The depth of conversation and content allowed a rich flow of ideas and a means to strengthen the firmware open source ecosystem. The event allowed an opportunity to understand the new developments, challenges and innovations in open source firmware.

Among the talks and presentation was one from Arm’s Director of Technology Management and chairman of the Board for the Trusted Firmware project, Matteo Carlini. His presentation explored TrustedFirmware.org and its benefits for all in the open source firmware ecosystem. His engaging presentation explored the secure world software architecture and the evolution of Trusted Firmware from an Arm controlled project to a collaborative, open governance project.

With an ever-increasingly connected world, the security of devices has increased in importance and has become a challenge across all market segments. Trusted Firmware provides a solution to many problems surrounding firmware security, including the need for secure architecture and robust solutions to minimise security risks and costs for device security – something affecting all markets. Trusted Firmware provides a solution to firmware security, providing a standard and easily portable reference implementation, reducing the complexity of firmware security system.

Trusted Firmware is not a new project by Arm, but rather an evolution of the former Arm Trusted Firmware, a reference implementation of the highest Exception Level (EL3) firmware for Arm® TrustZone® technology. The Arm®TrustZone® technology, as well as the concepts of the secure and non-secure world, were introduced from 2003, allowing partners to create their own secure monitor software and services on Armv6 and Armv7 - based systems. In 2013, Arm Trusted Firmware was born, allowing a reference implementation of secure world software for processors based on the A profile architecture, which included a secure monitor working at EL3. This was adopted across different industries and due to its success, and the demand for standardisation, in March 2018, the Trusted Firmware-M project was created, providing a reference implementation targeted at M-profile based processors.

The TrustedFirmware.org project was then created in October 2018 with 6 founding members. It provided a common place for A and M open source firmware implementations, encouraging collaboration and ownership, with the additional benefits of a faster time to market and reduced production cost. TrustedFirmware.org encourages collaboration across different market segments in order to tackle problems in firmware. By taking shared ownership of the foundation software, partners help to steer the future of secure firmware implementations.

Trusted Firmware provides a collaborative environment for open source firmware with implementations of many Arm specifications and features, including but not limited to:

- SMC Calling Convention (SMCCC)
- Trusted Board Boot Requirements (TBBR)
- Power State Coordination Interface (PSCI)
- Performance Measurement Framework (PMF)
- EL3 payload boot flow

Secure partition support for the upcoming Secure Partition Client Interface (part of Arm PSA Firmware Framework)
Trusted Firmware is truly open source, with contributions accepted from everyone due to its permissive BSD license, fostering a collaborative environment and allowing everyone to have an opportunity to sculpt the ecosystem. The benefits for collaborators are vast. It includes:

- Security by scale, allowing security and product issues to be fixed and deployed across all Arm products across all segments
- The ability to share maintenance and reduce the total cost of ownership
- Control of the upstream whilst allowing collaborative efforts to improve the final product
- A faster time to market, reducing overall cost for internal dependencies.

Project members have added benefits, including the ability to have their devices part of the board farm which allows new changes made in the repo to be tested on their platforms as part of being on the open ecosystem. This allows projects to be maintained and tested with the ability to see the results of the compilations and tests, which reduces in-house testing and maintenance time. Members also get the chance to participate to the project strategic and technical direction, by having a seat on the project Board and TSC.

Matteo’s presentation was well received, dispelling common misconceptions on Trusted Firmware and providing a deeper understanding of its benefits for the community. Attendees responded favourably to the presentation and TrustedFimware.org, with leaflets and stickers flying off the tables like hot cakes! It’s clear that there is a strong desire and passion for a more collaborative firmware environment, and companies across all markets are starting to take notice of this. With almost 50% of commits now coming from partners, over 30 partner platforms supported upstream and over 16 different vendors, collaboration is at the forefront of this project, with its efforts expected to increase by 600% by 2019. By reducing the barriers to collaborative development whilst still fostering healthy competition in the market, Trusted Firmware empowers developers to innovate, share and collaborate on ideas that shape the future of Firmware on Arm devices. TrustedFirmware.org hopes to provide an open source reference implementation, implementing standard interfaces and secure partitions in order to make unique standard open source firmware across all Arm devices a reality.

![OSFC19](/assets/images/blog/OSFC19.jpg)

Author: Augustina Adjei
