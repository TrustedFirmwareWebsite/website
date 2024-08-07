---
author: shebu-kuriakose
title: Trusted Firmware-M v1.6.0 Release
date: 2022-04-28 10:00:00

image: "../../assets/images/blog/musca_tf_crop_1500x1500.png"
---

# **Trusted Firmware-M: v1.6.0 Release**

## Introduction

Trusted Firmware-M (TF-M) [v1.6.0](https://git.trustedfirmware.org/TF-M/trusted-firmware-m.git/tag/?h=TF-Mv1.6.0) was released on 28th April 2022. Support for all PSA Cryptography 1.0 APIs, complete alignment with PSA Firmware Framework-M v1.1 extensions and restructured documentation are some of the main additions since TF-M v1.5.0 release.

## Release Highlights

Below are the main additions in TF-Mv1.6.0:

- TF-M Crypto Service has been updated to include Mbed TLS3.1 which supports all the required PSA Crypto 1.0 to fully pass the PSA Crypto compliance test suite. Non-secure applications, libraries and TF-M secure partitions can perform all crypto operations supported by the PSA Crypto 1.0 APIs and Mbed TLS.
- TF-M started aligning with the [Firmware Framework for M v1.1](https://developer.arm.com/documentation/aes0039/latest) (FF-M v1.1) since TF-M v1.4. FF-M v1.1 includes several enhancements targeting smaller and simpler architectures. TF-M v1.6 enables all the enhancements including support for Secure Function (SFN) in PSA Services. Profile Small supports SFN as an optional mode while library mode remains the default mode. Further memory optimization of SFN mode is underway.
- There has been a continuous effort to improve documentation in the previous releases. The documentation including the design documents have been rearranged and streamlined to make it easier for users to find the right content easily. See latest documentation [here](https://tf-m-user-guide.trustedfirmware.org/). The documentation improvement work will continue.
- **[mcuboot](https://www.mcuboot.com/)** used by the project as the 2nd stage bootloader was updated to the latest release - v1.9. The release include support for devices with a write alignment larger than 8.
- A new driver interface has been implemented for Cryptocell-312 as specified in [PSA Cryptoprocessor Driver interface](https://github.com/Mbed-TLS/mbedtls/blob/development/docs/proposed/psa-driver-interface.md). The Crypto service can access Cryptocell-312 via. this new driver interface.
- Build outputs have been simplified and made configurable.
- Floating Point (FP) support was earlier enabled for Secure side on Arm v8-M platforms. The support has been extended to include use of FP in Secure and Non-Secure and support Arm v8.1-M Mainline platforms as well.
- Corstone SSE-300 with Ethos-U55 example Subsystem for MPS3 (AN552) is the newly added platform. This adds to already supported platforms in the project.
- IAR compiler support extended to Cortex-M55 based AN547 and AN552 platforms.

More details can be found [here](https://git.trustedfirmware.org/TF-M/trusted-firmware-m.git/tree/docs/releases/1.6.0.rst). Testing of the release has been done on Trustedfirmware.org [Open CI](https://ci.trustedfirmware.org/). The next release will be in November 2022. Any security fixes prior to the next release will be made available as patch releases in v1.6.x release branch.
