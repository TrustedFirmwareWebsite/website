---
author: akanksha-jain
title: Trusted Firmware-A v2.12 released!
date: 2025-01-06 09:00:00

image: "../../assets/images/blog/mp1_avenger_tf_crop_1500x1500.png"
---

## Introduction

Trusted Firmware-A recently had its second release in 2024 for TF-A v2.12. 
It is tagged across multiple repositories – TF-A, TF-A Tests, Hafnium, TF-A OpenCI Scripts, Trusted Services and Realm Management Monitor (RMM) 0.6.0 components.

## Highlights

The main highlights comprise:

- New CPU support: IoT Arcadia, Cortex-A720AE ( Hunter-AE)
- Enhanced Arm architecture extensions support
- Hafnium/SPM support: Architectural Timer Emulation and vCPU IPI signalling
- Arm CCA 1.0 : REL0 support in TF-RMM 0.6.0
- mbedTLS upgrade to v3.6.1

The whole content of the release is described on the respective TF-A (1), TF-A-Tests (2) and Hafnium (3) and TF-RMM (4) and Trusted Services (5,6).

- Architecture | EL3 Root World support:
  - Continued 2022 Arch extension support: : FEAT_THE, FEAT_LS64_ACCDATA, FEAT_Debugv8p9, FEAT_SCTLR2, FEAT_FGT2
  - Arm 9.4 : FEAT_D128 support in EL3 thereby allowing, access to 128b translation table registers and usage of 128b LSE atomics ; VA/ PA extended to 56 bits 
 	- Context management: Asymmetric CPU features, EL3 execution context, SVE S/R support
  -	CPU support added for 2024 CPUs Gelas, Nevis and Travis 
- Boot Support :
  - Trusted Boot support for ECDSA (Elliptic Curve Digital Signature Algorithm) P-384 curve with the PSA Crypto implementation
  - Introduced the Transfer List Compiler (TLC) Host Tool
  - Introduced Chain of Trust (CoT) Device Tree to C File (DT2C) tool by enabling their definition exclusively via the device tree, replacing in-source file definitions and generating source files during the build process.
  - mbedTLS Improvements:
    - Enhanced mbedTLS configuration updates
    -	Maximize the usage of mbedTLS library APIs in TF-A 
    -	Upgraded to mbedTLS v3.6.1
  -	Documentation support added for the DPE Design and Threat Model document to TF-A readthedocs
-	Hafnium | S-EL2 SPM:
  - Continued support for FF-A v1.2  -  FFA_MSG_WAIT RX buffer ownership flag; FFA_VERSION endpoint restriction
  - FF-A v1.1, now, Feature complete with VM availability messages upstream merge
  - Architecture Support for Secure Virtual Timer and vCPU Inter Processor interrupt (IPI) signaling
  - RME: GPF support and memcpy hardening thereby enabling the SPMC to recover from a Granule Protection Fault when accessing Non Secure regions.
  -	Secure Interrupt Handling for single core/thread S-EL1 partitions

-	TF-RMM | R-EL2:
  -	Arm CCA 1.0 RMM support merged against REL0 spec
  -	Support for HES-protected Realm Attestation Key 
  -	More details on bug fixes and improvements in the change log
-	TF-A Tests:
  -	Arm arch. extensions: AMU, FEAT_FGT2, LS64_ACCDATA, FEAT_Debugv8p9, LS64 64-byte load/store
  -	Asymmetric feature testing (FEAT_SPE, FEAT_TRBE, FEAT_TCR2)
  -	EL1 and EL2 context switch tests
  -	FF-A: v1.2 support, S-EL2 arch timer virtualization, S-EL2+RME hardening, EL3 SPMC TFTF test suite, EL3 SVE test coverage
  -	RME: RMM v1.0 testing support, PCIe DOE support, RMI support for FEAT_LPA2, SIMD, PAuth
-	Platform Support | TF-A / EL3 :
  -	Platform fixes: FPGA, FVP, Neoverse-RD, AMD Versal Gen 2 added, FVP PCIe support, TC, Corstone-1000, Allwinner, AST2700, Poplar, Agilex, A3K, MT8188, iMX8M, S32G274A, Qemu, Rpi3, Rockchip, STM32MP1, STM32MP2, Versal, ZynqMP
-	Errata ABI:
  -	Support added for Cortex-A720 (Hunter), Cortex-A520(Hayes) and Cortex-X4 

1.	[https://trustedfirmware-a.readthedocs.io/en/v2.12.0/change-log.html#id1](https://trustedfirmware-a.readthedocs.io/en/v2.12.0/change-log.html#id1)
2.	[https://trustedfirmware-a-tests.readthedocs.io/en/latest/change-log.html#version-2-12](https://trustedfirmware-a-tests.readthedocs.io/en/latest/change-log.html#version-2-12)
3.	[https://hafnium.readthedocs.io/en/v2.12.0/change-log.html#v2-12](https://hafnium.readthedocs.io/en/v2.12.0/change-log.html#v2-12)
4.	[https://tf-rmm.readthedocs.io/en/latest/about/change-log.html#v0-6-0](https://tf-rmm.readthedocs.io/en/latest/about/change-log.html#v0-6-0)
5.	[https://lists.trustedfirmware.org/archives/list/tf-a@lists.trustedfirmware.org/thread/RZE6JMYAWUYBQD6PYRGTEF2IJWAP32VR/](https://lists.trustedfirmware.org/archives/list/tf-a@lists.trustedfirmware.org/thread/RZE6JMYAWUYBQD6PYRGTEF2IJWAP32VR/)
6.	[https://git.trustedfirmware.org/plugins/gitiles/TS/trusted-services/+/refs/tags/v1.1.0](https://git.trustedfirmware.org/plugins/gitiles/TS/trusted-services/+/refs/tags/v1.1.0)


## About TrustedFirmware.org

TrustedFirmware.org is an open source project implementing foundational software components for creating secure devices. Trusted Firmware provides a reference implementation of secure software for processors implementing both the A-Profile and M-Profile Arm architecture. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. Trusted Firmware code is the preferred implementation of Arm specifications, allowing quick and easy porting to modern chips and platforms. This forms the foundations of a Trusted Execution Environment (TEE) on application processors, or the Secure Processing Environment (SPE) of microcontrollers.

[TrustedFirmware.org](https://www.trustedfirmware.org) is member driven and member funded.

To learn more about membership and its benefits, please see the [following page](/about) or send a request for more information to enquiries@trustedfirmware.org.
