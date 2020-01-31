# Go

Gitpod supports Go right out of the box, but there are still ways to optimize your Go experience within Gitpod.

## Examples

Before we start, here are some already gitpodified repositories to give you an idea of what to expect!

<div class="table-container">

| Repository                                                              |                                                                 Description                         |               Try It |
| ----------------------------------------------------------------- | ------------------------------|-------------------------------------------------------------------------------------------------: |
| [go-swagger/go-swagger](https://github.com/go-swagger/go-swagger) | A simple yet powerful representation of your RESTful API | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/go-swagger/go-swagger) |
| [gitpod-io/go-gin-app](https://github.com/gitpod-io/go-gin-app)  | Gin example running in Gitpod |  [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/go-gin-app) |
| [gosh-terminal/gosh](https://github.com/gosh-terminal/gosh)   | A terminal implemented in Go where you can do anything  |    [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gosh-terminal/gosh) |
| [gitpod-io/self-hosted](https://github.com/gitpod-io/self-hosted) | Self-Host your Gitpod | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/self-hosted) |

</div>

## Workspace Configuration

### VSCode Extensions

<div class="table-container"> 

| Name                                                                                               | Description                                                                             |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [Go Test Explorer](https://marketplace.visualstudio.com/items?itemName=premparihar.gotestexplorer) | Provides Test Explorer for Go which enables to run your tests at the click of a button! |

</div>

To install Go Test Explorer for your repository, add the following to your [`.gitpod.yml`](https://www.gitpod.io/docs/config-gitpod-file/)

```YAML
vscode:
  extensions:
    - premparihar.gotestexplorer@0.1.10:jvUM8akrQ67vQxfjaxCgCg==
```

### **[Start-up tasks](https://www.gitpod.io/docs/config-start-tasks/)**

Here is how to have your dependencies automatically fetched before you open your Gitpod workspace!

```yaml
tasks:
  - init: go get -v -t -d ./...
```

A full example of a [`.gitpod.yml`](https://www.gitpod.io/docs/config-gitpod-file/) file might look like this

```yaml
image: gitpod/workspace-full

tasks:
  - init: go get -v -t -d ./...

vscode:
  extensions:
    - premparihar.gotestexplorer@0.1.10:jvUM8akrQ67vQxfjaxCgCg==
```

### Using the `dep` dependency manager in Gitpod

If your project uses the [`dep`](https://golang.github.io/dep/) dependency manager then you need to add a [`.gitpod.Dockerfile`](https://www.gitpod.io/docs/config-docker/) to your project. A basic example that extends the default workspace image might be something like:

```Dockerfile
FROM gitpod/workspace-full

USER gitpod

RUN brew install dep
```

Also, don't forget to reference the above Dockerfile in your `.gitpod.yml` configuration file, like so:

```YAML
image:
  file: .gitpod.Dockerfile

tasks:
  - init: dep ensure

vscode:
  extensions:
    - premparihar.gotestexplorer@0.1.10:jvUM8akrQ67vQxfjaxCgCg==
```

## External Resources

- [VSCode/Go Documentation](https://code.visualstudio.com/docs/languages/go) The stuff here also applies to Gitpod!
