# Changelog

A curated, chronologically ordered list of notable changes in [gitpod.io](https://www.gitpod.io/).

## 2020-04-21

- Upgrade Pyenv's Python from 3.7.7 → 3.8.2 https://github.com/gitpod-io/workspace-images/pull/212
- Drop support of .NET 2.2 in `gitpod/workspace-dotnet*`, because it reached End-Of-Life on 2019-12-23 https://dotnet.microsoft.com/platform/support/policy/dotnet-core

## 2020-04-22

- [theia] Upgrade Theia v0.17.0 → v1.1.0: https://github.com/eclipse-theia/theia/blob/master/CHANGELOG.md#v110
- [theia] Upgrade monaco-languageclient and monaco-editor-core
- [theia] Get all built-in VS Code extensions from Open VSX: https://open-vsx.org
- [backend] Better handle excessive resource usage in workspaces (CPU, network, disk) and implement a fair use policy
- [backend] Implement garbage collection for prebuilt workspace snapshots that are unused for more than 7 days
- Overhaul and improve GitHub/GitLab login code

## 2020-04-17

- Fix `gitpod/workspace-postgres` image and pin to PostgreSQL version 12 https://github.com/gitpod-io/workspace-images/pull/209
- Upgrade Rust 1.41.1 → 1.42.0 https://github.com/gitpod-io/workspace-images/pull/207
- Fix `gitpod/workspace-mysql` image by updating `mysql.cnf` for MySQL 8, fixes https://github.com/gitpod-io/gitpod/issues/1399

## 2020-04-15

- Upgrade from Ubuntu 19.04 → Ubuntu 20.04 LTS, because 19.04 reached end-of-life and all its apt packages got deleted https://github.com/gitpod-io/gitpod/issues/1398
- Upgrade Java 11.0.5.fx-zulu → 11.0.6.fx-zulu

## 2020-04-09

- [backend] Merge the 'asia-east1' cluster with the 'us-west1' cluster
- [backend] Increase workspace garbage collection courtesy retention from 7 days → 21 days

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
