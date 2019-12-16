# Install Gitpod on Google Cloud Platform

At its core setting up Gitpod on GCP does not differ much from installing it on any other Kubernetes platform.
However, Gitpod sports a range of integrations with the Google Cloud Platform that increase performance and reliability.
This section describes the neccesary steps to prepare a new GCP project for a Gitpod installation.

  > We have automated this process. If you want to get up and running as quickly as possible, that's the way to go.
  > See the [automated setup](#automated-setup) section for details.

You can perform the set up of the GCP resources yourself. See the [manual GCP setup](12_install_on_gcp_manual) section for more details.

## Automated setup
The `utils/create-gcp-resources.go` script can configure a GCP project for you performing the steps detailed in this document.
This script configures your GCP project and produces the required Helm configuration for installing Gitpod in that project.
The only things you'll have to do manually is to set up [OAuth](30_oauth) and optionally [HTTPS](34_https_certs).

### Prerequisites
The `utils/create-gcp-resources.go` script requires the following tools be present:
- [Google Could SDK](https://cloud.google.com/sdk/install)
- [Go (at least 1.12)](https://golang.org/doc/install)
- mysql client

### Installation
To start the automated setup, run `./utils/create-gcp-resources.go` from the root of the self-hosted repo.
The script will guide you through the process. We will ask for confirmation before doing any modifications or enabling anything that costs money.
