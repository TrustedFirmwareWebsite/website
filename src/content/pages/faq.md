---
layout: ../../layouts/Flow.astro
title: FAQ
description: Trusted Firwmare frequently asked questions (FAQ)
slug: faq/
hero:
  title: Frequently Asked Questions
  style: text-white
  description: ""
  background_image: "../../assets/images/TF_Banner_image.jpg"
flow:
  - row: container_row
    sections:
      - component: collapse
        style: #
        panels:
          - title: Can I use AI assistants when contributing code?
            content: |
              Trusted Firmware projects can accept contributions where AI has been used in their creation.
              These contributions should follow the contribution guidelines and license terms stipulated by the individual projects. See more in [about->AI Policy](/aipolicy/).          
          - title: How can I join the TrustedFirmware Discord Server chat channels?
            content: |
              The TrustedFirmware Discord server is located [here](https://discord.com/channels/1106321706588577904/1144310640341700739).

              If you aren't already a member, please click on the invite link [here](https://discord.gg/5PpXhvda5p).
              Note you may have to create a Discord account first if you don't already have one.
              Welcome!
          - title: How do I join the TrustedFirmware technical mail lists?
            content: |
              To go to the mailists, [click here](https://lists.trustedfirmware.org/mailman3/lists/?all-lists=&page=1) and choose the list(s) you wish to subscribe. The Archives are available as a resource here as well.
          - title: Are technical mail lists searchable?
            content: |
              Yes they are and this can be a great place to start when you may be stuck.
              To search the archives, most search engines support queries that include the domain name you're interested in: `search terms domain-name`.
              For example:
              ```
              OP-TEE lists.trustedfirmware.org
              ```
          - title: What's a good way to get notifications of the latest releases from TrustedFirmware.org?
            content: |
              There are two good ways to do this.  For individual projects, subscribe to the associated mail list.

              To recieve notifications of all the project releases along with other interesting content such as whitepapers and blogs, you are encouraged to follow the TrustedFirmware.org LinkedIn channel [here](https://www.linkedin.com/company/82960623/admin/feed/posts/)
          - title: Are there other firmware-related chatrooms worth following?
            content: |
              Yes. There is an Open Source Firmware channel that can be found on slack at https://osfw.slack.com/
          - title: Is there a project Wiki?
            content: |
              As of March 2024, the traditional project wiki has been deprecated with its content moved to a project-wide readthedocs instance that is located [here](https://trusted-firmware-docs.readthedocs.io/en/latest/index.html) as well as the per-project readthedocs content available for each project.
              Access requires logging in with a valid GitHub account. Additional access provided to members as needed.
          - title: Where can I find the current roadmaps for TrustedFirmware.org projects?
            content: |
              A summary page of the various projects roadmaps can be found [here](https://trusted-firmware-docs.readthedocs.io/en/latest/general_information/trusted_firmware_roadmaps.html). All members are encouraged to contribute to the roadmap here with either change requests or their own planned contributions.
          - title: Where can I find the TrustedFirmware.org developer Community Code of Conduct?
            content: |
              The Community Code of Conduct is [located here.](https://www.trustedfirmware.org/coc/)
              The TrustedFirmware Inclusive Language Policy can be found on the same page as the Community Code of Conduct.
          - title: Where can I find details about the governance model? Where can I find details about membership?
            content: |
              For details of the governance model, please visit the [about->join](/join/) page of this website and click on the downloadable current version of the Charter.
              Please email [enquiries@trustedfirmware.org](mailto:enquiries@trustedfirmware.org) for any questions regarding membership.
          - title: Where can I find the rules around TSC participation and voting?
            content: |
              This is found in the Project Charter. Please visit the [about->join](/join/) page of this website and click on the downloadable current version of the Charter for details.
              Please email [enquiries@trustedfirmware.org](mailto:enquiries@trustedfirmware.org) for any questions regarding membership.
          - title: Is there a clear role and responsibility for Linaro?
            content: |
              Linaro is a Platinum Member of the Trusted Firmware project and provides governance, hosting and other services.
          - title: What's TBBR? Do we have detailed spec for TBBR?
            content: |
              Trusted Board Boot Requirements Client (TBBR-Client) is an Arm specification that defines the basic requirements implemented by TF-A for Trusted Boot. It can be found [at this link](https://developer.arm.com/documentation/den0006/latest).
          - title: Will TF-A continue its presence on GitHub?
            content: |
              TF-A is migrating from GitHub to TrustedFirmware.org Git and Gerrit repositories. Details on the migration plan can be found [here](https://github.com/ARM-software/tf-issues/issues/681).
          - title: Are there more Frequently Asked Questions about TF-M?
            content: |
              We're building the TF-M FAQ. [See here for more details](https://developer.trustedfirmware.org/ponder/query/all/)
          - title: How can I purchase TrustedFirmware.org shirts, hats, and other gear?
            content: |
              To purchase in the US/North America, use [this URL](https://trustedfirmware.myspreadshop.com/)
              To purchase in Europe, go to the UK store [here](https://trustedfirmwareorg.myspreadshop.co.uk/)
              If you wish to purchase a gift voucher for another person, use the following links:
              - [Vouchers for US/NA Store](https://www.spreadshirt.com/custom/gifts/gift-cards)
              - [Vouchers for UK/Europe store](https://www.spreadshirt.co.uk/personalised/gifts/gift-voucher)
          - title: Where can I find the archives of past presentations and meeting archives?
            content: |
              The best place to start is the public meeting archives for multiple TrustedFirmware projects. These often include recorded technical meetings enabling content review at the convenience of the listener.

              - Technical Meetings home page [located here](/meetings/)

            There are additional locations useful for historical presentation/meeting archives located here:
              - TF-A Presentation archive is [located here](https://developer.trustedfirmware.org/w/tf_a/)
              - OP-TEE presentation archive is [located here](https://optee.readthedocs.io/en/latest/general/presentations.html)
              - Tech Meeting minutes/presentation archives are [located here](/meetings/)
---
