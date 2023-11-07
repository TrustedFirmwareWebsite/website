---
title: Trusted Firmware - Open Source Secure Software
description: >
  Arm Trusted Firmware provides a reference implementation of secure software for Armv8-A, Armv9-A and Armv8-M. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications.
layout: ../../layouts/Flow.astro
slug: ""
hero:
  style: text-center uppercase
  title: Open Source Secure Software
  background_image: "../../assets/images/TF_Banner_image.jpg"
  inner_image:
    src: "../../assets/images/TrustedFirmware-Logo_vertical-white.png"
    alt: Trusted Firmware Logo
flow:
  - row: container_row
    sections:
      - component: text
        style: text-center
        text_content:
          text: |-
            **Trusted Firmware** provides a reference implementation of secure software for **Armv8-A**, **Armv9-A** and **Armv8-M**.
            It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications.

            The code on this website is the preferred implementation of Arm specifications, allowing quick and easy
            porting to modern chips and platforms. This forms the foundations of a **Trusted Execution Environment (TEE)** on application processors, or the **Secure Processing Environment (SPE)** of microcontrollers.
  - row: container_row
    style: bg-light
    sections:
      - component: title
        style: text-center
        title_content:
          style: font-bold  text-4xl
          size: h3
          text: Trusted Firmware Projects
      - component: tf_projects
        container_class: basis-1/2 sm:basis-1/3 lg:basis-1/5 xl:basis-1/6
        section_class: px-10 mb-8

  - row: container_row
    style: #
    sections:
      - component: title
        style: text-center font-bold
        title_content:
          style: font-bold text-4xl
          size: h3
          text: Our Members
      - component: members
      - component: project_partners
      - component: buttons
        style: text-center
        buttons_content:
          - title: General Enquiries
            url: mailto:enquiries@trustedfirmware.org
            style: bg-customgreen hover:bg-green-700 text-white
---
