# Introduction to Gitpod

[Gitpod](https://www.gitpod.io) is an open source platform for automated and **ready-to-code development environments** that blends into your existing workflow. It enables developers to describe their dev environment as code and **start instant and fresh development environments for each new task** directly from your browser. 

### Gitpod does to Dev Environments what Docker did to Servers 🐳

Today we are emotionally attached (for better or worse) to our development environments, give them names & massage them over time. They are pets - similar to servers before docker took advantage of `namespaces` and `cgroups` in Linux and turned these nice puppies into cattle. 

With Gitpod it is the same - we treat development environments as automated resources you can spin up when you need them and close down (and forget about) when you are done with your task. Dev environments become fully automated and ephemeral. Only then you are **always ready-to-code** - immediately creative, immediately productive with the click of a button and without any friction. 

This is what is at the heart of Gitpod: **an open platform that removes all friction of manually setting up and maintaining dev environments** allowing yourself and your team to build applications quicker and more collaboratively.

`youtube: d6D-OUPnJeg`

### Gitpod Concepts

Gitpod seamlessly integrates in your workflow and works with all major git hosting platforms including GitHub, GitLab and Bitbucket. It understands the context you are in and adjusts your development environment accordingly. For example, if you create a Gitpod workspace from a Pull or Merge Request, Gitpod will open a fully-initialized development environment in code-review mode.

![gitpod-architecture](./images/gitpod-architecture.png)

At its core Gitpod relies on a **client-server architecture** where the client can either be: 

- **Any device** with a browser and internet connection (Gitpod works with Chrome, Firefox, Safari, Edge and other Chromium-based browsers)
- Your **local machine** via local VS Code, IntelliJ or simply your shell/terminal where you SSH into your Gitpod workspace (*expected to be released in early Q1/2021*)

Server-side Gitpod is a Kubernetes application that understands the context from GitLab, GitHub and Bitbucket and spins up containerized dev environments. Under the hood is a **customizable Linux environment**, which we call your *workspace*.

#### Workspace

A workspace comprises your whole development environment and gives you similar capabilities such as a local Linux machine. Compared to a local linux machine it is however **pre-configured and optimized for your individual development workflow**. Each workspace includes:

- Your source code
- A shell with [root / sudo capabilities](https://www.gitpod.io/blog/root-docker-and-vscode/#root-access)
- Your IDE of choice* - currently this is [VS Code](https://www.gitpod.io/blog/root-docker-and-vscode/#vs-code) or [Theia](https://theia-ide.org/)
- Your personal IDE extensions, themes, editor prefs
- Full [Docker support](https://www.gitpod.io/blog/root-docker-and-vscode/#docker)

**Jetbrain's IDEs, Jupyter Notebook, Jupyter Labs are already available in [private beta](https://www.gitpod.io/contact/).*

#### Dev-environment-as-code

Spinning up dev environments is easily repeatable and reproducible, because Gitpod applies lessons learned from infrastructure-as-code allowing you to **automate, version-control and easily share dev environments across your team**. We call this [dev-environment-as-code](https://www.gitpod.io/blog/dev-env-as-code/).

To reap the resulting automation benefits you provide a then versioned configuration file `.gitpod.yml`  in the root of your git repository. The `.gitpod.yml` contains everything that describes your dev environment:

- A Docker image or file as the base to run your dev environment in.
- Commands executed before dev environment  startup (see [Prebuilds](#prebuilds)).
- Commands executed on dev environment  startup.
- Ports to expose on dev environment  startup.
- and [more](https://www.gitpod.io/blog/gitpodify/).

Our own gitpod.yml file at Gitpod for example looks similar to this:
```yaml
image: eu.gcr.io/gitpod-core-dev/dev/dev-environment:clu-update-dev-env-image.0
workspaceLocation: gitpod/gitpod-ws.theia-workspace
checkoutLocation: gitpod
ports:
  - port: 1337
    onOpen: open-preview
  - port: 9229
    onOpen: ignore
# Go proxy
  - port: 9999
    onOpen: ignore
  - port: 13001
    onOpen: ignore
# Werft
  - port: 7777
    onOpen: ignore
# Dev Theia
  - port: 13444
tasks:
  - before: scripts/branch-namespace.sh
    init: yarn --network-timeout 100000 && yarn build
  - name: Go
    init: leeway exec --filter-type go -v -- go get -v ./...
    openMode: split-right
vscode:
  extensions:
    - hangxingliu.vscode-nginx-conf-hint@0.1.0:UATTe2sTFfCYWQ3jw4IRsw==
    - ms-kubernetes-tools.vscode-kubernetes-tools@1.2.1:j58HdmA0K7d9a9sEkogZNw==
    - bajdzis.vscode-database@2.2.1:uXdjV53wtoTevFK6HOh3pQ==
    - hashicorp.terraform@2.1.1:QEP7gdWtMuY+j8RZ5OLDkA==
```
Learn more about how to configure your repository [here](https://www.gitpod.io/docs/configuration/).

#### Prebuilds {#prebuilds}

You are always ready-to-code, because your dev environment  is already compiled and all dependencies of your code have been downloaded before you even start your workspace (no more maven/npm downloads the internet 🦥). Gitpod does that by running your build tools on git-push (like CI/CD would do) and *prebuilds* and stores prepared workspaces for all branches / contexts ready when you need one. 

More on [prebuilds](https://www.gitpod.io/docs/prebuilds/).