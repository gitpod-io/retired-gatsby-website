# Docker Image

If the standard Docker image that is provided by Gitpod does not include all the tools you need for
developing your project, you can provide a custom Docker image.

## Configure a Custom Docker Image

There are two ways to configure a custom Docker image in your `.gitpod.yml` file:

* Reference a publicly available image:

    ```yaml
    image: node:alpine
    ```
    The official Gitpod Docker images are hosted on <a href="https://hub.docker.com/u/gitpod/" target="_blank">Docker Hub</a>.
* Reference a Dockerfile next to your `.gitpod.yml` file:

    ```yaml
    image:
      file: .gitpod.dockerfile
    ```
    The Docker image is rebuilt automatically whenever the Dockerfile changes.

## Creating Docker Images for Gitpod

A good starting point for creating custom Docker Images is the
<a href="https://hub.docker.com/r/gitpod/workspace-full/" target="_blank">gitpod/workspace-full</a> image. It already contains all the tools necessary to work with all languages Gitpod supports.
You can find the source code in <a href="https://github.com/gitpod-io/workspace-images" target="_blank">this GitHub repository</a>.

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

## Trying out changes to your Dockerfile

The easiest way to try out your changes is to push them to a branch and then start another workspace on that branch, keeping the first workspace open as your main editing workspace.

On start of the second workspace the docker build will start and show the output. If your Dockerfile has issues and the build fails or the resulting workspace does not look like you expected,
you can force push changes to your config using your first, still running workspace and simply start a fresh workspace again to try them out.

We are working on allowing dockerbuilds directly from within workspaces, but until then this approach has been proven to be the most productive.

