---
author: trusted.firmware
title: "Trusted Firmware-M v1.0-Beta: Enabling PSA Certification"
date: 2019-03-11 08:00:00
categories:
- Blog
layout: post
image:
  path: /assets/images/trusted-firmware.jpg
  name: trusted-firmware.jpg
  thumb: TrustedFirmware-Logo_icon.png
  featured: true
---
Trusted Firmware-M (TF-M) [was launched in March 2018](https://community.arm.com/iot/b/blog/posts/the-next-step-for-psa-and-a-secure-iot-future), as the open source reference implementation of [Arm Platform Security Architecture](https://www.arm.com/why-arm/architecture/platform-security-architecture/psa-resources) (PSA). As TF-M is heading towards its first anniversary, the project has achieved a significant milestone - v1.0-Beta enabling silicon platforms and Real Time Operating Systems (RTOSes) using TF-M to achieve PSA Certified™ Level 1 Security and Functional API certification under the newly launched [PSA Certified programme](https://psacertified.org/).

TF-M [v1.0-Beta](https://git.trustedfirmware.org/trusted-firmware-m.git/tag/?h=v1.0-beta) tag made on 18th February provides the following functionality: 

1. Secure Boot ensuring integrity of Secure and Non-Secure images. 
2. PSA Level 1 Isolation separating Secure Processing Environment (SPE) from Non-Secure Processing Environment (NSPE).
3. Secure Storage protecting the integrity and confidentiality of the sensitive assets in the system.
4. Cryptographic Service providing cryptographic function to applications. 
5. Attestation Service providing a token formatted according to the [IETF Entity Attestation Token](https://tools.ietf.org/html/draft-mandyam-eat-00) (EAT) consisting of a series of claims enabling a relying party to determine the exact implementation of the PSA Root of Trust (PSA RoT) and its security state.

As shown in the TF-M Diagram below, Secure Storage, Crypto and Attestation Services can be availed through a set of [PSA Developer APIs](https://pages.arm.com/PSA-APIs?_ga=2.20089022.766593894.1551711867-677364771.1536847751). This makes it easier for applications to make use of secure services across different PSA/TF-M enabled platforms using these PSA Developer APIs.
![TF-M](/assets/images/blog/tf.png)

Arm’s IoT Reference Platform – [Musca-B1](https://developer.arm.com/products/system-design/development-boards/iot-test-chips-and-boards/musca-b-test-chip-board) has got PSA Functional API certification and PSA Level 1 Security certification by using TF-M v1.0-Beta as the PSA Root Of Trust (RoT). TF-M and Musca-B1 were awarded the PSA Certified Trophy.

![PSA Trophy](/assets/images/blog/cert.jpg)

Obtaining PSA Functional API Certification involved running the [PSA Developer API Test Suite](https://github.com/ARM-software/psa-arch-tests/tree/ew_beta0/api-tests/dev_apis) on MuscaB1 against TF-M v1.0-Beta tag and passing all the secure storage, crypto and Attestation tests. PSA Level1 Certification involved answering the [PSA Level 1 Questionnaire](https://psacertified.org/wp-content/uploads/2019/02/JSADEN001-PSA_Certified_Level_1-1.0Web.pdf) and submitting to one of the PSA Joint Stakeholder Agreement certification labs.

![PSA Test Suite run against PSA Dev. APIs in TF-M](/assets/images/blog/tf_test.png)

Shebu Varghese Kuriakose
