# Kotlin in Gitpod

To work with Kotlin in Gitpod, you will need to properly configure your repository. Here is how to do it.

## Installing Kotlin

To install Kotlin in Gitpod add the following to your [.gitpod.Dockerfile](https://www.gitpod.io/docs/config-docker/)

```Dockerfile
RUN brew update && brew install kotlin
```

A full example could look like

```Dockerfile
FROM gitpod/workspace-full

USER gitpod

RUN brew update && brew install kotlin
```

## Try it

Please use the button below to see a basic repository with Kotlin support in Gitpod:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/Gitpod-Kotlin)
