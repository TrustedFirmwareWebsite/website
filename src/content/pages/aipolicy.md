---
layout: ../../layouts/Flow.astro
title: AI Policy
description: Guidance on AI-assisted contributions
slug: aipolicy/
hero:
  title: AI Policy
  style: text-white
  description: ""
  background_image: "../../assets/images/TF_Banner_image.jpg"
flow:
  - row: main_content_row
    sections:
      - component: md_content
---

# Guidance on AI-assisted contributions

Trusted Firmware projects continue to benefit from the contributions of a broad and diverse
community of developers within the open-source ecosystem. As AI technology rapidly evolves,
developers are increasingly leveraging AI tools to assist them in code creation.
Trusted Firmware projects can accept contributions where AI has been used in their creation.
These contributions should follow the contribution guidelines and license terms stipulated by the
individual projects. The following should be carefully considered for such contributions.

1.   Contributors should ensure that the terms and conditions of the generative AI tool do not place
any contractual restrictions on how the tool’s output can be used that are inconsistent with the
project’s license, contribution guidelines or the [Open Source Definition](https://opensource.org/osd/).

2.   If any pre-existing copyrighted materials (including pre-existing open source code) authored or
owned by third parties are included in the AI tool’s output, prior to contributing such output to the
project, the Contributor should confirm that they have permission from the third party
owners–such as the form of an open source license or public domain declaration that complies
with the project’s licensing policies–to use and modify such pre-existing materials and contribute
them to the project. Additionally, the contributor should provide notice and attribution of such third
party rights, along with information about the applicable license terms, with their contribution.

Some tools provide features that can assist contributors with the above. For example, some provide a
feature that suppresses responses that are similar to third party materials in the AI tool’s output, or a
feature that flags similarity between copyrighted training data or other materials owned by third parties
and the AI tool’s output and provides information about the licensing terms that apply to such third
party materials.

When providing contributions where AI tool has been used in their creation, a recommended practice
is for contributors to indicate the tooling used to create the contribution. This should be included as a
token in the source control commit message, for example including the phrase “Co-developed-by:”

Organizations that employ open source developers may have more stringent guidelines related to use
of AI for software development. Contributors should comply with their employer’s policies when
contributing.

As AI is a rapidly evolving technology, policies will need to be re-evaluated and updated in response
to:

- Changes in the law.
- Changes in AI technology landscape and related tools.
- Changes in tolerance for risk and ambiguity among adopters of OSS.

The guidance is based on Linux Foundation guidance [here](https://www.linuxfoundation.org/legal/generative-ai), licensed under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
and Apache Software Foundation guidance [here](https://www.apache.org/legal/generative-tooling.html), licensed under [Apache License
version 2.0](https://www.apache.org/licenses/LICENSE-2.0).
