---
url: /docs/self-hosted/0.5.0/install/install-on-aws-script/
---

# Install Gitpod on AWS

In order to deploy Gitpod to your Amazon Web Services account, you can use this one-line install script:

```bash
docker run --rm -it -v /tmp/gc:/root/.config/gcloud -v /tmp/gpinstall:/workspace eu.gcr.io/gitpod-core-dev/build/installer:master.64 aws
```

This will download a Docker image with Gitpod's Terraform scripts and Terraform itself, and kickstart the installation process, asking you a few questions along the way.
