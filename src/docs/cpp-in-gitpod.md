# C++ in Gitpod

Gitpod supports C++ right out of the box, but there are still ways to enhance your C++ experience within Gitpod.

## Example Repositories

Here are a few C++ example projects that are already automated with Gitpod:

<br>

<div class="table-container">

| Repository | Description | Try it |
|------|----------------|-----------|
|[Component Editor](https://github.com/Circuito-io/ComponentEditor) | circuito.io Component Editor | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Circuito-io/ComponentEditor)| |
| [tinyraycaster](https://github.com/ssloy/tinyraycaster) | old-school FPS in a weekend | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/ssloy/tinyraycaster)|
</div>

<br>

## Environment

### C++ Tools

All Gitpod workspaces already come with `clang` (version 10.0.0 as of January 2020), `gcc` / `g++` (8.3.0), `cmake` (3.15.5), `gdb`, and a few other useful C++ tools pre-installed by default.

However, if you're missing some additional tools, you can simply run `brew install <tool_name>` to install it in the current workspace or [write your own .gitpod.Dockerfile](https://www.gitpod.io/docs/config-docker/#creating-docker-images-for-gitpod) to install it across all workspaces for your repository.

## VSCode Extensions

### C/C++ Tools

<br/>

![C++ Tools Extension example](images/cppTools.png)
The C/C++ VSCode extension gives enhanced intellisense support for C++! To install it to your repository add the following to your [.gitpod.yml](https://www.gitpod.io/docs/config-gitpod-file/):

```yaml
vscode:
  extensions:
    - ms-vscode.cpptools@0.26.2:Pq/tmf2WN3SanVzB4xZc1g==
```
