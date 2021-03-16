# Start Tasks

When starting or restarting a workspace you typically want to run certain tasks.
Most probably that includes the build and maybe also running tests and automatically start the application in
e.g. a dev server.

Gitpod allows you to configure start tasks in the `.gitpod.yml` file.

For instance, the start script for the Gitpod documentation repository is defined as:

```yaml
tasks:
  - init: yarn && yarn build
    command: yarn dev --host 0.0.0.0
```

You can have multiple tasks, which are opened on separated terminals.
```yaml
tasks:
- command: echo Terminal1
- command: echo Terminal2
```
They are started in parallel. See [below options](#openin) on configuring where and how the terminals are placed in the workbench.

## Defining Commands

The `command` property is used to specify the command that shall be run on every start of a workspace.
It is a bash command and doesn't need to terminate. For instance, you could start a web server or a database.

The script below will start a development-time web server in many npm projects:

```yaml
tasks:
  - command: npm run dev
```
Task properties will control when a command is executed. Check the table below for an overview of the different starting scenarios.

<div class="table-container">

| Start Mode | Execution |
| ---------  | -------   |
| Fresh Workspace | `before && init && command` |
| Restart Workspace | `before && command` |
| Snapshot | `before && command` |
| Prebuild | `before && init && prebuild` |

</div>

### `init` command

The `init` property can be used to specify shell commands that should only be executed after a workspace was freshly cloned and needs to be initialized somehow.
Such tasks are usually builds or downloading dependencies. Anything you only want to do once but not when you restart a workspace or start a [snapshot](/docs/sharing-and-collaboration/).

Here is an example for a node project that makes use of `init`:

```yaml
tasks:
  - init: npm install
    command: npm run dev
```

This will make sure that `npm install` is executed only after the repository was cloned, but not when restarting the workspace or starting a snapshot of that workspace.

### `before` command

In case you need to run something even before init, that is a requirement for both `init` and `command`, you can use the `before` property.

```yaml
tasks:
  - before: ./setup.sh
    init: npm install
    command: npm run dev
```

### `prebuild` command
The optional `prebuild` command will be executed during [prebuilds](/docs/prebuilds/). It is meant to run additional
long running processes that could be useful, e.g. running test suites.

### Configuring the Terminal

A task allows to configure where and how the terminal should open using the properties below.
Please note that this information is used if no previous terminals in the layout exist.
Snapshots will first try to reuse existing terminals in the layout, before opening new ones.

```yaml
tasks:
  - command: python3 -m http.server 8080
    name: Static Server
  - openMode: split-right
    command: echo SplitTerminal
  - openIn: left
    command: echo LeftPanelTerminal
```

## openIn

You can configure where in the IDE the terminal should be opened:

<div class="table-container">

| openIn       | Where |
| ---------------|---------------------------|
| `openIn: bottom`| the bottom panel (default)|
| `openIn: left`  | the left panel|
| `openIn: right` | the right panel|
| `openIn: main`  | the main editor area|

</div>

## openMode

You can configure how the terminal should be opened relative to the previous task.

<div class="table-container">

| openMode        | Description |
| --------------- | ----------- |
| `openMode: tab-after`     | Opens in the same tab group right after the previous tab |
| `openMode: tab-before`    | Opens in the same tab group left before the previous tab |
| `openMode: split-right`   | Splits and adds the terminal to the right |
| `openMode: split-left`    | Splits and adds the terminal to the left |
| `openMode: split-top`     | Splits and adds the terminal to the top |
| `openMode: split-bottom`  | Splits and adds the terminal to the bottom |

</div>
