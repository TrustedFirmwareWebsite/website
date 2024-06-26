---
layout: "../../layouts/Flow.astro"
title: Code of Conduct
description: Trusted Firmware Code of Conduct and Inclusive Lanugage Policy
slug: coc/
jumbotron:
  title: TrustedFirmware.org Code of Conduct and Inclusive Language Policy
  style: text-white
  description: ""
  image: "../../assets/images/TF_Banner_image.jpg"
flow:
  - row: main_content_row
    sections:
      - component: md_content
---

# Contributor Covenant Code of Conduct

### Our Pledge

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to make participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, sex characteristics, gender identity and expression,
level of experience, education, socio-economic status, nationality, personal
appearance, race, religion, or sexual identity and orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment
include:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

- The use of sexualized language or imagery and unwelcome sexual attention or
  advances
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information, such as a physical or electronic
  address, without explicit permission
- Other conduct which could reasonably be considered inappropriate in a
  professional setting

### Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable
behavior and are expected to take appropriate and fair corrective action in
response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other contributions
that are not aligned to this Code of Conduct, or to ban temporarily or
permanently any contributor for other behaviors that they deem inappropriate,
threatening, offensive, or harmful.

### Scope

This Code of Conduct applies within all project spaces, and it also applies when
an individual is representing the project or its community in public spaces.
Examples of representing a project or community include using an official
project e-mail address, posting via an official social media account, or acting
as an appointed representative at an online or offline event. Representation of
a project may be further defined and clarified by project maintainers.

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting the project team at enquiries@trustedfirmware.org. All
complaints will be reviewed and investigated and will result in a response that
is deemed necessary and appropriate to the circumstances. The project team is
obligated to maintain confidentiality with regard to the reporter of an incident.
Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good
faith may face temporary or permanent repercussions as determined by other
members of the project's leadership.

## Attribution

This Code of Conduct is adapted from the [Contributor Covenant](https://www.contributor-covenant.org), version 1.4, available at https://www.contributor-covenant.org/version/1/4/code-of-conduct.html

For answers to common questions about this code of conduct, see https://www.contributor-covenant.org/faq1

# Inclusive Language Policy

TrustedFirmware.org has strict policy that requires use of inclusive language in all the projects which are part this organization. Any terminology that is against this policy is banned from being used in any part of TrustedFirmware.org.

### General terms

Terms listed here may not normally be part of code but are barred from use within the project regardless.

- Blackball

### Coding Standard

Maintainers are required to adopt the specific addition below to their coding guidelines and ensure adherence to it. Project has code and documents which predate this policy and the current guideline does not mandate a retrospective action.

```
==================

Inclusive Language
------------------

The use of the terms "blacklist / whitelist" and "master / slave" in
code and documentation is considered deprecated and should be avoided
for new submissions. The former can usually be substituted with
"blocklist / allowlist". Suitable substitutes for the latter should be
selected based on the individual situation. Common examples include
"controller / peripheral", "host / device", "initiator / target" or
"main / secondary".

Exceptions can be made in cases where the code or documentation is
directly referring to hardware that already uses these terms (e.g. in
register names) or to a common industry standard (until an updated
version of that standard avoiding these terms is available).
```
