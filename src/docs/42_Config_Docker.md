# Docker Image

If the standard Docker image that is provided by Gitpod does not include all the tools you need for
developing your project, you can provide a custom Docker image.

## Configure a Custom Docker Image

There are two ways to configure a custom Docker image in your `.gitpod.yml` file:

* Reference a publicly available image:

    ```yaml
    image: node:alpine
    ```
    The official Gitpod Docker images are hosted on [DockerHub](https://hub.docker.com/u/gitpod/).
* Reference a Dockerfile next to your `.gitpod.yml` file:

    ```yaml
    image:
      file: docker/gitpod.Dockerfile
      # Context is optional, defaults to an empty context
      context: docker
    ```
    The Docker image is rebuilt automatically whenever the Dockerfile changes.

## Creating Docker Images for Gitpod

A good starting point for creating custom Docker Images is the
[`gitpod/workspace-full`](https://hub.docker.com/r/gitpod/workspace-full/) image. It already contains all the tools necessary to work with all languages Gitpod supports.
You can find the source code in [this GitHub repository](https://github.com/gitpod-io/workspace-images).

```Dockerfile
FROM gitpod/workspace-full

# install custom tools, runtime, etc.
```

When you are launching the Gitpod IDE, the local console will use the `gitpod` user, so all local settings, config file, etc. should apply to `/home/gitpod` or be run using `USER gitpod`.

Switching users in the Dockerfile to `gitpod` requires switching back to `USER root` at the end of the Dockerfile, so that the IDE can start. The following example shows a typical Dockerfile inheriting from `gitpod/workspace-full`:
```Dockerfile
FROM gitpod/workspace-full:latest

USER root
# Install custom tools, runtime, etc.
RUN apt-get update && apt-get install -y \
        ... \
    && apt-get clean && rm -rf /var/cache/apt/* && rm -rf /var/lib/apt/lists/* && rm -rf /tmp/*

USER gitpod
# Apply user-specific settings
ENV ...

# Give back control
USER root
```

See also [Gero's blog post](/blog/docker-in-gitpod) running through an example.
