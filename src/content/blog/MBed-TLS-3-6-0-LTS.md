---
author: shebu-kuriakose
title: MBed TLS v3.6.0 Long Term Support(LTS) Release
date: 2023-01-09 10:00:00

image: "../../assets/images/blog/musca_tf_crop_1500x1500.png"
---
# MBed TLS v3.6.0 Long Term Support(LTS) Release

## Introduction

The Mbed TLS project has released version 3.6.0 in March 2024. The release is a Long Term Support
(LTS) release which will be maintained for the next 3 years with bug and security fixes.

The release includes several new feature enhancements such as improved multithreaded operations,
TLS1.3 early data support, Armv8-A Cryptographic Extensions for AES, SHA-256 for Thumb (T32) Etc.
Mbed TLS 2.28.8 released from the Mbed TLS 2.28 Long-Term Support (LTS) branch includes the latest
bug fixes and security fixes.

Please refer to the [release notes](https://github.com/Mbed-TLS/mbedtls/releases/tag/v3.6.0) for a complete list of changes in the releases.

## Highlights

Here are some of the highlights of 3.6.0:

1. PSA Crypto thread safety: Added protection for multithreaded access to the PSA keystore and
protection for multithreaded access to the PSA global state, including concurrently calling
psa_crypto_init(). Further testing and enhancements due in future.
2. Disabling of a cipher or AEAD software implementation in the library is possible when corresponding
PSA driver is present, reducing memory usage. Disabling of hash, ECDSA and EC-JPAKE software
implementations when their PSA drivers are present available from previous releases.
3. Armv8-A Cryptographic Extensions for AES, SHA-256 for Thumb (T32) or 32-bit Arm (A32).
4. TLS1.3 early data and other enhancements. TLS 1.3 protocol now enabled in the default
configuration
5. Enabled support for record size limit extension as defined by RFC 8449. Application data sent and
received will be fragmented according to Record size limits negotiated during handshake.

## What's Next?

Planning for the next major release, 4.0.0, is currently underway. The release will include making PSA
Crypto the main Crypto API, deprecating/Internalizing legacy cipher APIs and TLS/X.509 always using PSA
Crypto APIs. A new Long term Support (LTS) release will be created every 18 months.

Look at the [project roadmap](https://mbed-tls.readthedocs.io/en/latest/project/roadmap/) for features in the upcoming quarters. A separate TF-PSA-Crypto GitHub
repository providing the PSA Crypto API reference implementation (available in Mbed TLS today) is
being developed.

We welcome community participation in the ongoing and future work items in the project that can be
found [here](https://github.com/orgs/Mbed-TLS/projects/1). Subscribe to the [mailing list](https://lists.trustedfirmware.org/mailman3/lists/mbed-tls.lists.trustedfirmware.org/) to start participating in the design and development of the
project. The bi-weekly [Mbed TLS Technical Forums](https://www.trustedfirmware.org/meetings/mbed-tls-technical-forum/) are also an opportunity to understand major developments in the project.


