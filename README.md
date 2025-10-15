# Trusted Firmware Website

This is the git repository for the Trusted Firmware website.

## Project Structure

The content of the website is located in the `src/content` folder of the repo, spread across various folders, referred to as "collections".

```text

├── src/

│   └── content/

│       └── authors/

│       └── blog/

│       └── data/

│       └── news/

│       └── meetings/

│       └── pages/

│       └── projects/

│       └── rows/

│       └── sections/

```

## Content

### Pages

Pages can be edited via the relevant `.md` files in the `src/content/pages` folder. The `slug` property of the frontmatter determines the resulting url of the page.

New layouts can be built by adding rows and sections to the `flow` property of a page's frontmatter. This property defines a series of row components that contain section components to build the page. The `row` property of `flow` and the `component` property of a `sections` item must both reference a filename (without extension) within the `row` and `section` collections respectively. These files in turn contain a path that points to the specified component.

```yaml
- flow:
    - row: container_row
      sections:
        - component: members
```

`container_row` here references `src/content/rows/container_row.md` and `members` references `src/content/sections/members.md`

If a new row or section component is required, please contact [it-support@linaro.org](mailto:it-support@linaro.org).

To render the `.md` content of the page file, please use the `md_content` component as follows.

```yaml
- row: container_row
    sections:
      - component: md_content
```

### News, Blogs, Meetings

News, blog and meetings items can be added in the relevant folder within `src/content`. Please follow the format of the existing items, as the schema is explicitly enforced and the project will fail to build (on purpose) if it is not followed correctly.

Note that the `author` field must reference items in the `authors` content collections by filename (without extension).

For example

```yaml
author: trusted-firmware
title: TrustedFirmware.org chooses ECLAIR to reinforce Code Verification and Safety
```

`trusted-firmware` here references `src/content/authors/trusted-firmware.md`

### Projects

Projects can be added/edited within the `src/content/projects` folder. Please follow the schema of existing items to avoid build failures. Project lists, including the SVG icons will be updated automatically when items are added or amended.

### Data

The `src/content/data` folder contains various lists of one-off items used in the site, such as nav links, footer links and members. Any items added to these lists will be reflected in the website.

## Assets

### Images

Images should be placed in the `src/assets` folder and referenced by relative file paths within content collection `.md` files. e.g. `../../assets/images/test_image.jpeg`. This ensures that the images are optimized at build time, improving website performance.

### Docs

Documents should be placed in the `public/docs` folder and referenced by relative url paths within content collection `.md` files e.g. `/docs/test_file.pdf`. This ensures that the documents are hosted on publicly accessible urls.

## Developer Info

Running the site locally will require `Node.js` (>=18) and the `yarn` package manager.

First, install dependencies with `yarn install`.

The following commands can then be used to build and run the site locally:

| Command        | Description                                                                                                                                                                             |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `yarn build`   | Builds the site in the `dist` folder of the root directory.                                                                                                                             |
| `yarn dev`     | Runs the site in a development server, with hot module replacement to reflect updates to the code as soon as they are saved.                                                            |
| `yarn preview` | Runs the most recent build files in a development server. Unlike `yarn dev` this won't have live updates, but will be a closer representation of the site as it would be in deployment. |

## Questions?

If you have any questions about updating or building this website, please contact Linaro IT Support at [it-support@linaro.org](mailto:it-support@linaro.org).
