---
url: https://medium.com/gitpod/developing-a-nuxt-js-app-entirely-in-your-browser-94e7525f5eca
date: Fri Sep 21 2018 13:23:34 GMT+0000 (UTC)
author: svenefftinge
title: Developing a Nuxt.js app entirely in your browser
image: https://cdn-images-1.medium.com/max/10368/0*YlpGv4nlbQP5sEPr
---

A walkthrough to create a fully working Nuxt.js web application with only a browser, using Gitpod.io the online IDE for GitHub.

![“person holding lighted sparklers” by [Cristian Escobar](https://unsplash.com/@cristian1?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)](https://cdn-images-1.medium.com/max/10368/0*YlpGv4nlbQP5sEPr)*“person holding lighted sparklers” by [Cristian Escobar](https://unsplash.com/@cristian1?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)*

Version 2.0 of [Nuxt.js has just been released](https://medium.com/@nuxt_js/nuxt-js-2-0-webpack-4-esm-modules-create-nuxt-app-and-more-6936ce80d94c). It comes with a convenient scaffolding tool that let’s you get started in no time. In the following I will explain the steps necessary to create, run and **develop a Nuxt.js application with only a browser using Gitpod.io**.

## **Step 1: Go to GitHub and create a fresh repository.**

[Gitpod.io](http://gitpod.io) uses GitHub as its dashboard. That means you start your workspaces from any states of any GitHub project. So new projects are created through GitHub, too:

![](https://cdn-images-1.medium.com/max/2048/0*I9sury8siGTS6GtF)

Clicking anywhere on Github’s Octocat logo on the top left will bring you to your dashboard, where you can create a new repository.

Enter any name description, you can later change it.

![](https://cdn-images-1.medium.com/max/3200/0*bY21cCYdJYoj7B48)

## **Step 2: Start a Gitpod workspace**

From your newly created but still empty project you can now start a Gitpod workspace. To do so prefix the GitHub URL with **gitpod.io/#**:

![](https://cdn-images-1.medium.com/max/2776/0*NjvEmIjiTVwbTIaA)

## **Step 3: Run `yarn create nuxt-app`.**

Now a workspace with an online IDE is started for you. It will open up the readme (if you have created one) and a terminal.

Using the terminal you can use create-nuxt-app to create an initial project:

    **yarn create nuxt-app**

Now simply answer all the prompts as you want.

## **Step 4: Allow external access to the dev server**

By default the dev server doesn’t allow external IPs. To change that so we can access the application running in our cloud container, we need to pass an additional argument to the dev command.

To do so open the package.json file and add the parameter

    **—-hostname 0.0.0.0**

as shown below:

![](https://cdn-images-1.medium.com/max/2468/0*WrSSKAEkumvfIv6d)

## Step 5: Start the dev server

Now we can start the dev server and see the application in action.

In the terminal type

    **yarn dev**

A notification window will pop up asking you to either open the web app externally or in a view side-by-side to the editor area.

![Running app in the Gitpod workspace](https://cdn-images-1.medium.com/max/3200/0*psT2Ar8PKkWYVpKV)*Running app in the Gitpod workspace*

## **Bonus Points**

Now you can start changing the application and of course committing to your repo. Also you should consider adding a *.gitpod* file to the root directory, so the build and dev server automatically startup next time you open a Gitpod workspace.

Here’s the contents:

    ports:
      - port: 3000
        protocol: "http"
    tasks:
      - command: >
            yarn install &&
            yarn dev

## Dive deeper into Nuxt.js

Now you are all set to dive a bit deeper into Nuxt.js. Checkout the [awesome-nuxt](https://github.com/nuxt-community/awesome-nuxt) repository or the [website](https://nuxtjs.org/) for further tips and tutorials.

Have fun!
