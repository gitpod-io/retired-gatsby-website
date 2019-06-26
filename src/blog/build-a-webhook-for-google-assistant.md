---
url: https://blog.anudeepreddy.ml/build-a-webhook-for-google-assistant/
date: Wed Jun 26 2019 11:57:00 GMT+0000 (UTC)
author: anudeepreddy
subtitle: Build and test your webhook using Gitpod
title: Build a Webhook for Google Assistant Action
image: https://blog.anudeepreddy.ml/content/images/2019/06/Build-and-test-your-webhook.png
---

This post is all about how to build your webhook for your Google Assistant action and host it temporarily on Gitpod and test your code.

## Prerequisites
*  Node JS
*  Express JS
*  Basics on how to use Github

If you have these in place, Let's get started.

## What is Gitpod?
First of all I would like to start this section by saying, I ❤ Gitpod. Gitpod is an online IDE for Github. Gitpod provides you with a fully working development environment, including a VS Code-powered IDE and a cloud-based Linux container configured specifically for the project at hand. Just prefix your Github repo URL with "https://gitpod.io/#", So that the final link looks something like this "https://gitpod.io/#https://github.com/<username>/<repo-name>" or you can also use the Gitpod [browser extenstion](https://chrome.google.com/webstore/detail/gitpod-online-ide/dodmmooeoklaejobgleioelladacbeki?hl=en) to add the Gitpod button to Github page.
<iframe width="560" height="315" src="https://www.youtube.com/embed/bFZMKpDV3GQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Let's start building

I have created a Github repo which will help you get started without any hassle. The repo is basically a boilerplate to get started with building your webhook. The code is written in Node JS, So it would be easier for you to build on top of it if you are already familiar with Node JS. We will be using the [action-on-google](https://www.npmjs.com/package/actions-on-google) Node JS library (This client library makes it easy to create Actions for the Google Assistant and supports Dialogflow, Actions SDK, and Smart Home fulfillment.).

### Steps to follow
* Fork my [repo (dialogflow-webhook-boilerplate-nodejs)](https://github.com/anudeepreddy/dialogflow-webhook-boilerplate-nodejs) **or** just click on the run in gitpod button in my repo. (If you do this you have to fork it from the workspace so that you can commit your own changes to your repo).
* Now you can just prefix your repo url with "https://gitpod.io/#". This should take you to Gitpod and start your workspace. The workspace take a little while to start.
* Once the workspace is running you should see something like this.

![Annotation-2019-06-25-171555](https://blog.anudeepreddy.ml/content/images/2019/06/Annotation-2019-06-25-171555.png)

* If you notice the Node app is already running in the first terminal. This is automated by a Gitpod configuration file. And the webhook URL is printed on to the second terminal. All the dependencies that are required are also installed while creating the workspace.

![Annotation-2019-06-25-171555-crop](https://blog.anudeepreddy.ml/content/images/2019/06/Annotation-2019-06-25-171555-crop.png)

* Now that the webhook is running and i presume that you already have your agent on Dialogflow (If not create an agent), Next thing you need to do is to copy the webhook URL from the terminal and paste it in the Fulfillments section in the Dialogflow Console.

![Annotation-2019-06-25-172359](https://blog.anudeepreddy.ml/content/images/2019/06/Annotation-2019-06-25-172359.png)

* Now you can test your Google assistant action in the online emulator or on your phone. You can also edit the index.js file to add responses to you own intents. One you are done making changes to the index.js file stop the running app and re-run it using the command `npm start`.

## Conclusion

Gitpod can make your life much simpler by automating your development setup just by adding a simple configuration file to your repo. You can refer to the Gitpod [Docs](https://www.gitpod.io/docs/) to learn more about the platform. Gitpod lets you work with unlimited workspace but with 100hrs/month runtime. It also provides Personal and unlimited plans as well. If you are a student then you can claim Gitpod Unlimited plan for just $9.

![character](https://blog.anudeepreddy.ml/content/images/2019/06/character.gif)
# Happy coding with Gitpod ✨

