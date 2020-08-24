---
url: /docs/self-hosted/0.5.0/install/install-on-aws-script/
---

# Install Gitpod on AWS

In order to deploy Gitpod to your Amazon Web Services account, simply run the following install script:

```bash
export AWS_ACCESS_KEY_ID=...
export AWS_SECRET_ACCESS_KEY=...
docker run --rm -it -e AWS_ACCESS_KEY_ID -e AWS_SECRET_ACCESS_KEY \
    -v /tmp/awsinstall:/workspace \
    eu.gcr.io/gitpod-core-dev/build/installer:cw-aws-installer-ii.3 aws
```

This will kickstart the installation process; authenticate with AWS; and automatically set up your Gitpod deployment using Docker and Terraform.

Once finished, it will print the URL at which your Gitpod installation can be found.

## Notes:

- The local mount point `/tmp/gpinstall` will hold your Terraform config files. You can always modify them and re-run the install script in order to make changes to your Gitpod deployment.

- The local mount point `/tmp/gc` will cache your Google Cloud credentials. It is safe to delete this folder if you don't wish to leave any tokens behind.

# Going further

- Configuring a [custom domain](../domain)
- Configuring [HTTPS Certificates](../https-certs)
