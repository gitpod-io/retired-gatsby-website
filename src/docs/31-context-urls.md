# Context URLs

 * [GitHub Project Context](#github-project-context)
 * [GitHub File Context](#github-file-context)
 * [GitHub Issue Context](#github-issue-context)
 * [GitHub Pull Request Context](#github-pull-request-context)

Gitpod derives the workspace context from the URL of the repository page from which it was
started. Different issues, pull requests, or branches will result in different workspaces, allowing
developers to easily perform individual tasks in their own isolated environments.

Each workspace includes a full Linux container. From the IDE's terminal, the user can directly
access all development tools of the Linux system and even install missing ones.

In the following we describe the supported contexts and what they do:

## GitHub Project Context

Creating a Gitpod workspace from the project's base URL does not carry a lot of context.
Gitpod will check out the `master` branch and open the `Readme.md` if it exists.

An example for this context is:

```
https://github.com/arunoda/learnnextjs-demo
```

## GitHub File Context

The file context is an extension to the project context, in that Gitpod will check out the
corresponding branch and open the respective file in an editor.

An example for this context is:

```
https://github.com/arunoda/learnnextjs-demo/blob/getting-started/pages/index.js
```

When pointing to a directory, e.g.
```
https://github.com/arunoda/learnnextjs-demo/tree/create-dynamic-pages/pages
```
`Readme.md` will be opened if it exists there.

## GitHub Issue Context

When starting a workspace from a GitHub issue, a local branch named `GH-{issue-number}` will be
created, based on the remote's default branch. In most cases that will be `origin/master`.

In addition, the commit message is preconfigured with:

```
fixes #{organization}/{repo}#{issue-number}
```

This will automatically close the GitHub issue once such a commit is merged into the default branch.

As soon as changes have been committed locally, the `Pull Request` view on the right can be used to
push changes to a remote repository and create a pull request.

## GitHub Pull Request Context

Starting workspaces from pull requests will clone the respective branch and open the file
changes of the PR in a view on the left. The first change is opened in the diff editor.
Also the `Pull Request` view on the right is configured to reflect the PR information.

This context is meant for code reviews or to take action on feedback you got from a reviewer.
