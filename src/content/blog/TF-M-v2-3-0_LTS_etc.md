---
author: shebu-kuriakose
title: Trusted Firmware-M v2.3.0, TF-PSA-Crypto 1.1.0 & Mbed TLS 4.1.0 LTS Releases
date: 2026-05-13 09:00:00
image: "../../assets/images/blog/mp1_avenger_tf_crop_1500x1500.png"
---

### Introduction
The Trusted Firmware project has released Trusted Firmware-M (TF-M) [v2.3.0](https://git.trustedfirmware.org/plugins/gitiles/TF-M/trusted-firmware-m.git/+/refs/tags/TF-Mv2.3.0), TF-PSA-Crypto [1.1.0](https://github.com/Mbed-TLS/TF-PSA-Crypto/tree/tf-psa-crypto-1.1), and Mbed TLS [4.1.0](https://github.com/Mbed-TLS/mbedtls/tree/mbedtls-4.1.0). 

These are Long Term Stable (LTS) releases that will be maintained for the next 3 years until **March 2029**. Notably, TF-PSA-Crypto 1.1.0 marks the first-ever LTS release for the TF-PSA-Crypto project.

### Release Highlights

* **Crypto API Transition**: This TF-M release includes the move from using Mbed Crypto in Mbed TLS to TF-PSA-Crypto for access to cryptographic algorithms via PSA Crypto APIs.
* **Toolchain Support**: TF-M now supports the new Arm Toolchain for Embedded.
* **GPT Library**: TF-M has added support for the GPT library.
* **Platform Expansion**: Support has been added for new Nordic, NXP, and ST platforms.
* **SHAKE Implementation**: TF-PSA-Crypto now implements SHAKE128 and SHAKE256 (`PSA_ALG_SHAKE128`, `PSA_ALG_SHAKE256`).
* **Mbed TLS Dependencies**: Mbed TLS 4.1.0 includes TF-PSA-Crypto 1.1.0 (as a subtree in the tarball and a submodule in git) and can only be built with this specific included version of TF-PSA-Crypto.

The release notes provide a full list of features and fixes included in this release for [TF-M](https://trustedfirmware-m.readthedocs.io/en/latest/releases/2.3.0.html), [Mbed TLS](https://github.com/Mbed-TLS/mbedtls/releases), and [TF-PSA-Crypto](https://github.com/Mbed-TLS/TF-PSA-Crypto/releases/tag/tf-psa-crypto-1.1.0).

## About TrustedFirmware.org

TrustedFirmware.org is an open source project implementing foundational software components for creating secure devices. Trusted Firmware provides a reference implementation of secure software for processors implementing both the A-Profile and M-Profile Arm architecture. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. Trusted Firmware code is the preferred implementation of Arm specifications, allowing quick and easy porting to modern chips and platforms. This forms the foundations of a Trusted Execution Environment (TEE) on application processors, or the Secure Processing Environment (SPE) of microcontrollers.

[TrustedFirmware.org](https://www.trustedfirmware.org) is member driven and member funded.

To learn more about membership and its benefits, please see the [following page](/about) or send a request for more information to enquiries@trustedfirmware.org.
