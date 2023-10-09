---
layout: ../../layouts/Flow.astro
title: About
slug: /about
jumbotron:
  slider:
    title: About
    inner_class: text-white
    description: ""
    image: "@assets/images/TF_Banner_image.jpg"
flow:
  - row: main_content_row
    sections:
      - component: md_content
---

### Why choose Trusted Firmware?

Trusted Firmware provides a reference implementation of secure software for processors implementing both the [A-Profile and M-Profile](https://developer.arm.com/architectures/learn-the-architecture) Arm architecture. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. The code on this website is the preferred implementation of Arm specifications, allowing quick and easy porting to modern chips and platforms. This forms the foundations of a Trusted Execution Environment (TEE) on application processors, or the Secure Processing Environment (SPE) of microcontrollers.

#### Availability of Trusted Firmware

**Support for A-Profile Arm processors / Trusted Firmware-A (TF-A)**

- Support for A-Profile Arm processors (Cortex and Neoverse) is well established and currently available as open source at https://git.trustedfirmware.org/TF-A/trusted-firmware-a.git/ . Functionality focuses on trusted boot and a small trusted runtime (EL3 code).
- Support for the Armv8.4 Secure EL2 architecture extension is also available as open source at https://git.trustedfirmware.org/hafnium/hafnium.git/

**Support for M-Profile Arm processors / Trusted Firmware-M (TF-M)**

- Trusted Firmware-M (TF-M) provides a reference implementation of the platform security architecture aligning with [PSA Certified](https://www.psacertified.org/) requirements for Arm Cortex-M processors and leverages Arm TrustZone technology on Armv8-M cores (Cortex-M23 and Cortex-M33)
- TF-M provides Secure boot and a set of run time secure services such as Crypto, Storage and Attestation.

**If you want to get involved, join the notification mailing list or contact enquiries@TrustedFirmware.org for more information.**

Additional information in regards to membership and joining can be found on the [about-join](https://www.trustedfirmware.org/join/) page of this website.
For additional information on other topics such as current roadmaps & plans, joining maillists, and more, please see the [FAQ page here](https://www.trustedfirmware.org/faq/)
