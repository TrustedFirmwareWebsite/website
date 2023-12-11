---
author: akanksha-jain
title: Trusted Firmware-A v2.9 released!
date: 2023-12-09 09:00:00

image: "../../assets/images/blog/mp1_avenger_tf_crop_1500x1500.png"
---

## Introduction

Trusted Firmware-A has come a long way since its first [commit](https://review.trustedfirmware.org/plugins/gitiles/TF-A/trusted-firmware-a/+/4f6ad66ae9fcc8bcb3b0fcee10b7ab1ffcaf1a56) in 2013, ten years and counting!

Co-incidentally, the latest official TF-A Release increments to the same number - v2.**10**.

It is tagged across multiple repositories – TF-A, TF-A Tests, Hafnium, TF-A OpenCI Scripts &amp;
Jobs and Realm Management Monitor (RMM) 0.4.0 components.

## Highlights

The main highlights comprise:

- Continued support for 2022 Architecture extensions
- TF-RMM alignment against RMM 1.0 EAC5 spec
- CPU support for Gelas, Nevis and Travis 
- Crypto-cell removal - 712/713 (deprecated since TF-A 2.9)
- Enhanced FF-A 1.2 Support 
- Added support for 5 new platforms

The whole content of the release is described on the respective TF-A (1), TF-A-Tests (2) and
Hafnium (3) and TF-RMM (4).

- Architecture extensions support:
  - Arm v8.9 | 2022 Architecture extension support enabled for FEAT_HAFT,RPRFM,
LRCPC3, and MTE_PERM
  - Non Secure SME support in RMM 
  - PAC+ BTI support enabled in RMM and Realm
  - CPU support added for Gelas, Nevis and Travis cores
- TF-A | EL3 Root World :
  - Firmware handoff Library Support : transfer list APIs and Firmware Handoff build
option
  - Improvements to BL31 runtime exception handling 
  - Context management refactoring for RME/4 Worlds 
- Boot Support :
  - Trusted Boot support for ECDSA (Elliptic Curve Digital Signature Algorithm) P-
384 keys
  Migrated to PSA crypto API’s (Except for authenticated decryption feature. Also,
mbedTLS legacy crypto APIs will still be supported for some time)
  - Improved the GUID Partition Table (GPT) parser
  - Various security Improvements and threat Model updates for ARM CCA
  - Completed PSA Attestation Support
- Hafnium | S-EL2 SPM :
  - Continued support for FF-A v1.2  -  FFA_YIELD with time-out; EL3 SPMDs LSPs
communication; memory sharing updates
  - Memory region relative base address field support in SP manifests
  - Interrupt re-configuration hypervisor calls
  - Memory management: S2 PT NS/S IPA split
  - SMCCCv1.2+ compliance fixes
  - Feature parity test improvements for EL3 SPMC and Hafnium
 
- TF-RMM | R-EL2:
  - TF-RMM aligned to RMM 1.0 EAC5 spec
  - Initial CBMC Support
  - Added [TF-RMM Threat Model](https://tf-rmm.readthedocs.io/en/latest/security/threat_model/index.html) to the documentation support
  - Added capability to privately map the per-CPU stack in RMM

- TF-A Tests:
  - Added support for errata management firmware interface tests
  - Added support for firmware hand-off tests
  - Test support for SMCCCv1.2 extended GP register set
  - Added PAC and PMU support in Realm tests
- Platform Support :
  - Support for Aspeed AST2700, NXP IMX93, Intel Agilex5,Nuvoton and ST
platforms
- Errata ABI:
  - Added 13 CPU Errata mitigations(1xCortex-X2, 1xCortex-A710, 4xNeoverse N2,
4xNeoverse V2, 2xCortex- X3 CPU, 1xCortex-A510)

- Qemu Platform Support
  - SDEI support added 
  - Firmware handoff support implemented
  - QEMU virt platform is now supported in TF-RMM
- mbedTLS Update to 3.4.1
- Crypto-cell support for 712/713 removal ( deprecation announced in TF-A 2.9)

1. [https://trustedfirmware-a.readthedocs.io/en/v2.10/change-log.html#id1](https://trustedfirmware-a.readthedocs.io/en/v2.10/change-log.html#id1)
2. [https://trustedfirmware-a-tests.readthedocs.io/en/v2.10/change-log.html#version-2-10](https://trustedfirmware-a-tests.readthedocs.io/en/v2.10/change-log.html#version-2-10)
3. [https://hafnium.readthedocs.io/en/latest/change-log.html#v2-10](https://hafnium.readthedocs.io/en/latest/change-log.html#v2-10)
4. [https://git.trustedfirmware.org/TF-RMM/tf-rmm.git/tag/?h=tf-rmm-v0.4.0](https://git.trustedfirmware.org/TF-RMM/tf-rmm.git/tag/?h=tf-rmm-v0.4.0)
