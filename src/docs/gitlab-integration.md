# GitLab Integration

Gitpod comes with GitLab integration that allows you to start dev environments for all your GitLab projects.

## Starting Workspaces

To launch new Gitpod workspaces for your projects, issues, branches, merge requests, etc. you can prefix any GitLab URL with `gitpod.io/#` (or your respective Gitpod Self-Hosted URL) as described in the [Getting Started](/docs/getting-started) page.
Alternatively, the [browser extension](/docs/browser-extension/) can be installed to add a convenient Gitpod button to every GitLab page.


## Enabling Prebuilds

To enable [prebuilt workspaces](/docs/prebuilds/) for your GitLab project you need to grant `allow api calls` in Gitpod's [Access Control](/access-control/) page. This allows Gitpod to install a webhook. The webhook creates a new prebuild for every push event.

The webhook will be automatically installed when you trigger the first prebuild manually. For this, prefix your GitLab project URL with `gitpod.io/#prebuild/` as described in the [prebuilds page](/docs/prebuilds/#on-gitlab-and-bitbucket).
