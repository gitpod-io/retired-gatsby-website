# Changelog

A curated, chronologically ordered list of notable changes in [gitpod.io](https://www.gitpod.io/).

## 2020-04-08

- [backend] Rebuild workspace base image when it's missing, fixes https://github.com/gitpod-io/gitpod/issues/1329
- [backend] Make multiple services more resilient in case of degraded network conditions
- [backend] Improve workspace start-up time monitoring
- [theia] Fix 'Open Workspaces' and 'Open Access Control' avatar menu links getting blocked as pop-ups
- Fix extended & boostable timeouts for Student Unlimited plans, fixes https://community.gitpod.io/t/boosting-timeouts-in-gitpod/1114

## 2020-04-06

- Make noVNC (virtual desktop) automatically reconnect if the connection is dropped, and enable noVNC toolbar https://github.com/gitpod-io/workspace-images/pull/170

## 2020-03-31

- [theia] Fix opening GitHub/GitLab file URLs in Gitpod
- Don't use no-reply@ and show proper sender name in transactional emails

## 2020-03-30

- [backend] Move Gitpod prebuilds to a dedicated headless nodepool, fixes https://github.com/gitpod-io/gitpod/issues/1328
- [backend] Harmonise and pin Kubernetes version to 1.15
- [backend] Make workspaces more resilient to DiskPressure/MemoryPressure
- [backend] Make workspace scheduling more efficient and robust
- [backend] Better report errors when workspaces fail or get unknown phase
- [workspaces-list] Add hover tooltips to buttons in the workspaces list
- [theia] Upgrade Theia to run Node.js Debug Adapter with Theia's built-in node
- [theia] Upgrade Java extensions
- [theia] Share workspace immediately when opening share workspace dialog, fixes https://github.com/gitpod-io/gitpod/issues/665
- [theia] Redeploy plugins on disconnection to backend, fixes https://github.com/gitpod-io/gitpod/issues/1291
- [gitlab] Fix link in private repository access view for GitLab
- [gitlab] Allow to open empty GitLab repos, fixes https://github.com/gitpod-io/gitpod/issues/1014
- [gitlab] Add retry for user profile fetching, fixes https://github.com/gitpod-io/gitpod/issues/1275#issuecomment-599157231
- [gp-cli] Handle `gp preview 127.0.0.1`
- [gp-cli] Fix `gp url` without arguments, fixes https://github.com/gitpod-io/gitpod/issues/1333
- Implement SendGrid to allow sending transactional emails (e.g. when your subscription is about to expire)
- Handle duplicate ports in `.gitpod.yml` more gracefully

## 2020-03-30

- Upgrade Node.js from v10 → v12 LTS (to pin a specific version, see [this workaround](https://github.com/gitpod-io/workspace-images/pull/178#issuecomment-602465333))

<br><br>

---
Inspired by [keepachangelog.com](https://keepachangelog.com/).
