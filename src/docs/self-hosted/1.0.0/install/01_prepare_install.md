# Prepare for Installing Gitpod Self-Hosted

This document should help you make the right decisions before installing Gitpod Self-Hosted
and have everything in place to successfully finish the installation.

## Kubernetes
Gitpod runs in Kubernetes, and Gitpod workspaces are technically Kubernetes pods. Gitpod can be installed on Kubernetes using Helm.

Gitpod requires **Kubernetes 1.13** or newer.

## Domain
Gitpod requires a domain or a subdomain.
Since gitpod launches services and workspaces on additional subdomains, it also needs two wildcard doomains.

Example 1:

    your-domain.com
    *.your-domain.com
    *.ws.your-domain.com

Examples 2:

    gitpod.your-domain.com
    *.gitpod.your-domain.com
    *.gitpod.ws.your-domain.com`

## User Authorization and Git Integration
Gitpod uses the OAuth2 web flow to authorize users using an external auth provider.
By using a git hosting service as auth provider, Gitpod solves two use cases at once:
Control access to Gitpod and allow the user to access git repositories.

Gitpod supports the following authentication providers:
* github.com
* GitHub Enterprise in version 2.16.x and higher
* gitlab.com
* Gitlab Community Edition in version 11.7.x and higher
* Gitlab Enterprise Edition in version 11.7.x and higher
* Bitbucket — coming soon
* Custom Auth Provider – Inquiry TypeFox for a quote

## HTTPS certificates (optional)
While we highly recommend operating Gitpod behind secure HTTPS, Gitpod is rechncially able to run on insecure HTTP.
However, there is one exception: If you plan to use Gitpod's builtin Docker Registry,
you'll either need HTTPS or configure your cluster to pull from an insecure (HTTP) registry.

For running Gitpod on insecure HTTP, no HTTPS certificates are needed and you can skip this paragraph.

The amazing Let's Encrypt service provides free certificats to anybody who can prove ownership of a domain.
Please be aware that since Gitpod needs a certificate for wildcard domains,
ownership must be proven via the DNS challenge, which requires you to configure special TXT records for your domain,
and thus can only be done by a person who can modify the DNS records of the domain.
Proving ownership by runnign a webserver on a domain and serving a secert file does not suffice for obraining a certificate fo a wildcard domain.

See [here](../34_https_certs) for more details.


# MySQL Database (Optional)
Gitpod uses a MySQL database to store user data. You may use the MySQL database integrated in Gitpod or disable the integrated database and connect Gitpod to your own MySQL database.

* Integrated database: If not disabled, this MySQL database is installed in a Kubernetes pod as a part of Gitpod’s Helm chart.
The database uses a Kubernetes PersistentVolume. We do not recommend using this option fo a production setting.

* Own MySQL database: Gitpod requires MySQL in version 5.7 or newer.

# Docker Registry (Optional)
Since Gitpod can build Docker images from Dockerfiles on-demand to be used as workspace containers, it needs a Docker registry to store them in.

You may use the docker registry that is integrated in Gitpod or disable the integrated registry and connect Gitpod to your own docker registry.

* Integrated docker registry: If not disabled, this docker registry is installed in a Kubernetes Pod as a dependency of Gitpod’s Helm chart.
  The docker registry requires a Kubernetes PersistentVolume. This registry is not recommended to be used for production.
* Own docker registry: Gitpod can connect to your own docker registry.  

# Storage Buckets (Optional)
Gitpod uses storage buckets to persist the contents of workspaces. Each workspace is packaged into a single archive file which is then uploaded to the bucket.
You may use MinIO that is integrated in Gitpod or disable integrated MinIO and connect Gitpod to your own bucket storage.

* Integrated MinIO: If not disabled, Gitpod installs MinIO in Kubernetes as a dependency of Gitpod’s helm charts.
  MinIO can be configured to store data to Kubernetes PersistentVolumes, or NFS, or one of many other supported backends.
* Own storage buckets: Gitpod can be configured to connect to your own installation of MinIO or Google Cloud Storage compatible storage solution. 
