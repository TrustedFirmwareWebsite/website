---
author: shebu-kuriakose
title: MBed TLS v3.4.0 Released!
date: 2023-04-13 10:00:00
categories:
  - Blog
layout: "../../layouts/BlogLayout.astro"
image: "../../assets/images/blog/musca_tf_crop_1500x1500.png"
---

## Introduction

The Mbed TLS project has released v3.4.0 and v2.28.3 LTS in March 2023. v3.4.0 includes several enhancements, bug fixes and security fixes. v2.28.3 released from the Mbed TLS 2.28 Long Term Support (LTS) branch includes the latest bug fixes and security fixes.

Refer to the [release notes](https://github.com/Mbed-TLS/mbedtls/releases/tag/v3.4.0) for a complete list of changes in the releases. Here are some of the highlights of v3.4.0:

## Highlights

1. PSA Crypto driver dispatch layer for EC J-PAKE enabling alternative software or hardware implementations via. PSA Crypto drivers.

2. Support disabling of ECDSA or EC J-PAKE implementation when PSA drivers for ECDSA or EC J-PAKE is present reducing memory usage. Enhancements required to similarly support interruptible ECDSA operations.

3. PSA Crypto support for interruptible sign and verify hash operations.

4. Improvements to integration of PSA Crypto (Mbed Crypto) with its clients (e.g. Trusted Firmware-M).

5. Support for AES with the Armv8-A Cryptographic Extension on Aarch64 added. This makes
   AES constant-time, and improves performance by 3-5x.

## What’s Next?

During H1’2023, focus will remain on some of the remaining areas of TLS and X.509 using PSA Crypto such as TLS and X.509 working when the library is built without software implementations of crypto operations (if crypto hardware supports those operations). Reducing memory usage of PSA Crypto (Mbed Crypto), PBKDF2 PSA API implementation are also areas the project plans to spend time on. Look at the project [roadmap](https://mbed-tls.readthedocs.io/en/latest/roadmap/) for further details.

We welcome community participation in ongoing and future work items in the project that can be found [here](https://github.com/orgs/Mbed-TLS/projects/1). Subscribe to the [mailing list](https://lists.trustedfirmware.org/mailman3/lists/mbed-tls.lists.trustedfirmware.org/) to start participating in the design and development of the project. The bi-weekly Mbed TLS [Technical Forums](https://www.trustedfirmware.org/meetings/mbed-tls-technical-forum/) are also an opportunity to understand major developments in the project.
