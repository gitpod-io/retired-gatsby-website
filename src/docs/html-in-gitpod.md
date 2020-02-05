# HTML

Looking to try web development in Gitpod? Well you're in luck: Gitpod was made with web development in mind. And, depending on your needs, you may want to customize this experience further!

## Workspace Configuration

### VSCode Extensions

#### [HTML-Snippets](https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets)
This extension adds many useful snippets for productivity. See for yourself:

![Example](images/HTML-Snippets-Example.gif)

To add this extension to your repository add the following to your [`.gitpod.yml`](https://www.gitpod.io/docs/config-gitpod-file/) file

```yaml
vscode:
  extensions:
    - abusaidm.html-snippets@0.2.1:7b7Vkkp6Lem9WOqKCYMq2w==
```
#### [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
This will add great auto-completion for your project, including color-completion!

![HTML-CSS-Support](images/HTML_CSS_Extension.png)

To add this extension to your repository add the following to your [`.gitpod.yml`](https://www.gitpod.io/docs/config-gitpod-file/) file
```yaml
vscode:
  extensions:
    - ecmel.vscode-html-css@0.2.3:RBTpzQbz8rn5KTlc82tnsQ==
```
### Pre-Builds
With Gitpod you can have your project built before you open your repository, no more waiting for all of those Node/Yarn dependencies to be built! Let's get started with building your project: To do this we need a [`.gitpod.yml`](https://www.gitpod.io/docs/41_config_gitpod_file/) file. Here is an example of what your start tasks should look like for a typical NPM project:
```YAML
tasks:
  - init: npm install
    command: npm start
```

For Yarn
```YAML
tasks:
  - init: yarn && yarn build
    command: yarn run
```
These should prebuild your workspace whenever you push a change!

Next let's talk about previewing your HTML pages without leaving the editor. To do this we must configure ports say your server listens on port 3000 in your [`.gitpod.yml`](https://www.gitpod.io/docs/41_config_gitpod_file/) file add this
```YAML
# Declare ports section
ports:
    # Expose port 3000
  - port: 3000
    # Open preview after port opens
    onOpen: open-preview
```
### Try It!

Want to try it out? And see a minimal example in action? Great, then you can open this in Gitpod:

[![JesterOrNot/Gitpod-Web-Development-Example](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/JesterOrNot/Gitpod-Web-Development-Example)
## Resources
* [Start Tasks](https://www.gitpod.io/docs/44_config_start_tasks/) More information on how to configure start tasks
* [Exposing Ports](https://www.gitpod.io/docs/43_config_ports/) To help you open previews
* [Prebuilds](https://www.gitpod.io/docs/46_prebuilds/) More information on how to configure prebuilds!
