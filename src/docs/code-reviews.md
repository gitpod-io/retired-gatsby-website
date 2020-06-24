# Code Reviews

Let us have a look how we can perform a code review on GitHub with Gitpod. We continue the example
from the [previous chapter](/docs/pull-requests/), where we created a pull request (PR). In the role
of a reviewer you open this PR on GitHub. Once again, Gitpod allows you to follow the GitHub flow.

![GitHub Pull Request Page](images/cr-GitHub-pr.png)

Just like the creator of the PR, you can start a Gitpod workspace by prefixing the URL or using the
`Gitpod` button provided by the [Gitpod browser extension](/docs/browser-extension/). Gitpod spawns a
workspace and the IDE loads in the browser.

![Gitpod Workspace started from a Pull Request](images/cr-gitpod-started.png)

The initialization task in the repository's [.gitpod.yml file](/docs/configuration/) builds and starts
the app automatically such that you can test the changes right within Gitpod's `Preview`.

![Gitpod Workspace Preview](images/cr-preview.png)

Gitpod has opened the `Diff` view and the first change in an editor. Using the arrow keys, you can
easily browse through the changes and examine them in their context. Applying further changes is
easy, as you have a full IDE at your fingertips. You can commit them to the PRs branch as described
in the section on [Git](/docs/git/).

![Gitpod Diff View](images/cr-diff.png)

You can also add additional review comments. The `Conversations` view lists all existing review
comments and allows to navigate to their locations in the code. Let us use it to answer the question
from the creator of the PR.

![Gitpod Pull Request Conversation View](images/cr-respond-to-comment.png)

By clicking `Start a review`, Gitpod creates a review on GitHub and adds our comment. All subsequent
comments will be filed into this review. All reviews are listed in the `Pull Request` view.
Out-of-band comments and reviews can be synchronized using the synchronize button.

![Gitpod Pull Request View](images/cr-pull-request-view.png)

The review can be finished by pushing the review button. You can add your final verdict and push it
to GitHub.

![Gitpod Finish Review](images/cr-finish-review.png)

If you have approved the PR, you can merge the changes by pushing the `Merge` button in the
`Pull Request` view or conventionally on the GitHub website.

![Github Pull Request with Review Finished](images/cr-GitHub-pr-finished.png)
