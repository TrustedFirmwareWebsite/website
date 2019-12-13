# Trusted Firmware @ Lyon, France

Last month saw hundreds of engineers, technologists and companies descend onto Lyon for a week full of jam-packed conferences and the Trusted Firmware-M (TF-M) workshop. The first half of the week saw TrustedFirmware.org presenting at the Embedded Linux Conference (ELC) conference as a bronze sponsor, and Thursday and Friday focussed on a TF-M workshop in the Mercure Lyon Centre Chateau Perrache with project members and engaging discussions. The week provided a great stage for everyone to come together and have strong and engaging discussions surrounding open source software, security and collaboration.

## ELC Conference
Trusted Firmware was a bronze sponsor at the ELC on Monday and Tuesday. Across both days, over 60 visitors visited the stalls, looking at the demos, learning more about the technology and taking away some stickers and leaflets with them! 

![Lyon_wkshop](assets/images/blog/Workshops at TF in Lyon.png)

During the event, TF-M presented 2 demos. The first looked at PSA solutions on Multicore.  As multiple processors become popular in IoT world, it is necessary to extend TF-M on Multi-Core use case for security. The goal of this demo was to show how TF-M provides secure services on multiple core system. The demo worked by TF-M starting on a secure core as a primary configuration in [PSA Firmware Framework IPC](https://developer.arm.com/-/media/Files/pdf/PlatformSecurityArchitecture/Architect/DEN0063-PSA_Firmware_Framework-1.0.0-2.pdf?revision=2d1429fa-4b5b-461a-a60e-4ef3d8f7f4b4&la=en&hash=BE8C59DBC98212591E1F935C2312D497011CD8C7)   Framework IPC mode. From there, Zephyr started on a non-secure core as remote, with openAMP and eRPC enabled. TF-M enables MHU to get a notification from the other core when openAMP gets messages and starts a thread to handle all eRPC requests from remote cores. The Zephyr application then called PSA Developer [Cryptography]( https://developer.arm.com/-/media/Files/pdf/PlatformSecurityArchitecture/Implement/IHI0086-PSA_Cryptography_API-1.0.0-beta.3-2.pdf?revision=1364a92e-4e1a-4619-a3a3-ca198b5b9e2e&la=en&hash=91A8A486D9CEFA1FCA9B715F9A12008EF05CB858), [Storage]( https://developer.arm.com/-/media/Files/pdf/PlatformSecurityArchitecture/Implement/IHI0087-PSA_Storage_API-1.0.0.pdf?revision=810a2412-bca0-46e1-a801-f48729a32e47&la=en&hash=6C88BDF8C74ACBAD0AED52CB4A6F6CF4117F3957) and [Attestation](https://developer.arm.com/-/media/Files/pdf/PlatformSecurityArchitecture/Implement/IHI0085-PSA_Attestation_API-1.0.0.pdf?revision=2becb0d1-b813-481b-ab00-88bf7ee5c53b&la=en&hash=F7E147E231010064424A0675BF96347131A6A5FC) APIs to run test cases. The function call serializes to the byte stream by eRPC client. The openAMP transfers all the bytes to the primary call for remote procedure call request. The primary core parses the byte stream with the same protocol by eRPC servers and finally the result is returned to the remote core through the eRPC and openAMP. 

The second demo shown during the ELCE was developed by Sherry Zhang in Arm. The secure demo presentation showed how payments can be IoT secured. They were simulated in 2 ways. The first showed a simulation of the hacked payment, where the device boots and goes into the non-secure RTOS.  During this demo, a UART command started the payment, which showed the user a reduced payment price – a fake price. It then went on to show the user from entering a UART command in order to confirm the payment. Once this was done, the device showed the real value of the payment, a bigger value than previously shown. The TF-M protected payment demo starts the same way as the hacked payment demo, where the user is shown a fake payment value, but instead, a desktop is shown on the LCD and the hacker thread randomly draws some squares to show it can take over the control of the display. When the UART payment command was entered, the user saw the payment screen which is under the control of the TF-M secure server. It will show the full amount payable, allowing the user to make the decision on whether to accept or decline the payment using a UART command. 

The booth was well received across all three days, with a lot of positive feedback on the work being done with TF-M as well as the demos. Technology managers and engineers were able to share their expertise and engage customers, project members and visitors.

## Trusted Firmware-M workshop
[Check out all the presentations from the workshop here](https://developer.trustedfirmware.org/w/tf_m/tf_demos_lyon/)


The last two days of the week looked at our eagerly awaited TF-M workshop, in the Mercure Hotel, Lyon. Here, 36people gathered to listen to 13 different talks on TF-M, collaborate and share ideas and suggestions on the future of TF-M. 

![OSFC19](/assets/images/blog/trusted firmware booth at ELC.png)
 
Thursday began with Shebu Kuriakose setting the scene, speaking about the running of the next two days and the purpose for the meetings. This then moved onto the keynote presented by Eric Finco, who spoke on the importance of collaboration in Trusted Firmware.  
Thursday Morning was governed by Ken Liu, Mate Toth-Pal, Miklos Balint, with presentations on Scheduler designs and Interrupt handling. After lunch, topics spanning mbedTLS, crypto hardware integration, and secure storage services were presented by Jamie Fox, Jaeden Amero, Antonio De Angelis, Tamas Ban, David Hu and Janos Follath. Towards the end of the day, Tamas Ban and David Hu presented on mcuboot & attestation services, and dual CPU design respectively.  Discussions were free and open, where attendees were able to ask questions and exchange knowledge.

Friday November 1st started with some welcome drinks before being immersed back into more engaging workshops. The morning presentations from David Wang, Abhishek Pandit, Shebu Kuriakose and Minos Galanakis covered topics including build systems, tooling support, open CI, TF-M profile and RTOS enablement. 

The final sessions for TF-M looked at the future of TF-M, providing a transparent and thought-provoking conversation about the future and how project members and enthusiasts can be involved. It allowed open discussions with active participation.
Overall, TF-M had a fantastic week in Lyon. It created a great opportunity for people to meet, network, connect and share information on the latest in secure platforms.  Both the workshops and demos attracted partners from across the world in one place and was an experience that many will not forget. A bi-weekly TF-M Tech Forum that is open for anyone to join is being organized by trustedfirmware.org from December 5th.Talks are in progress with a vision to make the workshop event an annual meeting, so keep your eyes peeled! 




