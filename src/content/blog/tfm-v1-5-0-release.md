---
author: shebu-kuriakose
title: Trusted Firmware-M v1.5.0 Release
date: 2021-11-30 10:00:00

image: "../../assets/images/blog/musca_tf_crop_1500x1500.png"
---

# **Trusted Firmware-M: v1.5.0 Release**

## Introduction

Trusted Firmware-M (TF-M) [v1.5.0](https://git.trustedfirmware.org/TF-M/trusted-firmware-m.git/tag/?h=TF-Mv1.5.0) was released on 30th November 2021. The release includes improved runtime performance, Floating Point Unit (FPU) support, integration of mcuboot v1.8, further enablement of PSA Firmware Framework-M v1.1 specification, and further enablement of new platforms.

## Highlights

Here are some of the main additions in TF-Mv1.5.0:

- The project has been focussed on profiling and improving the run time performance – e.g. PSA API call latency from Non-Secure Processing Environment (NSPE) to TF-M (Secure Processing Environment) and interrupt latency. The release includes first set of changes for the SPM to run in thread mode when handling PSA API calls in isolation level1 and IPC mode. This has given significant performance improvement in non-secure interrupt latency and PSA API call latency while using Firmware Framework-M APIs. Further details on the improvements will be shared in upcoming TF-M open [Tech Forums](/meetings/tf-m-technical-forum/)

- **Floating Point Unit (FPU)** initial support has been enabled. This allows TF-M and its Secure Partitions to make use of the FPU. Refer to the [user guide](https://tf-m-user-guide.trustedfirmware.org/integration_guide/tfm_fpu_support.html) for more information. Non Secure Processing Environment (NSPE) is not allowed to access the FPU when FP support is enabled in Secure Processing Environment (SPE). The limitation will be removed prior to the next release.

- [mcuboot](https://www.mcuboot.com/), used by the project as the 2nd stage bootloader, was updated to v1.8. This version adds support for AES256 image encryption, multi-image boot etc. which can be used by TF-M platforms.

- Initial set of changes to align with [Firmware Framework for M v1.1](https://developer.arm.com/documentation/aes0039/latest) was included in previous releases. Protected Storage, ITS, Crypto and Attestation services have been updated as stateless services supporting static handle. MM-IOVEC secure partition API for isolation level 1 has been added. Infrastructure support for Secure Function (SFN) mode is enabled. The PSA Secure Partitions supporting SFN is expected to be part of the next release.

- B-U585I-IOT02A discovery kit with STM32U5 microcontroller and two Corstone platforms from Arm are the newly added platforms. This adds to the [already supported platforms](https://tf-m-user-guide.trustedfirmware.org/platform/index.html) in the project.

More details can be found [here](https://tf-m-user-guide.trustedfirmware.org/releases/1.5.0.html). Testing of the release has been done on Trustedfirmware.org's [Open CI infrastructure](https://ci.trustedfirmware.org/). A new [psa-adac repository](https://git.trustedfirmware.org/shared/psa-adac.git/) in the trustefirmware.org project now provides the target side reference implementation of [Authenticated Debug Access Control Specification](https://developer.arm.com/documentation/den0101/latest). TF-M platforms can integrate the psa-adac library to enable secure debug.

The release has been made on the [v1.5.0](https://git.trustedfirmware.org/TF-M/trusted-firmware-m.git/log/?h=TF-Mv1.5.0) release branch following the updated [release process](https://tf-m-user-guide.trustedfirmware.org/releases/release_process.html?highlight=release%20process). Future releases will be made every 6 months. Any security fixes prior to the next release will be made available as patch releases in v1.5.x release branch.
