# Code Reviews

Let us have a look how we can perform a code review on GitHub with Gitpod. We continue the example
from the [previous chapter](58_Pull_Requests.md), where we created a pull request (PR). In the role
of a reviewer you open this PR on GitHub. Once again, Gitpod allows you to follow the GitHub flow.

![](images/cr-GitHub-pr.png)

Just like the creator of the PR, you can start a Gitpod workspace by prefixing the URL or using the
`Gitpod` button provided by the [Gitpod browser extension](20-Browser-Extension.md). Gitpod spawns a
workspace and the IDE loads in the browser.

![](images/cr-gitpod-started.png)

The initialization task in the repository's [.gitpod.yml file](40_Configuration.md) builds and starts
the app automatically such that you can test the changes right within Gitpod's `Preview`.

![](images/cr-preview.png)

Gitpod has opened the `Diff` view and the first change in an editor. Using the arrow keys, you can
easily browse through the changes and examine them in their context. Applying further changes is
easy, as you have a full IDE at your fingertips. You can commit them to the PRs branch as described
in the section on [Git](54_Git.md).

![](images/cr-diff.png)

You can also add additional review comments. The `Conversations` view lists all existing review
comments and allows to navigate to their locations in the code. Let us use it to answer the question
from the creator of the PR.

![](images/cr-respond-to-comment.png)

By clicking `Start a review`, Gitpod creates a review on GitHub and adds our comment. All subsequent
comments will be filed into this review. All reviews are listed in the `Pull Request` view.
Out-of-band comments and reviews can be synchronized using the synchronize button.

![](images/cr-pull-request-view.png)

The review can be finished by pushing the review button. You can add your final verdict and push it
to GitHub.

![](images/cr-finish-review.png)

If you have approved the PR, you can merge the changes by pushing the `Merge` button in the `Pull
Request` view or conventionally on the GitHub website.

![](images/cr-GitHub-pr-finished.png)
