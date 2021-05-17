---
title: Open CI
description: >
  DESCRIPTION TEXT NEEDED.
layout: project
icons:
  - svgs/TF_Icon_OpenCI.svg
calls_to_action:
  - text: Contribute/Submit Code
    url: https://tf-ci-users-guide.readthedocs.io/en/latest/#how-to-contribute-code
#   - text: Join the TF-A Tech Forum
#     class: bg-green
#     url: https://www.trustedfirmware.org/meetings/tf-a-technical-forum/
links:
  documentation:
    text: Open CI Documentation
    url: https://tf-ci-users-guide.readthedocs.io/en/latest/
  code:
    text: View source code and documentation
    url: https://git.trustedfirmware.org/?q=ci
  review:
    text: "Gerrit review"
    url: https://review.trustedfirmware.org/q/project:ci/tf-ci-users-guide
  subscribe:
    text: Subscribe to the Open CI mailing list
    url: https://lists.trustedfirmware.org/mailman/listinfo/tf-openci
useful_links:
  - text: Ongoing CI build jobs
    url: https://ci.trustedfirmware.org/
  - text: Devices using Open CI to validate Trusted Firmware solutions
    url: https://tf.validation.linaro.org/scheduler/device_types
top_text: |-
  The Trusted Firmware **Open CI** (Continuous Integration) is a cloud-based CI infrastructure that leverages multiple components including Gerrit, Jenkins and [LAVA](https://lavasoftware.org/) to create a comprehensive end-to-end integration and test infrastructure.  It is currently leveraged by TF-M, TF-A, and Hafnium, with potentially other TrustedFirmware supported projects in the future. Open CI supports static analysis tools to increase code quality. It’s also the mechanism to approve merge requests (thru maintainer approvals) as well the ability to create source code release tags. Finally, with the back end of Open CI connected to a physical Open CI hardware lab that leverages LAVA, it validates that code changes made into the source tree actually run on [multiple hardware platforms that are currently available in the lab.](https://tf.validation.linaro.org/scheduler/device_types) Arm [Fixed Virtual Platform (FVP)](https://developer.arm.com/tools-and-software/simulation-models/fixed-virtual-platforms) software emulators are also made available and leveraged by the TrustedFirmware development community.

  Contribution guidelines can be found in the documentation.

  Please subscribe to the project email list to participate in development discussions.
sort_key: 7
---
