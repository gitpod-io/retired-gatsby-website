---
url: /docs/self-hosted/0.3.0/install/install-on-kubernetes/
---

# Install Gitpod Self-Hosted on Kubernetes

This section describes how to install Gitpod on a vanilla Kubernetes cluster.
Gitpod also provides more optimized installations offering better performance for particular cloud providers:
* *Google Cloud Platform*: Install Gitpod in a blank GCP project, either [using a script that automates the procedure](../install-on-gcp-script/) or [manually step-by-step](../install-on-gcp-manual/).

## Prerequisites

- Ensure you have the [general installation prerequisites](../prepare-installation/) available.
- `kubectl` with access to that cluster.
- `helm`. We recommend version 3.x. Any version >= 2.11 will also work, but requires you to have [tiller configured](../helm-2x/).

## Configuration

The [Gitpod self-hosted repository](https://github.com/gitpod-io/self-hosted) contains the configuration files this guide is refering to.
Throughout this guide you will be modifying the files found in this repo.
We recommend you fork this repository so that you can easily rebase your changes on the latest version.

```bash
git clone https://github.com/gitpod-io/self-hosted
cd self-hosted
git remote rename origin upstream
```

For the rest of this guide we will assume that you are located in the root of a working copy of this repository.

### Domain name and IP address
Gitpod requires a domain name which resolves to the IP of your Kubernetes cluster. In this document we'll use `your-domain.com` as example. Set your real domain in the `values.yaml` under `gitpod.hostname`.
By default Gitpod deploys a [`LoadBalancer` service](https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer) as means of ingress.
If you have a fixed IP address that you want to use, set the `gitpod.components.proxy.loadBalancerIP` field to the external IP of your cluster/load balancer.
If this field is not set, Kubernetes will assign you a load balancer IP during deployment.
Once you know your IP address, configure your three domain names to resolve to that IP address:
 - `your-domain.com`
 - `*.your-domain.com`
 - `*.ws.your-domain.com`

### OAuth integration
Gitpod delegates authentication to a configurable [OAuth provider](../prepare-installation/#user-authorization-and-git-integration).

Follow [the steps](../oauth/) to set up GitHub or GitLab as OAuth provider.

### HTTPS certificates or external Docker registry
Gitpod builds docker images on demand and runs them in Kubernetes pods as workspaces.
Since Kubernetes by default only pulls images from secure Docker registries,
you will either need to have [HTTPS certificates](../https-certs/) configured if you want to use the internal docker registry,
or use an [external docker registry](../docker-registry/).

## Recommended Configuration

To get Gitpod running quickly, you may skip this chapter.
For production scenarios, however, we highly recomend this configuration.

* [**Docker Registry**](../docker-registry/): Use your own Docker registry instead of the built-in one.
* [**HTTPS certificates**](../https-certs/): Configure HTTPS certificates for secure access to Gitpod.
* [**Database**](../database/): Use your own MySQL database instead of the built-in one.

## Installation

```bash
helm repo add charts.gitpod.io https://charts.gitpod.io
helm dep update
helm upgrade --install $(for i in $(cat configuration.txt); do echo -e "-f $i"; done) gitpod .
```

Visit `https://<your-domain.com>/` and check that you can login and start workspaces just like on gitpod.io.
Launch a workpace. Launching the first workspace can take significantly longer (up to 15min), this is because Docker images are being pulled.

## Customization

* [**Storage**](../storage/): Configure where Gitpod stores stopped workspaces.
* [**Kubernetes Nodes**](../nodes/): Configure file system layout and the workspace's node associativity.
* [**Workspaces**](../workspaces/): Configure workspace sizing.
