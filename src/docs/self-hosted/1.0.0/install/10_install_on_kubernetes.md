# Install Gitpod Self-Hosted on Kubernetes

While the instructions you're looking at are generic and should work for most cases,
you have more opimized setups and installation routines for the following cloud providers:
* [Google Cloud Platform via CLI](../install/11_install_on_gcp_cli): Install Gitpod optimised for GCP and GKE via Command Line Interface.
* [Google Cloud Platform via Script](../install/12_install_on_gcp_script): Install Gitpod optimised for GCP and GKE via an automated script.

## Prerequisites
- You should have completed the [Prepare Install](../01_prepare_install) chapter.
- `kubectl` with access to that cluster.
- `helm`. We recommend version 3.x. A version >= 2.11 will also work, but requires you to have [tiller configured]((90_helm_2.x.md)).

## Required Configuration

Please clone the repository `https://github.com/gitpod-io/gitpod-self-hosted`. In there you will find the configuration files this guide is refering to.

### Domain name and IP address
Gitpod requires a domain name which resolves to the IP of your Kubernetes cluster. In this readme we'll use `your-domain.com` as example. Set your real domain in the `values.yaml` under `gitpod.hostname`.
By default Gitpod deploys a [`LoadBalancer` service](https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer) as means of ingress.
If you have a fixed IP address that you want to use, set the `gitpod.components.proxy.loadBalancerIP` field to the external IP of your cluster/load balancer.
If this field is not set, Kubernetes will assign you a load balancer IP during deployment.
Once you know your IP address, configure your three domain names to resolve to that IP address:
 - `your-domain.com`
 - `*.your-domain.com`
 - `*.ws.your-domain.com`

### OAuth integration
Gitpod delegates authentication to a configurable [OAuth provider](../01_prepare_install/#user-authorization-and-git-integration).

Follow [these steps](../30_oauth) to set up GitHub or Gitlab to act as OAuth provider.

### HTTPS certificates or external Docker registry
Gitpod builds docker images on demand and runs them in Kubernetes pods as workspaces.
Since Kubernetes by default only pulls images from secure Docker registries,
you will either need to have [HTTPS certificates](../34_https_certs) configured if you want to use the internal docker registry,
or use an [external docker registry](../35_docker_registry).

## Recommended Configuration

To get Gitpod running quickly, you may skip this chapter.
For production scenarios, however, we highly recomend this configuration.

* [**Docker Registry**](../35_docker_registry): Use your own Docker registry instead of the unreliable builtin one.
* [**HTTPS certificates**](../34_https_certs): Configure HTTPS certificates for secure access to Gitpod.
* [**Database**](../36_database): Use your own MySQL database instead of the unrelibale builtin one.

## Installation
```
helm repo add charts.gitpod.io https://charts.gitpod.io
helm dep update
helm upgrade --install $(for i in $(cat configuration.txt); do echo -e "-f $i"; done) gitpod .
```

Visit `https://<your-domain.com>/` and check that you can login and start workspaces just like on gitpod.io.
Launch a workpace. Launching the first workspace can take significantly longer (up to 15min), because docker images are pulled.

## Customization

* [**Storage**](../32_storage): Configure where Gitpod stores stopped workspaces.
* [**Kubernetes Nodes**:](../33_nodes): Configure file system layout and the workspace's node associativity.
* [**Workspaces**](31_workspaces): Configure workspace sizing.
