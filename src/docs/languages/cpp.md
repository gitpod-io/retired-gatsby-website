# C++ in Gitpod

Gitpod supports C++ right out of the box, but there are still ways to enhance your C++ experience within Gitpod.

## Example Repositories

Here are a few C++ example projects that are already automated with Gitpod:

<div class="table-container">

| Repository | Description | Try it |
|------|----------------|-----------|
|[Component Editor](https://github.com/Circuito-io/ComponentEditor) | circuito.io Component Editor | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Circuito-io/ComponentEditor)| |
| [tinyraycaster](https://github.com/ssloy/tinyraycaster) | old-school FPS in a weekend | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/ssloy/tinyraycaster)|
</div>

## Environment

### C++ Tools

All Gitpod workspaces come with the latest available `clang`, `gcc`, `cmake`, `gdb`, and other useful C++ tools pre-installed by default.

However, if you're missing some additional tools, you can simply run `brew install <tool_name>` to install it in the current workspace or [write your own .gitpod.Dockerfile](https://www.gitpod.io/docs/config-docker/#creating-docker-images-for-gitpod) to install it across all workspaces for your repository.

## Further Reading

- [How to enable the `clang-tidy` linter in Gitpod](https://community.gitpod.io/t/gitpod-and-c/622)
