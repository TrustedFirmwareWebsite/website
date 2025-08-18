---
author: bharath-subramanian
title: Introducing Rusted Firmware-A (RF-A) - A Rust-Based reimagination of Trusted Firmware-A
date: 2025-08-19 09:00:00

image: "../../assets/images/blog/mp1_avenger_tf_crop_1500x1500.png"
---

We are excited to unveil Rusted Firmware-A, a new open-source project that reimagines Trusted Firmware-A (TF-A) using Rust. Developed collaboratively by engineers at Arm and Google, Rusted Firmware-A is a ground-up redesign that leverages the strengths of a modern systems programming language specifically designed to address key limitations of traditional approaches, with a strong focus on safety and performance.

__TL;DR__: _Rusted Firmware-A is a Rust-first implementation of Trusted Firmware-A for the latest Arm A-class processors. It’s open source, security by design, legacy-free, and built with the future in mind. This is just the beginning. The project welcomes your feedback as it evolves._

## Why Rusted Firmware-A?
TF-A has served the Arm ecosystem reliably for many years. However, it carries evolutionary and legacy artifacts accumulated over time. Rusted Firmware-A gives us a great opportunity to:

* __Ensure memory safety__ from using Rust.
* __Drop legacy support__, allowing the codebase to be more maintainable.
* __Redesign with clarity and modularity__, taking advantage of Rust’s rich type system and error handling.
* __Catch more bugs at compile time__, reducing risks in sensitive firmware environments.
* __Align with modern security guidance__ from regulators and security standards bodies.
  
The C TF-A will continue to be supported and maintained including Long-Term Support (LTS) versions that remain first-class for many years. However, with Rusted Firmware-A, we’re refreshing the implementation for the future.

## Scope and Goals
Rusted Firmware-A starts with a blank sheet, targeting the latest Arm A-class processors. Older architecture versions and extensions are out of scope. Some key principles:
* AArch64 only.
* Requires more modern features like GICv3, DSU, and hardware-assisted coherency.
* Certain interfaces will not be reimplemented in Rusted Firmware-A.
* It’s a reference implementation suitable for future product releases.
* Intended for use on Arm FVP and QEMU platforms in the early stages.

## Project Status and Roadmap
We are currently working on an early prototype and published v0.1 for use. This version will serve as a public signal that the codebase is available and open for feedback.

Development Milestones
* Initial design & architecture review
* Core firmware framework in Rust
* Early platform support (FVP, QEMU)
* Open CI Integration
* v0.1public preview
* RFC on migration paths and feature set
* Toward v1.0: stabilization

__Timeline__: We’re looking to productize Rusted Firmware-A in a few years. Until then, expect rapid iteration and community-driven evolution.

## Open Source and Collaboration
Rusted Firmware-A is open source. You can explore the project, feedback, contribute or track progress at:
* Rusted Firmware - A repository: https://git.trustedfirmware.org/RF-A/rusted-firmware-a 
* Rust Crates: https://review.trustedfirmware.org/admin/repos/q/filter:arm-firmware-crates/
* GitHub Issues Tracker: https://github.com/RustedFirmware-A/rusted-firmware-a/issues 
* Mailing List: https://lists.trustedfirmware.org/mailman3/lists/rusted-firmware-a.lists.trustedfirmware.org/ 
* Discord Channel: [#rusted-firmware-a](https://discordapp.com/channels/1106321706588577904/1399339854948601856)
* Rusted Firmware - A OpenCI: https://review.trustedfirmware.org/plugins/gitiles/next/ci/tf-a-job-configs/+/refs/heads/master & https://review.trustedfirmware.org/plugins/gitiles/ci/tf-a-ci-scripts/+/refs/heads/tfa-next
* Latest Release (RF-A v0.1.0): https://git.trustedfirmware.org/plugins/gitiles/RF-A/rusted-firmware-a/+/refs/tags/v0.1.0 

Currently, contributions from __Arm__ and __Google__ are given priority. We welcome external contributions on a best-effort basis during the early phases.

## Migration Strategy
We anticipate providing __a migration path from TF-A to__ Rusted Firmware-A once the project matures. Our intent is to eventually do all new firmware development in Rusted Firmware-A.
However:
* C TF-A will __not__ be deprecated or end-of-lifed immediately.
* LTS branches of C TF-A will remain fully supported for their 7-year lifetime durations.
* Partners and vendors can continue using C TF-A for existing and upcoming products.

## Get Involved
Rusted Firmware-A is early but promising. The v0.1 release is available. clone the repository, explore the issues, and let us know what you think.

Whether you’re considering adoption or contribution, your feedback is essential. Please share your thoughts:
* Publicly (via mailing list and Discord)
* Or via Tech forum meetings

We’re especially interested in:
* Features you depend on
* Hardware-specific constraints
* Preferred timelines for adoption
* Migration blockers and integration concerns
* Candidates for new Arm architecture crates

Let’s build the next generation of secure Arm firmware together.



## FAQs

1. __Why write Rusted Firmware-A in Rust?__<br>
To ensure memory safety, reduce legacy baggage, improve maintainability, and leverage Rust’s type system to catch more bugs earlier.

2. __Is C TF-A flawed?__<br>
Absolutely not. It has served us well. Rusted Firmware-A is an opportunity for a modern reimplementation.

3. __Will both versions be developed in parallel?__<br>
For now, yes. But maintaining feature parity long-term is unsustainable. Eventually, Rusted Firmware-A will become the default for new development.

4. __What if I need features missing in Rusted Firmware-A?__<br>
Rusted Firmware-A will not support all the features supported by TF-A today. Please continue using C TF-A if those are required.

5. __Where can I find the RUSTED FIRMWARE-A roadmap and status?__<br>
We’ll publish a roadmap shortly. In the meantime, track our [GitHub issues](https://github.com/RustedFirmware-A/rusted-firmware-a/issues).

6. __Are there plans to transition other Trusted Firmware projects to Rust?__<br>
There are currently no plans to transition other Trusted Firmware projects to Rust. The existing projects will continue to be actively maintained in their current implementation languages.

## About TrustedFirmware.org

TrustedFirmware.org is an open source project implementing foundational software components for creating secure devices. Trusted Firmware provides a reference implementation of secure software for processors implementing both the A-Profile and M-Profile Arm architecture. It provides SoC developers and OEMs with a reference trusted code base complying with the relevant Arm specifications. Trusted Firmware code is the preferred implementation of Arm specifications, allowing quick and easy porting to modern chips and platforms. This forms the foundations of a Trusted Execution Environment (TEE) on application processors, or the Secure Processing Environment (SPE) of microcontrollers.

[TrustedFirmware.org](https://www.trustedfirmware.org) is member driven and member funded.

To learn more about membership and its benefits, please see the [following page](/about) or send a request for more information to enquiries@trustedfirmware.org.
