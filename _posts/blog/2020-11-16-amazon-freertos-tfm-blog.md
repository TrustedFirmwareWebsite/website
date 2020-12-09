---
author: David.Wang
title: Amazon FreeRTOS Gateway Demo based on Trusted Firmware-M Profile Small 
date: 2020-11-16 10:00:00
categories:
- Blog
layout: post
image: /assets/images/blog/musca_tf_crop_1500x1500.png
---

**Amazon FreeRTOS Gateway Demo based on Trusted Firmware-M Profile Small**
==========================================================================

Introduction
------------

The typical IoT design uses Secure Socket based on TLS to connect the IoT device and cloud for security. When TLS connection is established, the upper level protocol can be applied on top of it to build the communication channel between the device and cloud application.

In the current market, the IoT Cloud venders usually use Certificate and Asymmetric based TLS cipher suite for the TLS connection. It requires the support of both symmetric and asymmetric cryptography.

The capabilities and resources may dramatically vary on different IoT devices. Some IoT devices may have very limited memory resource. The program on those devices should keep small memory footprint and basic functionalities.

TF-M [Profile Small](https://git.trustedfirmware.org/TF-M/trusted-firmware-m.git/tree/docs/design_documents/profiles/tfm_profile_small.rst) doesn't by default include asymmetric cryptography. Hence, it doesn't support the asymmetric based TLS (TLS for short) connection which is using by the typical IoT cloud service vendors.

To establish a secure channel, the symmetric cipher suite based connection is required. TLS Pre-Shared Key (PSK) is a good choice. Refer to the links below for more information about TLS PSK:

- [RFC 4279](https://tools.ietf.org/html/rfc4279): "Pre-Shared Key Ciphersuites for Transport Layer Security (TLS)".
- [RFC 4785](https://tools.ietf.org/html/rfc4785): "Pre-Shared Key (PSK) Ciphersuites with NULL Encryption for Transport Layer Security (TLS)".
- [RFC 5487](https://tools.ietf.org/html/rfc5487): "Pre-Shared Key Cipher Suites for TLS with SHA-256/384 and AES Galois Counter Mode".
- [RFC 5489](https://tools.ietf.org/html/rfc5489): "ECDHE_PSK Cipher Suites for Transport Layer Security (TLS)".

To connect TF-M Profile Small based device to the cloud, a gateway is needed to establish the secure channels with both the device (via TLS PSK) and the cloud (via TLS).

TF-M Profile Small also introduces the symmetric attestation. It is a useful approach for the gateway for verifying the device which is connecting to it.

Demo Overview
---------------------------

Let’s take a demo for the use case. In this demo, we use three Arm v8-m based devices – Arm Musca B1, LPC55S69 and STM32L5. Musca B1 and LPC55S69 have the temperature and humidity sensors connected. A secure partition (SP) in TF-M is created for collecting the data from the sensor. This SP is also responsible for packing the data for sending to the gateway.

The gateway is Raspberry Pi (RPi) in this demo. You can replace it with any device which can connect to AWS cloud directly. The major functionalities of the gateway:

- Connects to AWS Cloud via TLS
- Connects to the device via TLS PSK
- Forward the messages securely between the device and cloud

{% include image.html path="/assets/images/blog/demo-overview2.png" alt="Demo Overview image" %}

<div align="center">Demo Overview</div>

System Connection
---------------------------

At the device side, Amazon FreeRTOS runs in Non-Secure Processing Environment (NSPE) and TF-M Profile Small runs in Secure Processing Environment (SPE). In NSPE, the TLS PSK client application is used to setup the TLS PSK connection with the gateway. 

The gateway runs Linux as the OS. It uses TLS PSK server application to establish the TLS PSK connection with the client application running in the device. On the other hand, the gateway uses the AWS IoT device application to securely connect to AWS cloud. The AWS IoT device application communicates with TLS PSK server application inside of the gateway for the message exchange between the device and AWS cloud.

{% include image.html path="/assets/images/blog/SystemConnection.png" alt="System Connection image" %}

<div align="center">System Connection Diagram</div>

Symmetric attestation
---------------------------

After the TLS PSK connection is established between the gateway and device, the gateway can conduct the Initial Attestation (IAT) to verify if the device is in an acceptable status. For more information of attestation, please check the [PSA website](https://developer.arm.com/architectures/security-architectures/platform-security-architecture).

{% include image.html path="/assets/images/blog/symmetric-attestation.png" alt="Symmetric Attestation image" %}

<div align="center">Symmetric Attestation Block Diagram</div>

Workflow
---------------------------

The overall workflow is shown as the diagram below.

{% include image.html path="/assets/images/blog/workflow.png" alt="Workflow image" %}

<div align="center">Workflow Diagram</div>

Establish the connections:
- The gateway establishes the secure connection with AWS cloud based on TLS 1.2
- The device tries to establish TLS PSK based connection with the gateway. The key derivation in the handshake stage is finished by TF-M crypto service which can access the PSK stored in TF-M secure storage. The client application running at NSPE can just indicate the location of the PSK by the key handle. The PSK can’t be exported to NSPE.
- The gateway acknowledges the request from the device and finishes the handshake as per the TLS PSK protocol.

Initial attestation:
- When TLS PSK connection is established, the gateway initiates the initial attestation challenge.
- The non-secure application of the device forwards the challenge to TF-M Initial attestation service to get the Initial Attestation Token (IAT) and sends back to the gateway.
- The gateway verifies the IAT – if the HMAC is correct and the device status is acceptable, then continues the application. Otherwise, the TLS PSK connection will be terminated by the gateway.

Secure sensor application:
- In this demo, two devices collect the temperature and humidity sensor data in the SP of TF-M and send to the gateway. One “monitor device” gets the sensor data forwarded by the gateway and prints it out. The device doesn’t talk to device directly.
- The NS application of the device communicates with the gateway via TLS PSK connection. The data will be forwarded to AWS cloud and monitor device.
- The protection for the data (integrity and/or confidentiality) is implementation defined. For example, use the pre-shared application key or runtime provision the key before communication.

Resources
---------------------------

This demo was presented at Linaro Virtual Connect 2020.

The slides and video could be found [here](https://connect.linaro.org/resources/lvc20/lvc20-213/).


