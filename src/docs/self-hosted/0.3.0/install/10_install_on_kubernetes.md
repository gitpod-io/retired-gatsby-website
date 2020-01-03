# Install Gitpod Self-Hosted on Kubernetes
This section describes how to install Gitpod on a vanilla Kubernetes cluster.
Gitpod also provides more optimized installation methods offering better performance for particular cloud providers:
* *Google Cloud Platform*: Install Gitpod in a blank GCP project, either [using a script that automates the procedure](../11_install_on_gcp_script/) or [manually step-by-step](../12_install_on_gcp_manual/).

## Prerequisites
- Ensure you have the [general installation prerequisites](../01_prepare_installation/) available.
- `kubectl` with access to that cluster.
- `helm`. We recommend version 3.x. Any version >= 2.11 will also work but requires you to have [tiller configured](../90_helm_2x/).

## Configuration
The [Gitpod self-hosted repository](https://github.com/gitpod-io/self-hosted) contains the configuration files this guide is refering to.
Throughout this guide you will be modifying the files found in that repo.
We recommend you to fork the repository so that you can easily rebase your changes into the latest version.

```
git clone https://github.com/gitpod-io/self-hosted
cd self-hosted
git remote rename origin upstream
```

For the rest of this guide we will assume that you work in the root folder of a the repository.

### Domain Name and IP Address
Gitpod requires a domain name which resolves to the IP of your Kubernetes cluster. In this document `your-domain.com` is used as an example. Set your real domain in the `values.yaml` under `gitpod.hostname`.
By default Gitpod deploys a [`LoadBalancer` service](https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer) as means of ingress.
If you have a fixed IP address that you want to use set the variable `gitpod.components.proxy.loadBalancerIP` to the external IP of your cluster/load balancer. Otherwise Kubernetes will assign you a load balancer IP during deployment.
Once you know your IP address configure your domain names to resolve to that IP address:
 - `your-domain.com`
 - `*.your-domain.com`
 - `*.ws.your-domain.com`

### OAuth Integration
Gitpod delegates authentication to a configurable [OAuth provider](../01_prepare_installation/#user-authorization-and-git-integration).

Follow [these steps](../30_oauth/) to set up GitHub or GitLab as OAuth provider.

### HTTPS Certificates or External Docker Registry
Gitpod builds workspace images with Docker on demand and runs them in Kubernetes as pods.
Since Kubernetes only pulls images from secure Docker registries by default
you have to use either an internal Docker registry with [HTTPS certificates](../34_https_certs/) configured or an [external Docker registry](../35_docker_registry/).

## Recommended Configuration
For production environments we encourage you to follow these optimization guidelines.
* [**Docker Registry**](../35_docker_registry/): Use your own Docker registry instead of the built-in one.
* [**HTTPS certificates**](../34_https_certs/): Configure HTTPS certificates for secure access to Gitpod.
* [**Database**](../36_database/): Use your own MySQL database instead of the built-in one.

## Installation
```
helm repo add charts.gitpod.io https://charts.gitpod.io
helm dep update
helm upgrade --install $(for i in $(cat configuration.txt); do echo -e "-f $i"; done) gitpod .
```

Visit `https://<your-domain.com>/` and check that you can login and start workspaces just as you are used to on gitpod.io.
Launch a workpace. Launching the first workspace can take significantly longer (up to 15min) because docker images are pulled.

## Customization
* [**Storage**](../32_storage/): Configure where Gitpod stores stopped workspaces.
* [**Kubernetes Nodes**:](../33_nodes/): Configure file system layout and the workspace's node associativity.
* [**Workspaces**](../31_workspaces/): Configure workspace sizing.
