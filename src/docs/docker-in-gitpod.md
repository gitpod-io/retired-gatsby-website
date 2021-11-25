# Docker in Gitpod

Theia on gitpod is currently provided in docker containers where this page is dedicated to makeing a dockerimages for gitpod and to work with dockerfiles.

### What are dockerfiles
FIXME-DOCS

### Support of dockerfiles in gitpod
See [Docker Image](src/docs/config-docker.md)

### Development of docker
Currently blocked by https://github.com/gitpod-io/gitpod/issues/52

### Linting of dockefiles

Linting of dockerfiles can be done using [Hadolint](https://www.google.com/search?client=firefox-b-e&q=hadolint) which can be installed as vscode extension on https://marketplace.visualstudio.com/items?itemName=exiasr.hadolint for gitpod to provide realtime linting.

![](https://i.gyazo.com/a701460ccdda13a1a449b2c3e8da40bc.gif)

Note that for this extension to work you need a hadolint executable which is available in homebrew and as binary on https://github.com/hadolint/hadolint/releases.

The binary can be installed in gitpod's dockerfile the following is example:
```dockerfile
RUN wget https://github.com/hadolint/hadolint/releases/download/v1.17.5/hadolint-Linux-x86_64 -O /usr/bin/hadolint && chmod +x /usr/bin/hadolint
```

As of 24th February of 2020 this executable is not available in downstream of debian and ubuntu.

### DEMO

Not sure about Bash IDE? Try it in Gitpod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/JesterOrNot/Gitpod-BashIDE)

## External Resources

- For more on ShellCheck see https://shellcheck.net
