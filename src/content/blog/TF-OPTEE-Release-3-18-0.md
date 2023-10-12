---
author: don-harbin
title: Trusted Firmware OP TEE Release 3.18.0
date: 2022-07-15 10:00:00

image: "../../assets/images/blog/musca_tf_crop_1500x1500.png"
---

# **Trusted Firmware OP TEE: v3.18.0 Release**

## Introduction

Trusted Firmware OP TEE v3.18.0 was released on the 15th of July, 2022. The release includes support for Armv8.5-A Memory Tagging Extension, Arm SMCCC TRNG firmware interface and much more.

## Highlights

Here are some of the main additions in OP TEE 3.18.0:

- Armv8.5-A Memory Tagging Extension support for OP-TEE core and TAs
- Arm SMCCC TRNG firmware interface support
- Add DT_GNU_HASH support to ldelf
  - Enables loading TAs compiled with --hash-style=gnu
- Add support for the elliptic curve X25519 as defined in TEE Internal Core API v1.2.
- SCMI fixes and updates

The release included updates to the following repos:

- [optee_os](https://optee.readthedocs.io/en/latest/building/gits/optee_os.html#optee-os)
- [optee_client](https://optee.readthedocs.io/en/latest/building/gits/optee_client.html#optee-client)
- [optee_test](https://optee.readthedocs.io/en/latest/building/gits/optee_test.html#optee-test)
- [build](https://optee.readthedocs.io/en/latest/building/gits/build.html#build)

Pointers to the release pages can be found [here](https://github.com/OP-TEE/optee_os/blob/3.18.0/CHANGELOG.md).

Testing of the release has been performed by the committers and can be found [here.](https://github.com/OP-TEE/optee_os/commit/1ee647035939e073a2e8dddb727c0f019cc035f1)
Test details for this release are [here](https://optee.readthedocs.io/en/latest/building/gits/optee_test.html). Test results can be found in the [pull request itself](https://github.com/OP-TEE/optee_os/pull/5395).

The release has been tagged at [3.18.0](https://github.com/OP-TEE/optee_os/releases/tag/3.18.0) using the OP TEE [release procedure](https://optee.readthedocs.io/en/latest/general/releases.html#release-procedure).

The OP TEE release roadmap is located [here](https://optee.readthedocs.io/en/latest/general/releases.html).

Any security fixes prior to the next release will be made available on the [Security Advisories page](https://github.com/OP-TEE/optee_os/security/advisories?state=published).
