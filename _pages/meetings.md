---
title: Meetings
meeting: true
permalink: /meetings/
description: >
  View the open Trusted Firmware meetings.
flow:
  - row: container_row
    sections:
      - format: custom_include
        source: meetings_calendar.html
      - format: custom_include
        source: blog/post_search.html
        payload:
          name: url
          data: /assets/json/posts.json
          category: Meetings
      - format: custom_include
        source: blog/display_latest_posts.html
        category: Meetings
---
