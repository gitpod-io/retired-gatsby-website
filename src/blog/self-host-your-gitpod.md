---
url: https://medium.com/gitpod/github-flows-better-with-gitpod-e455d17990f9
date: Thu Dec 19 2019 11:49:24 GMT+0000 (UTC)
author: meysholdt
subtitle: Gitpod, as you know it, on your infrastructure
title: Self-Host your Gitpod
image: /globe.png
teaserImage: /globe.png
---

**It's been about 18 months since we launched** the first public beta of Gitpod, and we are thrilled and thankful for how many people use it daily. We learned a lot during these one-and-a-half years: About how to launch workspaces on Kubernetes as quickly as possible. About the degrees of freedom and power projects and developer need. And about robustness and availability. We iteratively improved gitpod.io, and while we still have a plethora of ideas of what we could improve even further, we are quite happy with the degree of robustness and reliability we have reached so far.

Many people reached out to us, and we reached out to many as well. We listened a lot and could not wish for the more positive feedback. **However, some developers told us they could not use Gitpod.io**. They told us their source code must not leave the company network. They told us they need to access docker, npm, and maven registries that are only accessible inside the company network. Some even said to us that they would like to use Gitpod on a network that has no access to the internet at all. We hear you, and well, we have an announcement to make.

**Starting today, Gitpod is available as a self-hosted version.** All you need is a Domain, Git-Repositories, and a Kubernetes cluster to run Gitpod, just as you know it from gitpod.io, on your infrastructure. It may be a public cloud provider or some Kubernetes distribution on your hardware. It may be on the public internet, behind a firewall on your corporate network, or on a network without internet access.

We ship Gitpod as a **Helm chart that you can install on Kubernetes**. Also, we offer a git-repository with a default configuration that you can clone and adjust to your needs. You'll need to configure OAuth via GitHub Enterprise, github.com, or gitlab.com or GitLab CE/EE. OAuth solves two use cases at once: First, users can log into Gitpod without the need to create new accounts. Second, when they open git repositories, they are already authenticated for git-pull and push. Optionally, but recommended for robustness, you can hook up your own MySQL database, Docker Registry for images built by Gitpod and MinIO or Google Storage for storing stopped workspaces. If you want to run Gitpod on Google Cloud Platform with GKE, you'll be happy to hear that this is where gitpod.io runs and has proven itself. Also, we have a script that automates the installation on GCP and sets up a managed MySQL Database, Google Container Registry, and Google Storage.

We offer Gitpod Self-Hosted for free for up to three users per installation. For unlimited users, you can download a one-month evaluation license in your gitpod.io account. You can obtain multiple evaluation licenses, but only one per domain.

To get started, [git-clone gitpod-io/self-hosted](https://github.com/gitpod-io/self-hosted) and follow the installation instructions.
We answer questions on [community.gitpod.io][https://community.gitpod.io/] and please report bugs and feature-requestes [here](https://github.com/gitpod-io/self-hosted/issues/new).

For more details on pricing, custom evaluation periods, support and installation assistance, please don't hesitate to contact us here.
