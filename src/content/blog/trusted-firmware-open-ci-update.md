---
author: trusted-firmware
title: Trusted Firmware Open CI
date: 2019-06-24 10:00:00

image: "../../assets/images/blog/TFMCI.png"
---

As an Open Source community project, Trusted Firmware is committed to building a platform that
allows the development of Trusted Firmware-A and Trusted Firmware-M in a collaborative manner. The
[mailing list](/contact/) discussions on the design and other technical
aspects of the code base, open [gerrit](https://review.trustedfirmware.org/) for reviewing patches
publicly, [phabricator tasks](https://developer.trustedfirmware.org/) etc. are all aimed towards nurturing
collaboration.

Testing of the codebase is an important aspect in the Software Development Lifecycle. In projects such
as Trusted Firmware-A and Trusted Firmware-M, where the codebase is continuously evolving with new
features, enhancements, different build configurations, multiple platform support and contributions
from across the Arm ecosystem, it is essential to have a Continuous Integration (CI) System. It ensures
that the development of the codebase doesn’t introduce any regression on existing capabilities in the
system and enforces functional and quality criteria on all new accepted changes.

Over the last several years, it has become increasingly important to have a CI system for Software
projects as they go through development to ensure that a pre-set quality level is always maintained in
the codebase avoiding wasting engineering time to spot regressions after being introduced thus
effectively reducing the development and maintenance cost for the project.

As a community project, Trusted Firmware obviously needs a Continuous Integration System that is
available and visible to all Trusted Firmware developers and stakeholders. This makes it possible for
Trusted Firmware developers to see if their proposed changes pass all mandatory tests and address any
possible regression before merging it to the codebase. It also gives an exact view on the quality level of
the code base to the stakeholders.

As a first step, there is now an initial deployment of an Open Trusted Firmware-M CI in the Trusted
Firmware infrastructure hosted by Linaro. As shown in the diagram below, every patch submitted in TF-
M [gerrit](https://review.trustedfirmware.org) is communicated to Jenkins through a web-hook trigger.
Jenkins will capture that information
and build different configurations on a docker build slave. Once this stage is complete, the generated
artefacts can be deployed and tested on FPGA or Hardware platforms through Linaro’s LAVA. In the final
step, Jenkins collects all the information into a report, and determines the pass/fail status of a patch
which is then communicated back to gerrit. In this initial deployment LAVA runs the TF-M regression test on
an MPS2+ board.

![TF Open CI](../../assets/images/blog/TFMCI.png)

This has now made it possible to verify whether any new patch pushed to gerrit is introducing any
regression. There are more MPS2+ boards getting added to make it possible to get through the testing
of the patches submitted in gerrit quicker.

Beyond this initial deployment, there are several enhancements being planned such as adding more
build configurations, static analysis checks, results displayed in dashboard, additional platforms from
Trusted Firmware members to increase coverage. Additional regression tests and nightly regression
testing of the master branch will also get added. Trusted Firmware-A will also have a similar CI deployed
soon.

The initial CI deployment is another milestone in the collaborative journey of Trusted Firmware making
the testing completely transparent and stakeholders to jointly maintain and increase the quality of the
Trusted Firmware project.

Useful links:

TF-M CI Portal: [ci.trustedfirmware.org](https://ci.trustedfirmware.org/)

Sample LAVA Tests Results: [validation.linaro.org/scheduler/job/1919709](https://validation.linaro.org/results/)

Author: Shebu Varghese Kuriakose
