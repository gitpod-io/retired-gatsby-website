---
date: Tue, 25 Aug 2020 17:00:00 UTC
author: svenefftinge, JohannesLandgraf
subtitle:
title: Gitpod is now Open Source 🎉
image: /confetti.jpg
teaserImage: /confetti.jpg
---

As of today Gitpod is open source under the AGPL license at [github.com/gitpod-io/core](https://github.com/gitpod-io/core). We want to allow the community to participate in the development of Gitpod, provide more transparency and make it even easier for developers to use and integrate Gitpod in their workflows.

For those of you who know us, this probably does not come as a big surprise. Working in open source is in our DNA and everything we’ve created over the past 10 years, including [Theia](https://github.com/eclipse-theia/theia), [Xtext](https://github.com/eclipse/xtext), [Open-VSX](https://github.com/eclipse/openvsx) and many other projects has been open source. In fact, Gitpod was our only closed-source project and it is a relief to change that going forward.

# Open Source Contributions

Contributing to Gitpod should be easy and accessible for everyone. All contributions are welcome, including PRs, issues, new docs as well as updates and tweaks, blog posts, workshops, and more. Please head over to [Github](https://github.com/gitpod-io/core) to find out about the various ways you can contribute and join our [Gitpod Community](https://community.gitpod.io/).

Over the last year, Gitpod has simplified contributions on many open source projects (see [contribute.dev](https://contribute.dev/)). Today, everybody in our team is excited to share our own development pipeline including Kubernetes preview environments, an aggressively caching build system, our slim and fast CI system and of course how Gitpod continuously beams us into ready-to-code (and debug) dev environments. [Chris](https://github.com/csweichel) gave a great talk about this setup earlier this year 👇


`youtube: dFMpXUsJcGM`

Naturally, we develop Gitpod in Gitpod. This allows the  whole team  to spin up fully initialized, remote dev environments on any branch at any time. 

In line with the [pets vs. cattle](http://cloudscaling.com/blog/cloud-computing/the-history-of-pets-vs-cattle/?utm_source=thenewstack&utm_medium=website&utm_campaign=platform) analogy of the cloud-native world, we treat dev environments as automated (yet customizable) resources you can spin-up once you need them and close down (and forget about) when you are done with your task. Once you experience the peace of mind of automated, ephemeral dev environments you never want to go back.

Sven will run a webinar next Thursday, where we will showcase how we internally at Gitpod use  Gitpod and how much it has improved our workflows. Hope to see you there! 

<style>
.button {
  background-color: #0087BE; 
  border: none;
  border-radius: 30px;
  color: white;
  padding: 10px 27px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 25px 1px;
  cursor: pointer;
  box-shadow: 1px 3px #0E75A3;
  opacity: 1;

}

.button:hover {
	opacity: 0.85;

}
.wrapper {
    text-align: center;
}
</style>

<div class="wrapper">
    <a href= "https://us02web.zoom.us/webinar/register/5415977565541/WN_amoa6lnEQniLykXUYCDyBQ" target="_blank">
        <button class="button">How Gitpod uses Gitpod</button>
    </a>
</div>

# Gitpod Self-Hosted is Free

The [SaaS version of gitpod.io](https://www.gitpod.io/pricing/#) remains the most convenient way to streamline your developer workflows with continuously prebuilt dev environments. 

In case you want to host Gitpod on your own infrastructure or private cloud, starting today, Gitpod Self-Hosted is free for unlimited users. Organizations using Gitpod can upgrade to Gitpod Professional to get additional features: 

* [Snapshots](https://www.gitpod.io/features/#snapshot) (share a reproducible workspace with your team)
* [Live Share](https://www.gitpod.io/features/#share) (invite others into your running workspace)
* [Unlimited Prebuilds](https://www.gitpod.io/features/#prebuilt) (making ephemeral dev environments possible)
* Support (2h response during working hours)

The success of Gitpod Professional makes it possible for us to keep working towards building a new category of developer tools, which completes modern DevOps pipelines. In the future we will add additional functionality to both the open source code as well our paid plans.

<div class="wrapper">
    <a href= "https://www.gitpod.io/self-hosted/" target="_blank">
        <button class="button">Get started for free</button>
    </a>
</div>


