---
title: News
news: true
permalink: /news/
description: >
  View the Trusted Firmware news.
flow:
  - row: container_row
    sections:
      - format: custom_include
        source: blog/post_search.html
        payload:
          name: url
          data: /assets/json/posts.json
          category: News
      - format: custom_include
        source: blog/display_latest_posts.html
        category: News
      - format: buttons
        style: text-center
        buttons_content:
          - title: View all
            url: /news/all/
            style: btn btn-green text-uppercase
---
