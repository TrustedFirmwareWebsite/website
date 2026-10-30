/// <reference path="./.sst/platform/config.d.ts" />

// SST is only used for PR deploy previews. Production is deployed to the
// existing S3 bucket and CloudFront distribution by .github/workflows/push.yml.
//
// The site is built by build_pr.yml (an unprivileged job) and the resulting
// dist folder is downloaded by deploy_preview.yml, so SST just uploads the
// pre-built files rather than running the build itself.
export default $config({
  app(input) {
    return {
      name: "tf-website",
      removal: "remove",
      home: "aws",
      providers: {
        aws: {
          region: "us-east-1",
        },
      },
    };
  },
  async run() {
    const site = new sst.aws.StaticSite("TF-Website", {
      path: "dist",
    });
    return {
      url: site.url,
    };
  },
});
