---
author: shebu-kuriakose
title: Trusted Firmware-M v1.8.0 Released!
date: 2023-05-17 10:00:00

image: "../../assets/images/blog/musca_tf_crop_1500x1500.png"
---

# **Trusted Firmware-M: v1.8.0 Released: Includes improvements to integration with Mbed Crypto for PSA Crypto service and more!**

## Introduction

Trusted Firmware-M (TF-M) [v1.8.0 was released](https://git.trustedfirmware.org/TF-M/trusted-firmware-m.git/tag/?h=TF-Mv1.8.0) on 28th April 2023. The release introduces the new
remote test infrastructure, improvements to integration with Mbed Crypto for PSA Crypto service,
demonstrating secure debug using PSA ADAC on MuscaB1 and integrates the latest versions of Mbed
Crypto and MCUBoot.

## Release Highlights

- Further memory optimizations reducing RAM usage. Further code size optimization of Secure
  Partition Manager and Secure Partitions are expected to be part of next release. Code size
  optimization is also progressing for Mbed Crypto used within PSA Crypto service.

- **Remote Test Infrastructure:** The project has enabled the Embedded Remote Procedure Call (eRPC)
  Infrastructure allowing tests to be remotely executed from host machine. This makes testing more
  scalable as the memory constraints of the target device running TF-M doesn’t limit the size of test
  suites that can be executed. This also allows efficient access to test results and updating of tests
  without changing the test image on target device. Tests will be fully enabled in this infrastructure in
  the coming release.

- **PSA Crypto Integration Improvements:** TF-M uses Mbed Crypto within its PSA Crypto service. There
  have been improvements in Mbed Crypto for smoother integration with projects such as TF-M.
  There are changes in the TF-M release to allow more flexibility when TF-M is integrated with RTOSes
  with its own instance of Mbed TLS and Mbed Crypto.

- **PSA ADAC:** PSA ADAC Specification defines a protocol that allows Secure Debug. There have been
  further improvements to PSA ADAC integration within TF-M and support has been extended to the
  Arm reference platform, MuscaB1e.

- [Mbed TLS release v3.4.0](/blog/MBed-TLS-3-4-0/) and [MCUboot v1.10.0](https://docs.mcuboot.com/release-notes.html#version-1100) are integrated in the release. Mbed TLS release
  includes further PSA Crypto enhancements such as PSA Crypto driver dispatch layer for EC J-PAKE
  enabling alternative software or hardware implementations via. PSA Crypto drivers. PSA Crypto
  support for interruptible sign and verify hash operations is also supported.

Initial Attestation Service has started using the QCBOR library upstream project instead of an
instance of QCBOR maintained in TF-M project. Plan is to also use the upstreamed t_cose as well in
future.

- **KConfig:** Initial support made available in v1.7.0 release has been enhanced. Kconfig allowed users
  to change configuration options. Starting from TF-M’s base configuration, a user can enable
  necessary services and options. Kconfig ensures selected options are consistent and valid. Kconfig
  makes configuration easier and less error-prone and offers a GUI to assist users.

More details can be found [here](https://tf-m-user-guide.trustedfirmware.org/releases/1.8.0.html). Testing of the release has been done on Trustedfirmware.org [Open CI](https://ci.trustedfirmware.org/).
The [next release](https://tf-m-user-guide.trustedfirmware.org/releases/index.html#future-release-plans) will be in November 2023. Any security fixes prior to the next release will be made
available as patch releases in v1.8.x release branch.

## About TrustedFirmware.org

TrustedFirmware.org is an open source project implementing foundational software components for creating secure devices. Trusted Firmware provides a reference implementation of secure software for processors implementing both the A-Profile and M-Profile Arm architecture. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. Trusted Firmware code is the preferred implementation of Arm specifications, allowing quick and easy porting to modern chips and platforms. This forms the foundations of a Trusted Execution Environment (TEE) on application processors, or the Secure Processing Environment (SPE) of microcontrollers.

[TrustedFirmware.org](https://www.trustedfirmware.org) is member driven and member funded.

To learn more about membership and its benefits, please see the [following page](/about) or send a request for more information to enquiries@trustedfirmware.org.
