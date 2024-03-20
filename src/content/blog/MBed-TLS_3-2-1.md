---
author: shebu-kuriakose
title: MBed TLS v3.2.1 - PSA Crypto, TLS1.3, Acceleration and More!
date: 2022-07-13 10:00:00

image: "../../assets/images/blog/musca_tf_crop_1500x1500.png"
---

## Introduction

Mbed TLS project has released v3.2.1 and v2.28.1 LTS this week. v3.2.1 was done soon after v3.2.0 to include a missing file. Being the development release since December last year, v3.2.1 includes several enhancements, bug fixes and security fixes. v2.28.1 released from Mbed TLS 2.28 Long Time Support (LTS) branch includes latest bug fixes and security fixes.

Refer to the [release notes](https://github.com/Mbed-TLS/mbedtls/releases) for a complete list of changes in the releases. Here are some of the highlights of v3.2.1:

## Highlights

1. **Usability Improvements:** As part of improving the usability of Mbed TLS 3.1 and 3.2 releases, several accessor functions, public getter APIs to access certain private fields in structures, and converting private fields in structures to public are included. The specific changes can be found in the [release notes](https://github.com/Mbed-TLS/mbedtls/releases)

2. **TLS/X.509 using PSA Crypto APIs:** Mbed TLS project provides a reference implementation of the [PSA Crypto APIs](https://developer.arm.com/documentation/ihi0086/latest/). Mbed TLS 3.1 onwards include implementation of all essential PSA Crypto v1.0 APIs, and pass the PSA Crypto API compliance [test suite](https://github.com/ARM-software/psa-arch-tests).

   Earlier only a limited subset of crypto operations in TLS, X.509 and PK used PSA Crypto APIs using the MBEDTLS_USE_PSA_CRYPTO config option. In Mbed TLS 3.2.1, most of the crypto operations are done using PSA Crypto APIs with a few exceptions. Refer [here](https://github.com/Mbed-TLS/mbedtls/blob/development/docs/use-psa-crypto.md) for list of exceptions

3. **TLS 1.3 Enhancements:** Mbed TLS 3.1 release included a minimum viable implementation of TLS 1.3 which provided limited client side support. Several new features including server side support (ephemeral key establishment only), client authentication, client side TLS version negotiation, building Mbed TLS only with TLS 1.3 without TLS 1.2 support etc are included. Refer [here](https://github.com/Mbed-TLS/mbedtls/blob/development/docs/architecture/tls13-support.md) for details.
4. **Acceleration:** Improved performance of SHA-2 algorithm on Armv8 platforms by enabling SHA-2 acceleration instructions when building for Aarch64. SHA-256 is 7.5x faster and SHA-512 is 4.5x faster than in Mbed TLS 3.1.

## What’s Next?

During H2’2022, focus will remain on some of the remaining areas of TLS and X.509 using PSA Crypto such as allowing isolation of [long term secrets](https://github.com/orgs/Mbed-TLS/projects/1#column-18338322), TLS and X.509 working when library built without software implementations of crypto operations if [crypto hardware supports those operations](https://github.com/orgs/Mbed-TLS/projects/1#column-18883163) etc. TLS 1.3 enhancements such as PSK support, EC J-PAKE PSA API implementation are also areas the project plans to spend time on. 

We welcome community participation in ongoing and future work items in the project that can be found [here](https://github.com/orgs/Mbed-TLS/projects/1). Subscribe to the [mailing list](https://lists.trustedfirmware.org/mailman3/lists/mbed-tls.lists.trustedfirmware.org/) to start participating in the design and development of the project. The bi-weekly Mbed TLS [Technical Forums](/meetings/mbed-tls-technical-forum/) are also an opportunity to understand major developments in the project.
