---
url: /docs/self-hosted/0.5.0/install/install-on-gcp-script/
---

# Install Gitpod on GCP

Gitpod runs best on Google Cloud Platform. That's also where [gitpod.io](https://gitpod.io) is deployed and operated at scale.

To deploy Gitpod to your Google Cloud Platform account, simply follow these steps:

1. Install [Docker](https://www.docker.com/)
2. Create a new [Google Cloud project](https://cloud.google.com/resource-manager/docs/creating-managing-projects) for Gitpod, and keep the project ID at hand
3. Run this install script:

```bash
docker run --rm -it \
    -v ./gcloud:/root/.config/gcloud \
    -v ./gpinstall:/workspace \
    eu.gcr.io/gitpod-core-dev/build/installer:latest \
    gcp
```

This will kickstart the installation process, log in with Google Cloud, and automatically set up your Gitpod deployment using [Terraform](https://www.terraform.io) and [Helm](https://helm.sh).

- The local mount point `./gpinstall` will hold your Terraform config files. You can always modify them and re-run the install script in order to make changes to your Gitpod deployment.

- The local mount point `./gcloud` will cache your Google Cloud credentials. It is safe to delete this folder if you don't wish to leave any tokens behind.

Once the installation process is complete, the script will print the URL at which your Gitpod installation can be accessed.

<br><br>

# Going further

- Using a [custom domain](../domain/)
- Configuring a [custom Docker registry](../docker-registry/)
- Configuring a [storage backend](../storage/)
- Configuring [workspace sizes](../workspaces/)
