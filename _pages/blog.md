---
title: Blog
permalink: /blog/
description: >
  The official Trusted Firmware blog!
flow:
  - row: container_row
    sections:
      - format: custom_include
        source: blog/post_search.html
        payload:
          name: url
          data: /assets/json/posts.json
          category: Blog
        # category: News
      - format: custom_include
        source: blog/display_latest_posts.html
        category: Blog
      - format: buttons
        style: text-center
        buttons_content:
          - title: View all
            url: /blog/all/
            style: btn btn-green text-uppercase
---
