# Install Gitpod Self-Hosted on Kubernetes

While the instructions you're looking at are generic and should work for most cases, 
you have more opimized setups and installation routines for the following cloud providers:
* [Google Kubernetes Engine (GKE)](docs/41_gcp.md)

An easy way to get started is to pull this git-branch into a (private) repository and configure it as described below.


## Prerequisites
- An Auth provider. This can be Github Enterprise, github.com, Gitlab CE, Gitlab EE or gitlab.com.
- a domain or subdomain incl. two wildcard domains. 
  (Examples 1: `your-domain.com`, `*.your-domain.com`, and `*.ws.your-domain.com`. 
   Examples 2: `gitpod.your-domain.com`, `*.gitpod.your-domain.com`, and `*.gitpod.ws.your-domain.com`). 
  A raw IP address is not enough because Gitpod launches workspaces on subdomains.
- Either a HTTPS certificate for your domains, a docker registry, or both.
- A Kubernetes cluster in version 1.13 or newer.
- `kubectl` with access to that cluster.
- `helm`. We recommend version 3.x. A version >= 2.11 will also work, but requires you to have [tiller configured]((90_helm_2.x.md)).


## Optional Prerequisites
- a valid HTTPS certificate for your domains. This can be obained via Let's Encrypt's DNS auth.
- a MySQL database. If you don't have one, you can use the one built into Gitpod.
- a Docker Registry. If you don't have one, you can use the one built into Gitpod.
- storage buckets. If you don't have one, you can use Minio, which ships as part of Gitpod.


## Required Configuration

Please clone the repository `https://github.com/gitpod-io/gitpod-self-hosted`. In there you will find the configuration files this guide is refering to.

### Domain name and IP address
Gitpod requires a domain name which resolves to the IP of your Kubernetes cluster. In this readme we'll use `your-domain.com` as example. Set your real domain in the `values.yaml` under `gitpod.hostname`.
By default Gitpod deploys a [`LoadBalancer` service](https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer) as means of ingress.
If you have a fixed IP address that you want to use, set the `gitpod.components.proxy.loadBalancerIP` field to the external IP of your cluster/load balancer.
If this field is not set, Kubernetes will assign you a load balancer IP during deployment.
The following domains must resolve to the load balancer IP:
 - `your-domain.com`
 - `*.your-domain.com`
 - `*.ws.your-domain.com`

### OAuth integration
Gitpod delegates authentication to a configurable OAuth provider. At the moment we support GitHub, GitHub Enterprise and GitLab. 
See [here](/30_oauth.md) how to set up GitHub or Gitlab to act as OAuth provider.

### HTTPS certificates or external Docker registry 
Gitpod builds docker images on demand and runs them in Kubernetes pods as workspaces. 
Since Kubernetes by default only pulls images from secure Docker registries, 
you will either need to have [HTTPS certificates](34_https_certs.md) configured if you want to use the internal docker registry, 
or use an [external docker registry](35_docker_registry.md).

## Recommended Configuration

Highly recommended for production use.

* **Docker Registry**: [HTTPS certificates](34_https_certs.md)
* **Database**: Gitpod stores information about users, workspaces etc. in a MySQL database. [Configure your own](36_database.md).

## Optional Configuration

Optimize Gitpod for your use.

## Installation
```
helm repo add charts.gitpod.io https://charts.gitpod.io
helm dep update
helm upgrade --install $(for i in $(cat configuration.txt); do echo -e "-f $i"; done) gitpod .
```

Visit `https://<your-domain.com>/workspaces` and check that you can login and start workspaces just like on gitpod.io.
Launch a workpace. Launching the first workspace can take significantly longer (up to 15min), because docker images are pulled.

## Customization

* **Storage**: Gitpod creates a backup of workspaces when they're shut down. [Configure where the backup is stored](32_storage.md).
* **Kubernetes Nodes**: Configure file system layout and the workspace's node associativity. [link](33_nodes.md).
* **Workspaces**: [workspace sizing and cloud density](docs/21_workspaces.md).
