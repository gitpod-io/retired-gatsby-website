---
url: https://medium.com/gitpod/developing-native-ui-applications-in-gitpod-15af2967c24e
date: Thu Oct 04 2018 12:47:53 GMT+0000 (UTC)
author: 32leaves
title: Developing native UI applications in Gitpod
image: https://cdn-images-1.medium.com/max/11236/1*YaZqFJXHopwW0puvvmfEew.png
---

Gitpod is a web-based IDE. As such one would think it only works for web-based projects or anything else that does not require a native UI. However, there’s still a plethora of native UI applications around and many of them are here to stay. In this article we’ll go through how to use Gitpod for developing native desktop UI applications.

![](https://cdn-images-1.medium.com/max/11236/1*YaZqFJXHopwW0puvvmfEew.png)

A few days ago [Gero introduced Docker builds to Gitpod](https://medium.com/gitpod/bring-your-own-docker-image-to-gitpod-52db1aa861de) with which you can bring your own Dockerfile (instead of a pre-built image), and Gitpod will build the image for you. We’ll use that feature to setup a cloud-based development environment for native UI applications.

## Hello World

Let’s use Gitpod to write [a simple desktop-native application in Go](https://github.com/32leaves/gitpod-hello-ui-demo) using [libui](https://github.com/andlabs/libui). First, we create a GitHub repo and a [little bit of configuration](https://github.com/32leaves/gitpod-hello-ui-demo/commit/fea580735c09fa704531a810e8ec7ca6a5c03a88): we need a Dockerfile to install libui’s dependencies (see below), and we need to tell Gitpod to use that Dockerfile.

    FROM gitpod/workspace-full-vnc
    RUN apt-get update \
        && apt-get install -y libgtk-3-dev

This Dockerfile uses the gitpod/workspace-full-vnc image which sports the setup necessary to run X11 and VNC in Gitpod. It runs a [web-based VNC viewer](https://novnc.com) on port 6080 — during startup, Gitpod will ask you if you want to open this page.

![The Hello World UI example running in Gitpod](https://cdn-images-1.medium.com/max/6720/1*8xUjJfd3pV0QXyK-ytyhwA.png)*The Hello World UI example running in Gitpod*

## Native UI in Gitpod = X11 + VNC

[Gitpod](https://gitpod.io/) runs on Linux, so we need an X11 server that our UI application can connect to. As we do not have a physical display attached, we’ll use a framebuffer based X server, namely Xvfb. Using [x11vnc](http://www.karlrunge.com/x11vnc/), we can serve the virtual screen of the X server to a VNC client. There are a few VNC clients that run in the browser out there, but we’ll go with one that’s battle tested: [novnc](https://novnc.com/info.html). The combination of Xvfb, x11vnc and novnc is a proven one, and it happens to be the same that e.g. [Janitor](https://janitor.technology/) relies on.

To make this setup work in Gitpod, we first create a Docker image that has the required tools installed, and a small bash script to tie things together. I went ahead and prepared those things in the [workspace images repo](https://github.com/gitpod-io/workspace-images/tree/master/full-vnc). Any Gitpod workspace started using the workspace-full-vnc image, has a DISPLAY environment variable set in the .bashrc and comes with a running X11 server. No need for any manual setup.

## Let’s go big: running Visual Studio Code in Gitpod

Using this setup, we can build and [run Visual Studio Code in Gitpod](https://gitpod.io/#github.com/microsoft/vscode). VS Code needs a few more libraries than the bare-bones X11 setup we’ve built so far. But again those libraries are easy enough to install in a Dockerfile:

    FROM gitpod/workspace-full-vnc

    RUN apt-get update \
     && apt-get install -y libx11-dev libxkbfile-dev libsecret-1-dev libgconf2–4 libnss3

I added this setup to [definitely-gp](https://github.com/gitpod-io/definitely-gp/tree/master/vscode), so that when you open the VS code repository in Gitpod, it will build the application, and start it. To see and interact with the application, open the noVNC session that’s served on port 6080:

![](https://cdn-images-1.medium.com/max/2000/1*-yHSkPGNR6Vs07MjLKQAUA.gif)

## Conclusion

By plugging together a handful of tools we can develop native UI applications in Gitpod, and stay in the browser altogether. Naturally, this comes with a few limitations, e.g. at the moment this is Linux only, so testing on different platforms is not feasible. Also, noVNC disconnects from the VNC server every now and then; reloading noVNC brings it back.

Surprisingly, frame-rate is not one of those limitations: you could [open a browser inside a Gitpod](https://gitpod.io/#https://github.com/32leaves/gitpod-browser-demo) and watch YouTube videos; it’s best you pick one without sound, though. :)
