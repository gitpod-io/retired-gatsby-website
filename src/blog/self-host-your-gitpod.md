---
url: https://medium.com/gitpod/github-flows-better-with-gitpod-e455d17990f9
date: Thu Dec 19 2019 11:49:24 GMT+0000 (UTC)
author: meysholdt
subtitle: Gitpod on Your Infrastructure
title: Self-Host Your Gitpod
image: /globe.png
teaserImage: /globe.png
---

Eighteen months ago we launched the public beta of Gitpod.
That date marked the beginning of an amazing journey with plenty of feedback, fixes and improvements.
It is exciting to see how far we have come and where that simple idea of instant, ready-to-code workspaces has taken us.

None of this would have been possible if it weren't for the troves of developers, hackers, coders and other purveyors of Open-Source who provide ample feedback and use Gitpod as their IDE of choice.
If the technical side of Gitpod is fun, the user side of Gitpod is truly amazing.

We are blown away every day because of the quantity and quality of what you guys do with Gitpod.

## A Public Service is Not Enough

However, until now Gitpod has not truly been available for everyone.
There are many situations, especially in the enterprise, where working on your source code on a third-party cloud service is out of question.
Maybe the codebase you work on is living on a GitLab or GitHub Enterprise instance on your company's network well-protected behind a firewall.

Maybe working on the code requires accessing other services that are available only inside your company network, such as databases, npm/docker/maven registires, Kubernetes clusters, etc.

Well, why not have Gitpod where you need it?

## Introducing: Gitpod Self-Hosted

Today we are thrilled to announce the availability of Gitpod Self-Hosted.
Much like eighteen months ago, this marks the starting point of a new section of our journey.

To create Gitpod Self-Hosted, we took our codebase from gitpod.io and made it dramatially easier to configure, install and run.
As a result, you'll find all the features you know from gitpod.io in Gitpod Self-Hosted.

Gitpod Self-Hosted runs on Kubernetes and integrates via OAuth with GitHub Enterprise, GitLab CE and GitLab EE.
With this approach, no additional user management is required and users by default get access to git repositories based on the permissions set in GitLab/GitHub.

Gitpod Self-Hosted on Google Cloud Platform (GCP) is mature and battle-tested because we operate gitpod.io on GCP.
We consider the setup for vanilla Kubernetes, the install scripts and structure of the configuration to be public beta.

## Easy Installation

All it needs to get it running on your infrastructure is to have a domain name and follow these steps:

1. In your terminal, run: `git clone https://github.com/gitpod-io/self-hosted`

2. Adjust the configuration from the repository to your needs.

3. Run `helm install -f ... gitpod`

[The setup for vanilla Kubernetes](/docs/self-hosted/latest/install/10_install_on_kubernetes/) will work most Kubernetes clusters.
For Google Cloud Platform (GCP) we offer a [script that automates the install](/docs/self-hosted/latest/install/11_install_on_gcp_script/).

## Pricing

Gitpod Self-Hosted is free for up to three users. If you're a small shop that will get you up and running.
If you need more, there is a [free one-month unlimited license](https://gitpod.io/selfhosted-trail) available.
In case you need to support running your PoC in-house please [reach out](mailto:contact@gitpod.io) and we'll be happy to help.
Our remodeled [community](https://community.gitpod.io/) will also fill with helpful tips and tricks regarding Gitpod Self-Hosted.

We are absolutely thrilled to see how Gitpod and its community grows.
Self-Hosted will enable even more developers to focus more on coding and less on setting up their machine or waiting for builds to finish.
