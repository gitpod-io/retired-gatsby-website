# Life of a Workspace

 * [Timeouts](#timeouts)
 * [Stop and Archive](#stop-and-archive)
 * [Changes Are Saved](#changes-are-saved)

Gitpod makes creating fresh workspaces as easy as clicking a button on a GitHub page.
In most cases it is easier to create fresh workspaces rather than going back to older ones.
See the [dashboard documentation](60_Dashboard.md) on where to find your workspace history
and how to restart the older workspaces.

## Timeouts
Any running workspace will automatically stop after 30 minutes of inactivity. Activity is triggered
by any action in the IDE; moving the mouse is enough. If the IDE is still open, but the
corresponding workspace has stopped, a dialog will pop up that lets you start the workspace
again.

For convenience, closing the browser window/tab containing the IDE reduces the timeout to 5 minutes.

## Stop and Archive
If you want more control over your Gitpod hours, you can stop your workspace explicitly. To
do so, click on the avatar in the top right and choose the `Stop Workspace` command (also available
through the command palette). The dialog will ask if you want to archive the workspace. By default,
archived workspaces are not shown in the workspace list of the dashboard and will not be considered
when starting a fresh workspace for the same context URL.

Workspaces can also be stopped, started, archived, and unarchived from the
[dashboard](60_Dashboard.md).

## Changes are Saved
Gitpod continuously backs up the current state of the workspace's repository in the cloud, so that
you can revisit it later. Files in other locations will not be saved. Gitpod never deletes a
workspace. See [dashboard](60_Dashboard.md) for details.

## Starting: Initial and Restart
Gitpod workspaces have two start modes, for which you can configure dedicated tasks on startup:
 - initial
 - restart

Read more about how to configure tasks in [configuring start tasks](44_Config_Start_Tasks.md).

