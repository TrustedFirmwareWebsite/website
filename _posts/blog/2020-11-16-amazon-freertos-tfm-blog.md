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


<p align="center">
  <img src="/assets/images/blog/demo-overview2.png" />
</p>

<div align="center">Demo Overview</div>

<p align="center">
  <img src="/assets/images/blog/SystemConnection.png" />
</p>

<div align="center">System Connection Diagram</div>

<p align="center">
  <img src="/assets/images/blog/symmetric-attestation.png" />
</p>

<div align="center">Symmetric Attestation Block Diagram</div>


<p align="center">
  <img src="/assets/images/blog/workflow.png" />
</p>

<div align="center">Workflow Diagram</div>

