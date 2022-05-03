---
title: Trusted Firmware - Open Source Secure Software
description: >
  Arm Trusted Firmware provides a reference implementation of secure software for Armv8-A, Armv9-A and Armv8-M. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications.
layout: flow
permalink: /
jumbotron:
  inner_class: text-center text-uppercase
  slider:
    - darken: true
      title: Open Source Secure Software
      image: /assets/images/content/TF_Banner_image.jpg
      inner-image: /assets/images/content/TrustedFirmware-Logo_vertical-white.png
      inner_class: text-center text-uppercase
flow:
  - row: container_row
    sections:
      - format: text
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
      - format: title
        style: text-center
        title_content:
          style: font-weight-bold
          size: h3
          text: Available Trusted Firmware Projects
      - format: custom_include
        source: tf_projects.html
  - row: container_row
    style: #
    sections:
      - format: title
        style: text-center font-weight-bold
        title_content:
          style: font-weight-bold
          size: h3
          text: Our Members
      - format: custom_include
        source: members.html
      - format: title
        style: text-center font-weight-bold
        title_content:
          style: font-weight-bold
          size: h3
          text: Project Partners
      - format: custom_include
        source: project_partners.html
      - format: buttons
        style: text-center
        buttons_content:
          - title: General Enquiries
            url: mailto:enquiries@trustedfirmware.org
            style: btn btn-green text-uppercase
---
