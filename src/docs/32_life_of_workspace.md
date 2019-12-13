# Life of a Workspace

 * [Timeouts](#timeouts)
 * [Stop and Archive](#stop-and-archive)
 * [Changes Are Saved](#changes-are-saved)

Gitpod makes creating fresh workspaces as easy as clicking a button on a GitHub page.
Gitpod's continuous dev environments encourages you to create fresh workspaces rather than restarting older ones.
This ensures that you are starting from a clean slate with proper configuration.

## Timeouts
Any running workspace will automatically stop after some time of inactivity. Normally, this timeout is 30 minutes but is extended to __60 minutes if you have the _Unlimited plan__.
Furthermore, _Unlimited_ users can manually boost the timeout of a workspace to 180 minutes. This comes in handy, e.g. in case you want to go out for a longer lunch or meeting and don't like restarting your workspace when coming back.

The timeout will always bet reset to the full 30 mins (or whatever is enabled) by any action in the IDE; moving the mouse is enough.
If the IDE is still open, but the corresponding workspace has stopped, a dialog will pop up that lets you start the workspace
again. You can alternatively jsut reload the browser, or go to your dashboard and start the workspace again.

For convenience, closing the browser window/tab containing the IDE reduces the timeout to 3 minutes.

## Garbage Collection

Old unused workspaces are automatically deleted after 30 days of inactivity. To prevent a workspace from being deleted, you can
manually star it in the [dashboard](https://gitpod.io/workspaces).

## Changes are Saved
Gitpod backs up the state of the `/workspace/` folder between workspace starts, so that
you can revisit them later. Files in other locations will not be saved!
