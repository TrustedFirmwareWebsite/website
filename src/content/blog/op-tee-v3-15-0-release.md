---
author: don-harbin
title: Trusted Firmware OP TEE Release 3.15.0
date: 2021-10-18 10:00:00

image: "../../assets/images/blog/musca_tf_crop_1500x1500.png"
---

## Introduction

Trusted Firmware OP TEE [v3.15.0](https://github.com/OP-TEE/optee_os/blob/master/CHANGELOG.md) was released on the 18th of October 2021. The release includes support for Rust, PKCS#11 (a Public-Key Cryptography Standard that defines a platform independent API for cryptographic tokens), an Mbed TLS library upgrade, and more.

## Highlights

Here are some of the main additions in OP TEE 3.15.0:

- Integration of [Teaclave TrustZone](https://teaclave.apache.org) SDK with OP-TEE. With this integration, OP-TEE client and trusted applications written in Rust can now be built and run.

  - Trustzone SDK [documentation is available here](https://teaclave.apache.org/trustzone-sdk-docs/).

- PKCS#11 TA

  - Support for RSA Key pair generation, PKCS#1 v1.5 signing & verification support with several hash modes, PSS signing & verification support, OAEP encryption/decryption support
  - Support for Certificate objects and X.509 public key certificate objects
  - More AES and HMAC mechanisms
  - An overview of PKCS#11 in OP-TEE can be found in [this presentation from Linaro Connect](https://connect.linaro.org/resources/lvc21/lvc21-215/)

- New Platform Support

  - Total compute platform for [TC1](https://developer.arm.com/tools-and-software/open-source-software/arm-platforms-software/total-compute-solution)

- [Mbed TLS library](/projects/mbed-tls/) in OP-TEE upgraded to 2.27.0
- Support for Arm MMU for address space >=40 bits.

More details regarding the updates in this release can be found [here](https://github.com/OP-TEE/optee_os/blob/master/CHANGELOG.md).

## Additional information

The release included updates to the following repos:

- [optee_os](https://optee.readthedocs.io/en/latest/building/gits/optee_os.html#optee-os) - 131 commits and 69 PR's
- [optee_client](https://optee.readthedocs.io/en/latest/building/gits/optee_client.html#optee-client) - 17 commits and 10 PR's
- [optee_test](https://optee.readthedocs.io/en/latest/building/gits/optee_test.html#optee-test) - 15 commits and 12 PR's
- [build](https://optee.readthedocs.io/en/latest/building/gits/build.html#build) - 15 commits and 13 PR's

Testing of the release has been performed by the committers and can be found [here](https://github.com/OP-TEE/optee_os/commit/6be0dbcaa11394a2ad5a46ac77e2f76e31a41722#diff-06572a96a58dc510037d5efa622f9bec8519bc1beab13c9f251e97e657a9d4ed)
Forty-four devices were tested for this release using the OP-TEE [xtest](https://optee.readthedocs.io/en/latest/building/gits/optee_test.html) test suite. Testing results can be found in the [pull request itself](https://github.com/OP-TEE/optee_os/pull/4880)

The release has been tagged at [3.15.0](https://github.com/OP-TEE/optee_os/releases/tag/3.15.0) using the OP TEE [release procedure](https://optee.readthedocs.io/en/latest/general/releases.html#release-procedure).

The OP TEE release roadmap can be found [here](https://optee.readthedocs.io/en/latest/general/releases.html).

Any security fixes prior to the next release will be made available on the [Security Advisories page](https://github.com/OP-TEE/optee_os/security/advisories?state=published).
