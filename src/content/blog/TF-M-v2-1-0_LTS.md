---
author: shebu-kuriakose
title: Trusted Firmware-M’s First Long Term Support (LTS) Release v2.1.0
date: 2024-05-22 10:00:00

image: "../../assets/images/blog/musca_tf_crop_1500x1500.png"
---

# **Trusted Firmware-M’s First Long Term Support (LTS) Release: v2.1.0**

## Introduction

Trusted Firmware-M (TF-M) [v2.1.0](https://git.trustedfirmware.org/TF-M/trusted-firmware-m.git/+/refs/tags/TF-Mv2.1.0) was released on 13th May 2024. This is TF-M projects’ first ever Long Term Support (LTS) release that will be maintained for the next 3 years with bug fixes and security fixes. The release will be PSA L2 certified soon allowing chips PSA certified using the LTS branch to reuse the PSA delta certification of bug fixes and security fixes in the branch. 

From now on, the project is moving to releases every 9 months. Every other release will be a Long Term Support (LTS) release maintained for 3 years. The updated release cadence and LTS update process can be found [here](https://trustedfirmware-m.readthedocs.io/en/latest/releases/release_process.html).

This release includes PSA Crypto service using PSA Crypto header same as Mbed TLS 3.6.0 and initial support for Hybrid platforms. Below are some of the highlights of the release. 

## Release Highlights

•	**PSA Crypto Header alignment:** TF-M aligns the Crypto service to the same PSA Crypto headers used by the Mbed TLS 3.6.0. This avoids any conflict of PSA Crypto Headers between Mbed TLS and TF-M when used within the same integration project environments.

•	**Hybrid platform support:** Hybrid platforms are either A-profile + M-profile or M-profile + M-profile platforms with TF-M running on the Secure side of the M-profile core providing the Root of Trust (RoT). The on-core and off-core clients need to avail TF-M secure runtime services. Initial support for these clients accessing the services is available in the release. Further development to enable different user scenarios is under development. 

•	**BL2 Updates:** TF-M uses MCUboot  as its 2nd stage bootloader (BL2). BL2 is now enabled with a lower memory footprint thin PSA Crypto core layer. ECDSA signature verification is enabled as an option for image verification. Earlier only RSA signature validation was available. ECDSA is enabled via. the small footprint ECC implementation, p256-m. Builtin keys is supported for ECDSA signature verification.

•	The release integrates the latest Mbed TLS LTS release, 3.6.0 and MCUboot release v2.0.0 

•	[Alcor](https://trustedfirmware-m.readthedocs.io/en/latest/platform/armchina/mps3/alcor/README.html) and [Corstone-315](https://trustedfirmware-m.readthedocs.io/en/latest/platform/arm/mps4/corstone315/README.html) are the new platform available in the release. 


The project continuously tracks key KPIs in various modes using [squad dashboard](https://qa-reports.linaro.org/tf/tf-m/metrics). In addition to the memory usage, the cycle counts of PSA FF-M API calls across the TrustZone boundary in SFN and IPC modes under the three PSA isolation levels are also included. 

More details of the release can be found [here](https://trustedfirmware-m.readthedocs.io/en/latest/releases/2.1.0.html).  Testing of the release has been done on Trustedfirmware.org [Open CI](https://ci.trustedfirmware.org/). 


## About TrustedFirmware.org

TrustedFirmware.org is an open source project implementing foundational software components for creating secure devices. Trusted Firmware provides a reference implementation of secure software for processors implementing both the A-Profile and M-Profile Arm architecture. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. Trusted Firmware code is the preferred implementation of Arm specifications, allowing quick and easy porting to modern chips and platforms. This forms the foundations of a Trusted Execution Environment (TEE) on application processors, or the Secure Processing Environment (SPE) of microcontrollers.

[TrustedFirmware.org](https://www.trustedfirmware.org) is member driven and member funded.

To learn more about membership and its benefits, please see the [following page](/about) or send a request for more information to enquiries@trustedfirmware.org.
