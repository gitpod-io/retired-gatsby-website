# Bash in Gitpod

Bash is the default shell for Gitpod. However, if you're developing a Bash script yourself, you may want to configure additional language support.

## Example Repositories

Here are a few Bash example projects that are already automated with Gitpod:

<div class="table-container">

| Repository | Description | Try It |
|------------|--------------|--------|
|[inlets/inlets](https://github.com/inlets/inlets) | Reverse proxy and service tunnel | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/inlets/inlets) 

</div>

## VSCode Extensions

### ShellCheck

ShellCheck provides linting for common mistakes in your shell script.

To use ShellCheck in Gitpod, first, we must install the `shellcheck` tool. Here is a simple Dockerfile to get you started:

```Dockerfile
FROM gitpod/workspace-full

USER gitpod

RUN brew install shellcheck
```

You should also install the shellcheck VS Code extension in Gitpod, by adding a [.gitpod.yml](https://www.gitpod.io/docs/41_config_gitpod_file/) configuration file to your repository that looks like this (notice the `vscode` extensions section):

```yaml
image:
  file: .gitpod.Dockerfile

vscode:
  extensions:
    - timonwong.shellcheck@0.9.0:hsU/Rd39aqPYowTqL+DbXg==
```

Not sure about ShellCheck? Try it in Gitpod!

[![JesterOrNot/Gitpod-ShellCheck](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/JesterOrNot/Gitpod-ShellCheck)

### Bash IDE

![A Bash IDE demonstration](images/bashIDE.png)
<br/>
Just to name a few things Bash IDE adds: Code completion, hovers, and diagnostic reporting.

To install Bash IDE to your repository add the following to your [.gitpod.Dockerfile](https://www.gitpod.io/docs/config-docker/)

```dockerfile
RUN npm i -g bash-language-server
```

Also the following in your
[.gitpod.yml](https://www.gitpod.io/docs/41-config-gitpod-file/)

```yaml
vscode:
  extensions:
    - mads-hartmann.bash-ide-vscode@1.4.0:/qx+rdXE/fGTGWhelNf3aQ==
```

Not sure about Bash IDE? Try it in Gitpod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/JesterOrNot/Gitpod-BashIDE)

## External Resources

- For more on ShellCheck see https://shellcheck.net
