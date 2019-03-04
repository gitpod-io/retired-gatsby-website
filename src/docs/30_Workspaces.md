# Workspaces

A workspace is what you code in, it consists of the files, configuration and the underlying docker file. Workspace are created on the fly driven by
convention and configuration.

A Gitpod workspace can be created from any GitHub project, branch, issue, or pull request. Very
soon Gitpod will support additional platforms and integrate with GitLab, Bitbucket, and Jira.

In Gitpod workspaces usually have a very short life. Gitpod creates one when you need it and forgets about when you are done. There is no reason to get back and do any maintainance. Because everything is driven by configuration, you can always create a fresh one when you need it.

  * [Context URLs](31_Context_Urls.md)
    * [GitHub Project Context](31_Context_Urls.md#github-project-context)
    * [GitHub File Context](31_Context_Urls.md#github-file-context)
    * [GitHub Issue Context](31_Context_Urls.md#github-issue-context)
    * [GitHub Pull Request Context](31_Context_Urls.md#github-pull-request-context)
  * [Life of a Workspace](32_Life_of_Workspace.md)
    * [Timeouts](32_Life_of_Workspace.md#timeouts)
    * [Stop and Archive](32_Life_of_Workspace.md#stop-and-archive)
    * [Changes Are Saved](32_Life_of_Workspace.md#changes-are-saved)
  * [Shared Workspaces](33_Sharing_and_Collaboration.md)
  * [Command Line Interface](34_Command_Line_Interface.md)
