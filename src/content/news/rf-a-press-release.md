---
author: trusted-firmware
title: Rusted Firmware-A (RF-A) - A Rust-Based Reimagination of Trusted Firmware-A for the Next Generation of Secure Computing
date: 2025-08-19 08:00:00
image: "../../assets/images/trusted-firmware.jpg"
---

# Rusted Firmware-A: A Rust-Based Reimagination of Trusted Firmware-A for the Next Generation of Secure Computing

__[Cambridge, UK Tuesday, August 19, 2025]__ — The Trusted Firmware organization, today announced the release of __Rusted Firmware-A (RF-A) v0.1__, a groundbreaking open-source prototype that reimagines Trusted Firmware-A (TF-A) through the adoption of the Rust programming language. Rusted Firmware-A has been developed through a close collaboration between Arm and Google, both Diamond members of the Trusted Firmware community. Architected from the ground up, Rusted Firmware-A is designed specifically for the latest A-class Arm® processors, leveraging modern hardware capabilities and a security-first approach to provide a robust, maintainable, and future-ready firmware foundation.
Rusted Firmware-A is not an incremental update, it's a __redesign__. Free from legacy constraints and engineered in Rust, it offers strong memory safety, enhanced reliability, and modern modularity. Its development is the culmination of years of industry learnings, community insights, and deep collaboration between the world’s leading software and silicon providers.


>_“Secure firmware remains vital to building trustworthy compute systems, especially as compute complexity grows., and Rusted Firmware-A brings with modern, memory-safe development practices to the development stack and improves resilience to security threats. Our work with Google reflects a shared commitment to build a more secure, reliable, and maintainable open-source firmware through ongoing contributions to the Trusted Firmware communityfirmware through the Trusted Firmware community.”_
>
>__-Bharath Subramanian,__<br>
>Software Technology Manager, Arm and <br> 
>Co-Chair, Trusted Firmware Board

This clean slate design allows us to deliver a firmware framework aligned with the needs of modern silicon, while enabling early and open collaboration across the ecosystem. Our roadmap is focused on supporting the latest architecture, processor features, security, and providing an easy migration path from C-based TF-A all while maintaining full support for existing TF-A Long Term Support (LTS) commitments that offer 7 years support on LTS releases.
Rusted Firmware-A is released under the permissive BSD-3-Clause open-source license, with active development hosted publicly on trustedfirmware.org. The project will follow a phased roadmap, providing a clear migration path for partners and product teams as it matures. The initial prototype (v0.1) is available and has been developed and tested on virtual platforms such as Arm Fixed Virtual Platforms and QEMU. Early development is being led by Arm and Google, with community contributions welcomed. As the project evolves, the focus will shift toward broader community engagement, structured release cycles, and scalable contribution models.
As part of the RF-A effort, we have also identified a set of reusable Rust modules that are applicable beyond the scope of RF-A and valuable to the wider firmware development ecosystem on Arm-based devices. These modules published as crates on [crates.io](https://crates.io/), the Rust community’s official package registry include reference implementations of key Arm peripherals (such as the Arm PL011 UART and Arm GIC) and specifications (including Arm PSCI and Arm FF-A). Through these efforts, we aim to help consolidate the naturally modular Rust ecosystem by offering trusted, high-quality building blocks. We expect this collection of crates to grow over time.

>_“Rusted Firmware-A demonstrates Arm and Google's commitment to secure-by-design software, going beyond reactive security measures to a proactive approach that prevents vulnerabilities at their source. We're incredibly excited about the prospect of using Rusted Firmware-A as the foundation of future generations of secure computing products, driving enhanced reliability and trustworthiness across our product ecosystem.”_
>
>__-Dave Kleidermacher,__<br>
>Vice President of Engineering,<br> 
>Android Security & Privacy at Google.

With the introduction of Rusted Firmware-A, Trusted Firmware organization, Arm and Google invite the global developer community to participate, contribute, and help define the next chapter of secure, efficient firmware development for Arm-based platforms.

## About TrustedFirmware.org

TrustedFirmware.org is an open source project implementing foundational software components for creating secure devices. Trusted Firmware provides a reference implementation of secure software for processors implementing both the A-Profile and M-Profile Arm architecture. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. Trusted Firmware code is the preferred implementation of Arm specifications, allowing quick and easy porting to modern chips and platforms. This forms the foundations of a Trusted Execution Environment (TEE) on application processors, or the Secure Processing Environment (SPE) of microcontrollers.

[TrustedFirmware.org](https://www.trustedfirmware.org) is member driven and member funded.

To learn more about membership and its benefits, please see the [following page](/about) or send a request for more information to enquiries@trustedfirmware.org.
