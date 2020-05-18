![](https://raw.githubusercontent.com/gitpod-io/firebase-on-gitpod/master/img/firebase-on-gitpod-header.png)

# Firebase on Gitpod

Firebase is a platform owned by Google which is used to develop mobile and web applications

[![Open proof-of-concept in gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#snapshot/45abf388-128e-4cce-b336-20ba69288d84)

### Configuring the access token

![Theia (Gitpod's editor)](https://github.com/eclipse-theia/theia) is as of 18/05/2020 using `iframe` to display pages in it's preview which is not allowed on some Google websites (https://github.com/gitpod-io/gitpod/issues/1528) and so firebase on gitpod requires the end-user to be logged-in using a hyperlink generated from `firebase login --no-localhost` and it's token stored as environmental variable `FIREBASE_TOKEN` in https://gitpod.io/settings to avoid parsing `firebase subcommand --token YOUR_TOKEN` for every command.


