---
author: shebu.kuriakose
title: MBed TLS v3.5.0 Released with new and smaller ECC implementation! 
date: 2023-10-19 10:00:00
categories:
- Blog
layout: post
image: /assets/images/blog/musca_tf_crop_1500x1500.png
---

Introduction
------------
The Mbed TLS project has released version 3.5.0 in October 2023. The release includes several code size optimizations including a new small footprint secp256r1 implementation accessible via PSA Crypto APIs. 3.5.0 also includes feature enhancements, bug fixes and security fixes. 2.28.5 released from the Mbed TLS 2.28 Long-Term Support (LTS) branch includes the latest bug fixes and security fixes.

Refer to the [release notes](https://github.com/Mbed-TLS/mbedtls/releases/tag/mbedtls-3.5.0) for a complete list of changes in the releases. 

Highlights
-----------
Here are some of the highlights of 3.5.0:
1.	p256-m - An alternative implementation of ECC (Elliptic Curve Cryptography) on the curve SECP256R1, supporting ECDH, ECDSA (randomized) and key generation. The implementation, only available via the PSA Crypto API, has much smaller code size and RAM usage compared to the default implementation. See documentation in [mbedtls_config]( https://github.com/Mbed-TLS/mbedtls/blob/development/include/mbedtls/mbedtls_config.h) for MBEDTLS_PSA_P256M_DRIVER_ENABLED for more details. 

2.	Ability to disable configuration options MBEDTLS_ECP_C and MBEDTLS_BIGNUM_C in [mbedtls_configs](https://github.com/Mbed-TLS/mbedtls/blob/development/include/mbedtls/mbedtls_config.h) when ECDH, ECDSA and EC J-PAKE are disabled or provided by PSA Crypto drivers, reducing code size.

3.	Configuration option to restrict AES to 128-bit keys saving code size. The release includes AES performance improvements. A new configuration option disables the built-in AES implementation, reducing the code size and eliminating the risk that it would be used accidentally.

4.	PBKDF2-CMAC, PBKDF2-HMAC, and FFDH key types available via PSA Crypto.  

5.	API changes to enhance support for disabling of ECDSA or EC J-PAKE or ECDH implementation when PSA drivers for ECDSA or EC J-PAKE or ECDH is present, reducing memory usage. to disable MBEDTLS_ECDH_C when ECDH is provided by a PSA Crypto driver.

6.	Support server-side TLS version negotiation, allowing server to choose between TLS1.2 and TLS1.3 depending on the client. The FFDH key exchange is now supported in TLS 1.3.

7.	Parsing of additional extensions in X.509 Certificates and Certificate Signing Request (CSR). Enhancements to X.509 hostname verification

8.	Support for SHA-3.

What’s Next
-----------
The next release 3.6.0 being planned for early next year is expected to be a Long-Term Stable (LTS) release that gets maintained for the next 3 years. The release will include enhancements to TLS1.3 (such as early data), thread safety in PSA Crypto and code size optimization of cipher and AEAD via PSA Crypto. 

Look at the project [roadmap](https://mbed-tls.readthedocs.io/en/latest/project/roadmap/) for features in the upcoming quarters. A separate TF-PSA-Crypto GitHub repository providing the PSA Crypto API reference implementation (available in Mbed TLS today) is expected to be published during this quarter. 
We welcome community participation in ongoing and future work items in the project that can be found [here](https://github.com/orgs/Mbed-TLS/projects/1). Subscribe to the [mailing list](https://lists.trustedfirmware.org/mailman3/lists/mbed-tls.lists.trustedfirmware.org/) to start participating in the design and development of the project. The bi-weekly Mbed TLS [Technical Forums](https://www.trustedfirmware.org/meetings/mbed-tls-technical-forum/) are also an opportunity to understand major developments in the project.

About TrustedFirmware.org
-----------
TrustedFirmware.org is an open-source project implementing foundational software components for creating secure devices. Trusted Firmware provides a reference implementation of secure software for processors implementing both the A-Profile and M-Profile Arm architecture. It provides SoC developers and OEMs with a reference trusted codebase complying with the relevant Arm specifications. Trusted Firmware code is the preferred implementation of Arm specifications, allowing quick and easy porting to modern chips and platforms. This forms the foundations of a Trusted Execution Environment (TEE) on application processors, or the Secure Processing Environment (SPE) of microcontrollers. Visit: https://www.trustedfirmware.org/

