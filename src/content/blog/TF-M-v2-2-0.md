---
author: shebu-kuriakose
title: Trusted Firmware-M Release v2.2.0
date: 2025-04-22 18:00:00

image: "../../assets/images/blog/musca_tf_crop_1500x1500.png"
---

# **Trusted Firmware-M v2.2.0 Release**

## Introduction

We are pleased to announce Trusted Firmware-M (TF-M) [v2.2.0](https://git.trustedfirmware.org/plugins/gitiles/TF-M/trusted-firmware-m.git/+/refs/tags/TF-Mv2.2.0) release. This is TF-M projects’ 9-monthly release. This ***won’t*** be maintained as a Long Term Support (LTS) release while the next major TF-M release is expected to be a Long Term Support (LTS) release. A minor release, TF-M 2.1.2 from 2.1.0 LTS branch with bug fixes back ported from the main branch has also been made.

This v2.2.0 release includes enhancements to the bootloader, integration of latest Mbed TLS release and Arm toolchain for Embedded support. Below are some of the highlights of the release. 

## Release Highlights

•	**Arm Toolchain for Embedded:** The LLVM based [toolchain](https://github.com/arm/arm-toolchain/tree/arm-software/arm-software/embedded) is supported in the project.  TF-M images for MPS based and RSE platforms have been verified to build using the toolchain.

•	**Mbed TLS3.6.3:** The new minor release has been integrated to TF-M. In addition to bug fixes and security fixes, the release also includes a new configuration for static storage for keys, enabling malloc-less use of key slots. 

• **Hybrid platform enhancements:** Hybrid platforms are either A-profile + M-profile or M-profile + M-profile platforms with TF-M running on the Secure side of the M-profile core providing the Root of Trust (RoT). The on-core and off-core clients need to avail TF-M secure runtime services. Initial support for these clients accessing the services is available in the last release. Further enhancements supporting HYBRID_PLAT_SCHED_TYPE=NSPE as presented [here](https://www.trustedfirmware.org/docs/tech_forum_20230914_non_seucure_clients.pdf) is available                                      

• **Boot Loader:** Several changes and features to the BL1-1 and BL1-2 bootloaders have been done. This includes ECC key derivation and fault injection handling (FIH) enabled for all crypto operations. 

• COSE Library in PSA Attestation service is built from t_cose upstream repository.

• Initial build support for nRF54L15 and stm32wba65i-dk

The project continuously tracks key KPIs in various modes using [squad dashboard](https://qa-reports.linaro.org/tf/tf-m/metrics). In addition to the memory usage, the cycle counts of PSA FF-M API calls across the TrustZone boundary in SFN and IPC modes under the three PSA isolation levels are also included. 

More details of the release can be found [here](https://trustedfirmware-m.readthedocs.io/en/latest/releases/2.2.0.html).  Testing of the release has been done on Trustedfirmware.org [Open CI](https://ci.trustedfirmware.org/). 


## About TrustedFirmware.org

TrustedFirmware.org is an open source project implementing foundational software components for creating secure devices. Trusted Firmware provides a reference implementation of secure software for processors implementing both the A-Profile and M-Profile Arm architecture. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. Trusted Firmware code is the preferred implementation of Arm specifications, allowing quick and easy porting to modern chips and platforms. This forms the foundations of a Trusted Execution Environment (TEE) on application processors, or the Secure Processing Environment (SPE) of microcontrollers.

[TrustedFirmware.org](https://www.trustedfirmware.org) is member driven and member funded.

To learn more about membership and its benefits, please see the [following page](/about) or send a request for more information to enquiries@trustedfirmware.org.
