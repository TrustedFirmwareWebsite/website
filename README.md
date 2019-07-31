# trustedfirmware.org Static Jekyll Site

This is the git repository for the 96Boards.ai static Jekyll-based website.

Hosted in this repo are the markdown content files associated with the website. Feel free to [submit a
PR](https://github.com/TrustedFirmwareWebsite/website/pulls) / [Issue](https://github.com/TrustedFirmwareWebsite/website/issues/new) if there is anything you would like to change.

This static Jekyll site is using the [`jumbo-jekyll-theme`](https://github.com/linaro-marketing/jumbo-jekyll-theme). Please take a moment to review the guides on the [theme's GitHub wiki](https://github.com/linaro-marketing/jumbo-jekyll-theme/wiki).

*****

## Contributing

To make it easier to contribute to the content, Linaro provides a couple of Docker containers for building and checking the site. All you need is Docker installed on your computer and enough RAM and disc space.

To build the site:

```
cd <git repository directory>
./build-site.sh
```

To build the site and then serve it so that you can check your contribution appears:

```
cd <git repository directory>
JEKYLLACTION="serve" ./build-site.sh
```

To check that your contribution doesn't include any broken links:

```

cd <built web site directory>
../check-links.sh
```

The built web site directory will be `staging.trustedfirmware.org` unless you set `JEKYLLENV=production` before building the site, in which case the directory will be `production.trustedfirmware.org`.

For more information, please see the [build container wiki](https://github.com/linaro-its/jekyll-build-container/wiki) and the [link checker wiki](https://github.com/linaro-its/jekyll-link-checker/wiki).

*****
