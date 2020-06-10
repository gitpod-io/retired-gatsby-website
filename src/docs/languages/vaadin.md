# Vaadin in Gitpod

To work with Vaadin in Gitpod, you will need to properly configure your repository. Here is how to do it.

## Example Repositories

Here are a few Vaadin example projects that are already automated with Gitpod:

<div class="table-container">

| Repository                                                                                   | Description                               | Try it                                                                                                                                                |
| -------------------------------------------------------------------------------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Vaadin CRM](https://github.com/vaadin-learning-center/crm-tutorial)                         | Full-stack Vaadin and Spring Boot         | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/vaadin-learning-center/crm-tutorial)           |
| [Vaadin starter](https://gitpod.io/#/https://github.com/vaadin/skeleton-starter-flow-spring) | An empty starter for a new Vaadin project | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#/https://github.com/vaadin/skeleton-starter-flow-spring/tree/v14) |

</div>

## Configuring GitPod for a Vaadin project

Start by downloading a [**Vaadin and Spring Boot** project starter](https://vaadin.com/start) if you don't have a Vaadin project from before.

Next, add a [`.gitpod.yml`](https://www.gitpod.io/docs/config-gitpod-file/) file with the follwing content to the root of the project:

```YAML
tasks:
  - command: mvn spring-boot:run
ports:
  - port: 8080
    onOpen: open-preview
```

This will start the development server and open up the application in the preview browser window.

You are now ready to push your code to GitHub.

## Enable prebuilds for a faster startup

The first time you start a Vaadin application, it downloads both Maven and npm dependencies, which can take some time. You can speed up the GitPod startup by enabling [prebuild](https://www.gitpod.io/docs/prebuilds/) for the repository.

Update your [`.gitpod.yml`](https://www.gitpod.io/docs/config-gitpod-file/) file with the following content:

```YAML
tasks:
  - prebuild: mvn install spring-boot:start spring-boot:stop -DskipTests
    command: mvn spring-boot:run
ports:
  - port: 8080
    onOpen: open-preview
github:
  prebuilds:
    master: true
```

Finally, enable prebuilds on GitHub [as instructed in the prebuild documentation](https://www.gitpod.io/docs/prebuilds/#enable-prebuilt-workspaces).

Next time you push code to your repository, the `prebuild` command will download all the dependencies and make the project startup faster.
