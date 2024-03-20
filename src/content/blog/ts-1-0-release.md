---
author: akanksha-jain
title: Trusted Services 1.0.0 released!
date: 2023-10-13 09:00:00
image: ../../assets/images/blog/mp1_avenger_tf_crop_1500x1500.png
---

## Introduction

Building on the [Beta version](/blog/Trusted-Services-v1-0-0-beta/) of the [Trusted Services release, v1.0.0](https://git.trustedfirmware.org/TS/trusted-services.git/tag/?h=v1.0.0) is the first stable release of the
project. The release comprises PSA Services that can be deployed on Cortex-A devices to meet PSA
Certified requirements and, necessary build and test infrastructure and documentation.

The project provides a framework for developing and deploying device root-of-trust services for A-
profile devices. The services in the project exists as [Firmware Framework-A](https://developer.arm.com/documentation/den0077/latest) Secure Partitions. The
Secure Partitions are managed by a Secure Partition Manager (SPM) running as part of a Trusted
Operating System (e.g. [OP-TEE](/projects/op-tee/)) or Secure-EL2 Hypervisor (e.g. [Hafnium](/projects/hafnium/)) within a Trusted Execution
Environment.

The deltas from the [Beta release](https://git.trustedfirmware.org/TS/trusted-services.git/tag/?h=v1.0.0-beta) include:

- Introduction to Block Storage Service and Firmware update Services (to allow replacement of
  Firmware components)
- Refactoring the UUID policy, thereby removing the maintenance burden of UUID list update in
  the service locator
- Refactoring the discover service to remove the runtime overhead of memory sharing during the
  discovery
- Normal World preemption capability in Secure Partition
- Arm 8.x CRC-32 support for the Secure and Normal world environment
- Continued support for FF-A1.1 and FF-A 1.2 spec
- mbedTLS version update to v3.4.0

More details around the latest changes, known issues etc. can be found in the Release Notes [here](https://trusted-services.readthedocs.io/en/v1.0.0/project/change-log.html).

OP-TEE 3.17 and beyond, supports SPMC. Further details can be found [here](https://developer.trustedfirmware.org/w/trusted-services/op-tee-spmc/). The diagram below shows a reference design for Trusted Services deployment.

![Reference Implementation](../../assets/images/blog/ts-reference-implementation.png)

For more contextual insight, visit project [documentation](https://trusted-services.readthedocs.io/en/latest/) and subscribe to the [mailing list](https://lists.trustedfirmware.org/mailman3/lists/trusted-services.lists.trustedfirmware.org/) for latest
updates. The direction of travel on further TS engagements can be found in the [Roadmap](https://github.com/Trusted-Services/trusted-services/wiki/Trusted-Services-Roadmap) section.
The project will continue to make further releases against new feature enablement and support improvisations.

## About TrustedFirmware.org

TrustedFirmware.org is an open source project implementing foundational software components for creating secure devices.

Trusted Firmware provides a reference implementation of secure software for processors implementing both the A-Profile and M-Profile Arm architecture. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. Trusted Firmware code is the preferred implementation of Arm specifications, allowing quick and easy porting to modern chips and platforms. This forms the foundations of a Trusted Execution Environment (TEE) on application processors, or the Secure Processing Environment (SPE) of microcontrollers. Visit: [https://www.trustedfirmware.org/](https://www.trustedfirmware.org) for more information.

TrustedFirmware.org is member driven and member funded. To learn more about membership and its benefits, please see the [following page](/about) or send a request for more information to [enquiries@trustedfirmware.org](mailto:enquiries@trustedfirmware.org).
