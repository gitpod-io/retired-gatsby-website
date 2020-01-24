# Prebuilds

Whenever your code changes (e.g. someone pushes to GitHub), Gitpod can prebuild your workspace, i.e. run the commands in your `.gitpod.yml`.
When you open a workspace on a branch/pull request for which a prebuild exists, this workspace will have all dependencies downloaded
and your code will already be built.

## Enable Prebuilt Workspaces
To enable prebuilt workspaces follow these steps:

1. Go to the <a href="https://github.com/apps/gitpod-io" target="_blank">gitpod-io GitHub app</a> and click "Configure"
2. Choose the organizations/accounts you want to install the Gitpod integration for, and click _install_
3. You will be forwarded to Gitpod where you need to confirm the installation

By default Gitpod prebuilds workspaces for all changes on the default branch (i.e. `master`) and for pull requests coming from the same repository.

> **Note**: prebuilds are executed as the user who installed the GitHub app. This means that if you want to use
> prebuilds on a private repository, the user who installed the GitHub app (e.g. you) need to give access to private
> repositories.

## Configure prebuilds
There are three parts to configuring prebuilds:
1. the tasks that will be run during a prebuild,
2. when a prebuild will be run, and
3. how you will be notified by the `gitpod-io` GitHub app.

All three parts are configured in the `.gitpod.yml`.
What tasks to be executed during the prebuilt is configured using [start tasks](/docs/config-start-tasks/).
It is similar to regular workspace starts with the difference that the `command` phase is not executed and that there is a `prebuild` phase that you can use to execute additional long running tasks, e.g. run unit tests.

The rest is configured using the `github` section.

See below for an example:
```YAML
github:
  prebuilds:
    # enable for the master/default branch (defaults to true)
    master: true
    # enable for all branches in this repo (defaults to false)
    branches: true
    # enable for pull requests coming from this repo (defaults to true)
    pullRequests: true
    # enable for pull requests coming from forks (defaults to false)
    pullRequestsFromForks: true
    # add a check to pull requests (defaults to true)
    addCheck: true
    # add a "Review in Gitpod" button as a comment to pull requests (defaults to false)
    addComment: true
    # add a "Review in Gitpod" button to the pull request's description (defaults to false)
    addBadge: false
    # add a label once the prebuild is ready to pull requests (defaults to false)
    addLabel: false
```

### When a prebuild is run
The `prebuilds` section in the `.gitpod.yml` file configures when prebuilds are run.
By default prebuilds are run on push to master and for each pull request coming from the same repository.
You can enable prebuilds also for all branches and for pull requests from forks.

### GitHub integration
Once the GitHub app is installed Gitpod can add helpful annotations to your pull requests.

### Manual execution of prebuild
Alternatively and independantly from configuration above it is possible to trigger the prebuild using
```
https://gitpod.io/#prebuild/https://github.com/ORG/REPO
```

#### Checks
By default Gitpod registers itself as a check to pull requests - much like a continuous integration system would do.
You can disable this behaviour in the `.gitpod.yml` file in your default/master branch:
```YAML
github:
  prebuilds:
    addCheck: false
```

#### Comment
Gitpod can add a comment with a "Review in Gitpod" button to your pull requests. The color of the button
shows the state of the prebuild:

<div class="table-container">

| <div style="width:140px">Button color</div> | Prebuild state |
| ---  | --- |
| ![Review in Gitpod (prebuild building)](./images/prebuild-ongoing.svg) | the prebuild is currently running. Opening a workspace now will show the log output of the prebuild. Once the prebuild is done, your workspace will open. |
| ![Review in Gitpod (prebuild done)](./images/prebuild-done.svg) | the prebuild is done. A new workspace on this branch/PR will make use of this prebuild. |
| ![Review in Gitpos (prebuild failed)](./images/prebuild-failed.svg) | the prebuild failed or timed out. A new workspace on this branch/PR will open the prebuild and show you the log output. |

</div>

You can enable this behaviour in the `.gitpod.yml` file in your default/master branch:
```YAML
github:
  prebuilds:
    addComment: true
```

#### Badge
Instead of adding a comment, Gitpod can also modify the description of a pull request to add the "Review in Gitpod" button.
This approach produces fewer GitHub notifications, but can also create a concurrent editing conflict when the bot and a user try to edit the description of a pull request at the same time.

You can enable this behaviour in the `.gitpod.yml` file in your default/master branch:
```YAML
github:
  prebuilds:
    addBadge: true
```

The `addComment` and `addBadge` behaviours are not mutually exclusive (i.e. enabling one does not disable the other).
If you don't want the comments to be added, disable them using `addComment: false`.

#### Label
Gitpod can also add a label to your pull requests once the prebuild is done. If someone pushes to the source branch of the PR, Gitpod will remove the label until the new prebuild is ready.
This is handy if you only want to review PRs for which a prebuild exists, saving you the time waiting for stuff to build.

You can enable this behaviour in the `.gitpod.yml` file in your default/master branch:
```YAML
github:
  prebuilds:
    addLabel: prebuilt-in-gitpod-or-any-other-label
```

**Note**: This is very much a beta-feature and not necessarily reliable. If a label has been added to a PR, a prebuild exists.
But sometimes a label may not be added even though the workspace was prebuilt.
