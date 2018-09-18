title	date	categories	layout
Trusted Firmware
Trusted Firmware at the Open Source Firmware Conference (OSFC)
2018-09-18 05:00:00 -0700
Blog
post


Trusted Firmware at the Open Source Firmware Conference (OSFC) – (Erlangen, 12-15 Sep 2018)
=================================================================================
The Trusted Firmware-A team attended last week the first Open Source Firmware Conference (OSFC - https://osfc.io/) in Erlangen, Germany.
Hosted by Siemens, 9 Elements and FAU, this was the very first conference all around open firmware, bringing together software companies, big data centre providers, industry players and software enthusiasts to talk about hot topics and latest trends in the firmware space.
The conference was sponsored by Arm, Facebook, Google, Intel, OpenSUSE, Secunet and Siemens, and it featured the presence of all the major open source firmware projects: Coreboot, LinuxBoot, Tianocore EDK2, Petitboot, U-Boot, HardenedLinux, OpenBMC and obviously Trusted Firmware.
Sandrine Bailleux from Arm gave an overview of Trusted Firmware-A and the trustedfirmware.org project (1) and then she presented in detail the new Secure Partition architecture that is currently under active development (see also (2)(3)).
The primary goal of this architecture is to provide software isolation and unprivileged execution environments under the control of the privileged (EL3) firmware to instantiate PI Standalone Management Mode (4) in the Secure world, in order to execute Management Mode services like RAS, Secure Variable access, Secure Firmware update.
Moreover, as the Arm architecture moves forward, embracing needs from different market segments, so does the reference software implementation provided by Trusted Firmware.
Therefore, as the Armv8.4 architecture introduces the Secure EL2 extension, adding support for virtualization in the Secure world, the natural evolution of the Secure Partition software architecture will also enable a scenario in which multiple mutually-mistrusting Secure EL1 software components (Trusted OSs, specific platform firmware and so on), coming from different vendors, will all coexist in the Secure world leveraging full isolation of address spaces, standard APIs to communicate with the underlying Secure EL2 software, and with the additional possibility of being audited separately from each other (5).
Sandrine's talk was well received, and it raised lot of interest around this enablement. It was also immediately followed by another Trusted Firmware presentation from Julius Werner, Google, in which he described their Coreboot - Trusted Firmware-A solution deployed on Chromebooks.
The Arm team had also other follow ups with various industry players around interesting topics like Secure Firmware update, firmware testing and validation, firmware documentation (the Trusted Firmware one was praised to be particularly well done!), firmware complexity and an increasing need for limiting it in the privileged firmware space to reduce the potential attack surface.
In conclusion, a well-attended conference where all firmware enthusiasts could share their ideas and projects for expanding and nurturing even more an already well-established open source firmware ecosystem!
https://osfc.io/talks/secure-partitions-in-trusted-firmware-a
https://connect.linaro.org/resources/hkg18/hkg18-104/
https://github.com/ARM-software/arm-trusted-firmware/blob/master/docs/secure-partition-manager-design.rst
http://www.uefi.org/sites/default/files/resources/PI_Spec_1_6.pdf
https://developer.arm.com/-/media/Files/pdf/Isolation_using_virtualization_in_the_Secure_World_Whitepaper.pdf


