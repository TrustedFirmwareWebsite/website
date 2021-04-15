Trusted Firmware-M v1.3.0  


# Introduction

Trusted Firmware-M (TF-M) [v1.3.0](https://git.trustedfirmware.org/TF-M/trusted-firmware-m.git/tag/?h=TF-Mv1.3.0) was released on the 09th April, 2021. This version includes new secure service, implementation of recent PSA Specifications, enablement of new platforms and certain Arm v8.1-M architectural features since the last release v1.2.0. This is the first release tested using the Trustedfirmware projects’ Open Continuous Integration (CI) [System](https://ci.trustedfirmware.org/). 

# Highlights of TF-M v1.3.0

While there have been around 250 commits in TF-M master branch since TF-Mv1.2.0, here are some of the highlights included in TF-Mv1.3.0: 

* M2354 (Cortex-M23), Cortex-M55 plus Ethos-U55 Corstone-300 FPGA and MuscaB1 Secure Enclave are the newly enabled platform ports. This adds to already supported [platforms](https://ci-builds.trustedfirmware.org/static-files/WRMjbkdFEcxIcMUI5y_6ZGWbLmrbpRLD3G-rf1Bq0SkxNjE4MzA2NzM2MTc4Ojk6YW5vbnltb3VzOmpvYi90Zi1tLWJ1aWxkLWRvY3MtbmlnaHRseS9sYXN0U3RhYmxlQnVpbGQvYXJ0aWZhY3Q=/trusted-firmware-m/build/docs/user_guide/html/platform/ext/index.html) - STM32 Nucleo-144, STM32L562E-DK, LPCXpresso55S69, PSoC(R) 64, nRF5340 DK, nRF5340 PDK and M2351.
* [Firmware Frameowrk for M v1.1 Extensions Specification](https://developer.arm.com/documentation/aes0039/latest) includes Security framework for smaller, simpler system architecture, optimizations based on feedback from v1.0 Framework and improvements to interrupt handing within Secure Partitions. Initial set of changes to align with the v1.1 Extension Specifications such as stateless RoT Service and Second-Level Interrupt Handling (SLIH) are included in the release.
* [PSA Firmware Update API](https://developer.arm.com/documentation/ihi0093/latest/) defines a standard set of firmware update interfaces that can be used by update applications and cloud connector clients. In this tag, Trusted Firmware-M has implemented these interfaces as a new runtime Secure Service – Firmware Update (Refer Figure 1 Trusted Firmware-M). The new interface is exposed to applications for the performing Software updates.
* A generic [Threat Model](https://ci-builds.trustedfirmware.org/static-files/WRMjbkdFEcxIcMUI5y_6ZGWbLmrbpRLD3G-rf1Bq0SkxNjE4MzA2NzM2MTc4Ojk6YW5vbnltb3VzOmpvYi90Zi1tLWJ1aWxkLWRvY3MtbmlnaHRseS9sYXN0U3RhYmxlQnVpbGQvYXJ0aWZhY3Q=/trusted-firmware-m/build/docs/user_guide/html/docs/threat_models/generic_threat_model.html) listing threat and mitigations based on analysis of Trusted Firmware-M implementation has been published.
* Fault Injection Handling library to mitigate against physical attacks has been [implemented](https://ci-builds.trustedfirmware.org/static-files/2UipQ8iK0gjb6CK-z7LyaX6l81oMQ3qWCugQ49Llv2IxNjE4MzA3MDk2MTUxOjk6YW5vbnltb3VzOmpvYi90Zi1tLWJ1aWxkLWRvY3MtbmlnaHRseS9sYXN0U3RhYmxlQnVpbGQvYXJ0aWZhY3Q=/trusted-firmware-m/build/docs/user_guide/html/docs/design_documents/tfm_physical_attack_mitigation.html) for use in Trusted Firmware-M modules. 
* Profile [Large](https://ci-builds.trustedfirmware.org/static-files/2UipQ8iK0gjb6CK-z7LyaX6l81oMQ3qWCugQ49Llv2IxNjE4MzA3MDk2MTUxOjk6YW5vbnltb3VzOmpvYi90Zi1tLWJ1aWxkLWRvY3MtbmlnaHRseS9sYXN0U3RhYmxlQnVpbGQvYXJ0aWZhY3Q=/trusted-firmware-m/build/docs/user_guide/html/docs/design_documents/profiles/tfm_profile_large.html) has been added to the existing Profile [Medium](https://ci-builds.trustedfirmware.org/static-files/zfMyv2fzReLkLpRau6JrXVvDYfVAo-lk0emeFRtkyOoxNjA2NDA0MjY3NjMzOjk6YW5vbnltb3VzOnZpZXcvVEYtTS9qb2IvdGYtbS1idWlsZC1kb2NzLW5pZ2h0bHkvbGFzdFN0YWJsZUJ1aWxkL2FydGlmYWN0/trusted-firmware-m/build/install/doc/user_guide/html/docs/design_documents/profiles/tfm_profile_medium.html) and Profile [Small](https://ci-builds.trustedfirmware.org/static-files/zfMyv2fzReLkLpRau6JrXVvDYfVAo-lk0emeFRtkyOoxNjA2NDA0MjY3NjMzOjk6YW5vbnltb3VzOnZpZXcvVEYtTS9qb2IvdGYtbS1idWlsZC1kb2NzLW5pZ2h0bHkvbGFzdFN0YWJsZUJ1aWxkL2FydGlmYWN0/trusted-firmware-m/build/install/doc/user_guide/html/docs/design_documents/profiles/tfm_profile_small.html) support in TF-M v1.2 and v1.1 respectively. Each TF-M Profile provides a set of security features catering a particular category of use cases and aligns with the PSA Certification Protection Profiles. 
* Arm v8.1-M features such as Privileged Execute Never (PXN) attribute and Thread reentrancy disabled (TRD). These features are available on Cortex-M55 Corstone-300 platform
* PSA Isolation Level3 support was enabled on Arm reference platforms MuscaB1 and AN521 in TF-M v1.2. STM32L562E-DK has been enabled with Level 3 support in this release. PSA Isolation Level 3 is the highest isolation level defined by the [Firmware-Framewok-M](https://developer.arm.com/-/media/Files/pdf/PlatformSecurityArchitecture/Architect/DEN0063-PSA_Firmware_Framework-1.0.0-2.pdf?revision=2d1429fa-4b5b-461a-a60e-4ef3d8f7f4b4&la=en&hash=BE8C59DBC98212591E1F935C2312D497011CD8C7 and provides isolation of Secure Partition from Non-Secure Processing Environment (NSPE) and other Secure Partitions. The PSA Root of Trust (RoT) domain is also isolated from NSPE and all Secure Partitions. Refer Figure 1 Trusted Firmware-M
* PSA Crypto Service and MCUboot (Secure Boot) updated to Mbed TLS v2.25 and MCUboot v1.7.2 respectively.

More details can be found in the [Change Log](https://ci-builds.trustedfirmware.org/static-files/zRUsA9SOgzSqY5Te3rMJXpBEgQpIpRCUeo2TU3GhIrExNjE4MzA4Njg3MjM5Ojk6YW5vbnltb3VzOmpvYi90Zi1tLWJ1aWxkLWRvY3MtbmlnaHRseS9sYXN0U3RhYmxlQnVpbGQvYXJ0aWZhY3Q=/trusted-firmware-m/build/docs/user_guide/html/docs/reference/changelog.html). 

Trusted Firmware's Open Continuous Integration (Open CI) System has also continued to test more build configurations and has been used extensively for automated testing of the release. More TF-M platforms beyond the Arm reference platforms are getting added to the Open CI System. Mbed OS, Free RTOS, TF-M CMSIS Pack and Zephyr upstream integration of Trusted Firmware-M are expected to be updated to TF-M v1.3.0 soon.


**Figure 1 - Trusted Firmware-M***

<p align="center">
  <img src="/docs/tf-m_v_1-3-3_stack.png">
</p>
![TF-M Stack](/docs/tf-m_v_1-3-3_stack.png)
