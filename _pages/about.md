---
layout: flow
title: About
permalink: /about/
jumbotron:
  title: About
  inner_class: text-white
  description: ""
  image: /assets/images/content/TF_Banner_image.jpg
flow:
  - row: main_content_row
---

### Why choose Trusted Firmware?

Trusted Firmware provides a reference implementation of secure world software for processors implementing both the [A-Profile and M-Profile](https://developer.arm.com/products/architecture) Arm architecture. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. The code on this website is the preferred implementation of Arm specifications, allowing quick and easy porting to modern chips and platforms. This forms the foundations of a Trusted Execution Environment (TEE) on application processors, or the Secure Processing Environment (SPE) of microcontrollers.

#### Availability of Trusted Firmware

**Support for A-Profile Arm processors / Trusted Firmware-A (TF-A)**

- Support for A-Profile Arm processors (Cortex and Neoverse) is well established and currently available as open source at https://git.trustedfirmware.org/TF-A/trusted-firmware-a.git/ . Functionality focuses on trusted boot and a small trusted runtime (EL3 code).
- Support for the Armv8.4 Secure EL2 architecture extension is also available as open source at https://git.trustedfirmware.org/hafnium/hafnium.git/

**Support for M-Profile Arm processors / Trusted Firmware-M (TF-M)**

- Trusted Firmware-M (TF-M) provides a reference implementation of the platform security architecture aligning with [PSA Certified](https://www.psacertified.org/) requirements for Arm Cortex-M processors and leverages Arm TrustZone technology on Armv8-M cores (Cortex-M23 and Cortex-M33)
- TF-M provides Secure boot and a set of run time secure services such as Crypto, Storage and Attestation.

**If you want to get involved, join the notification mailing list or contact enquiries@TrustedFirmware.org for more information.**

#### Trusted Firmware is an open governance project

- Trusted Firmware project is an open governance community project hosted by Linaro
- Membership of the Trusted Firmware project is open to all
- Governance is overseen by a board of member representatives
- Details of the Governance are in the [Project Charter](/docs/Trusted_Firmware_Charter_v_2021-03-19.pdf)
- A sample Membership Agreement, Membership levels and Fees can be found [here](/docs/"Trusted Firmware Membership Agreement and Fee Table_v_2021_03_17.pdf"
