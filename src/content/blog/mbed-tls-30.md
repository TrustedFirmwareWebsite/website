---
author: shebu-kuriakose
title: Mbed TLS 3.0 Release
date: 2021-07-07 10:00:00

image: "../../assets/images/blog/musca_tf_crop_1500x1500.png"
---

# **Mbed TLS 3.0 Release**

Mbed TLS 3.0 has been released on 2021-07-07. It is the first major release from the project since it
migrated to [Trustedfirmware.org](/) community project in 2020. The release is available from the [Mbed TLS
GitHub page](https://github.com/ARMmbed/mbedtls/releases).

There are several changes in the release since the last release, Mbed TLS 2.26. Here are some of the
changes:

1. **Removal of obsolete protocols, insecure cipher suites and algorithms**

   Support for SSL 3.0, TLS1.0, 1.1 and DTLS1.0 are removed. TLS1.2 and DTLS1.2 are supported. RC4
   based, 3DES and single-DES cipher suites are also removed. MD2, MD4, RC4, Blowfish and XTEA
   algorithms are removed.

2. **Clean up of Mbed TLS configuration options**

   Some of the configs are removed. A level of indirection and versioning of config files have been
   introduced.

3. **Changes in function signatures and semantics**

   Semantics of mbedtls*ssl*{get,set}\_session(), signatures of SSL key export API, session cache APIs
   and SSL error code space have been changed.

4. **Removing functions previously marked as deprecated**

   High and low level crypto functions marked as deprecated in previous releases have been removed.

The changes above make Mbed TLS easier to configure and use while also providing a good baseline to
add new features and enhancements.

Refer to the [change log](https://github.com/ARMmbed/mbedtls/blob/v3.0.0/ChangeLog) for a complete list of changes in the release. As a major release, Mbed TLS3.0
breaks compatibility with previous releases. Users can refer to the [migration guide](https://github.com/ARMmbed/mbedtls/blob/development/docs/3.0-migration-guide.md) to check how their
code might need to change to make it compatible with Mbed TLS 3.0.

**Looking into the future**

Most of the [PSA Crypto v1.0 APIs](https://developer.arm.com/documentation/ihi0086/latest/) and initial work to support [PSA Cryptoprocessor Driver interface](https://github.com/ARMmbed/mbedtls/blob/development/docs/proposed/psa-driver-interface.md) have
been implemented in recent releases. The remaining PSA Crypto API implementation and changes to
make TLS and X.509 components use PSA Crypto APIs more exhaustively will be happening in future
releases. TLS1.3 support is being worked on. A new Long Term Stable release is also expected, to be
based on the final 2.x release. Subscribe to the
[mailing list](https://lists.trustedfirmware.org/mailman3/lists/mbed-tls.lists.trustedfirmware.org/) to start participating in the design and development of the project.
