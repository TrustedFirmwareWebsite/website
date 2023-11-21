---
title: Meetings
meeting: true
slug: meetings/
description: >
  View the open Trusted Firmware meetings.
layout: ../../layouts/Flow.astro
flow:
  - row: container_row
    sections:
      - component: meetings_calendar
      - component: text
        style: text-center
        text_content:
          text: |-
            If you use a non-Google calendar system and can subscribe to an iCal link or import an ICS file, please use <a href="https://calendar.google.com/calendar/ical/linaro.org_havjv2figrh5egaiurb229pd8c%40group.calendar.google.com/public/basic.ics">this link</a>.
      - component: buttons
        style: text-center
        buttons_content:
          - title: TF-A Tech Forum Minutes
            url: /meetings/tf-a-technical-forum/
            style: bg-accent hover:bg-cyan-600 text-white my-1
          - title: TF-M Tech Forum Notes
            url: /meetings/tf-m-technical-forum/
            style: bg-accent hover:bg-cyan-600 text-white my-1
          - title: MBed TLS Tech Forum Minutes
            url: /meetings/mbed-tls-technical-forum/
            style: bg-accent hover:bg-cyan-600 text-white my-1
          - title: OP-TEE Contributions Forum Minutes
            url: https://bit.ly/loc-notes
            style: bg-accent hover:bg-cyan-600 text-white my-1
          - title: MCUboot Tech Forum Minutes
            url: /meetings/mcuboot-technical-forum
            style: bg-accent hover:bg-cyan-600 text-white my-1
  - row: article_grid
    collection: meetings
    sections: []
---
