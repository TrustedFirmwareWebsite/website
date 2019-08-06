---
title: Open Portable Trusted Execution Environment
permalink: "/op-tee/"
description: >
    OP-TEE is an open source project which contains a full implementation to make up a complete Trusted Execution
    Environment. The project has roots in a proprietary solution, initially created by ST-Ericsson and then owned and
    maintained by STMicroelectronics. In 2014, Linaro started working with STMicroelectronics to transform the proprietary
    TEE solution into an open source TEE solution instead. In September 2015, the ownership was transferred to Linaro.
    Today it is one of the key security projects in Linaro, with several of Linaro’s members supporting and using it.
layout: jumbotron
css-package: op-tee
jumbotron:
    triangle-divider: true
    image: /assets/images/OP-TEE-Logo.svg
    background-image: /assets/images/op-tee-background-image.jpg
    description: >-
        Isolation ● Small footprint ● Portability
    buttons:
        - title: Get Involved
          url: /contact/
          class: btn btn-primary btn-lg bottom-border-five
---
<div class="row content" id="content-container">
<div class="container text-center" id="homepage-text" markdown="1">
OP-TEE was initially developed by ST-Ericsson (and later on by STMicroelectronics), but this was before OP-TEE got the
name “OP-TEE” and was turned into an open source project. Back then it was a closed source and a proprietary TEE
project. In 2013, ST-Ericsson obtained GlobalPlatform’s compliance qualification with this implementation, proving that
the APIs were behaving as expected according to the GlobalPlatform specifications.

Later on the same year (2013) Linaro was about to form Security Working Group (SWG) and one of the initial key tasks for
SWG was to work on an open source TEE project. After talking to various TEE vendors Linaro ended up working with
STMicroelectronics TEE project. But before being able to open source it there was a need to replace some proprietary
components with open source components. For a couple of months Linaro/SWG together with engineers from
STMicroelectronics re-wrote major parts (crypto library, secure monitor, build system etc), cleaned up the project by
enforcing [Coding standards](https://optee.readthedocs.io/general/coding_standards.html#coding-standards),
running [checkpatch](http://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/tree/scripts/checkpatch.pl) etc.

June 12 2014 was the day when OP-TEE was “born” as an open source project. At that day the OP-TEE team pushed the [first
commit](https://github.com/OP-TEE/optee_os/commit/b01047730e77127c23a36591643eeb8bb0487d68) to GitHub. A bit after this
Linaro also made a [press release](https://www.linaro.org/blog/op-tee-open-source-security-mass-market/) about this.
That press release contains a bit more information. At the first year as an open source project it was owned by
STMicroelectronics but maintained by Linaro and STMicroelectronics. In 2015 there was an ownership transfer of OP-TEE
from STMicroelectronics to Linaro and since then it has been Linaro who is the primary owner and maintainer of the
project. But for the maintenance part, it has become a shared responsibility between Linaro, Linaro members and other
companies who are using OP-TEE.
</div>
</div>
