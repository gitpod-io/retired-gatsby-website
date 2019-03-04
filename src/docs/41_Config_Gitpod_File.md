## Gitpod Config File

 * [Checked-in Gitpod Config File](#checked-in-gitpod-file)
 * [definitely-gp Repository](#definitely-gp-repository)
 * [Inferred Gitpod Config File](#inferred-gitpod-file)

A workspace gets configured through a `.gitpod.yml` file written in YAML syntax. Here's an example:

```yaml
# The Docker image to run your workspace in. Defaults to gitpod/workspace-full
image: "<your-workspace-image>"
# Command to start on workspace startup (optional)
tasks:
  - command: "yarn install && yarn build"
# Ports to expose on workspace startup (optional)
ports:
  - port: 8000
```

There are three ways you can provide this file:

### Checked-in Gitpod Config File

The simplest and preferred option is to check in a `.gitpod.yml` file into your repository. This way you
version your workspace configuration together with your code. If, for example, you need to go back to
an old branch that required a different Docker image, it will start with the correct image, since that
bit of configuration is part of your codebase.

### [definitely-gp](https://github.com/gitpod-io/definitely-gp) Repository

Sometimes you can't check in a `.gitpod.yml` file, for instance because you do not have sufficient
access rights. However, you can still provide a `.gitpod.yml` file through the central
[definitely-gp](https://github.com/gitpod-io/definitely-gp) repository. Note that it contains
`.gitpod.yml` files for public GitHub repositories only. To add your `.gitpod.yml` file to `definitely-gp`,
simply raise a PR.

### Inferred Gitpod Config File

If the first two locations do not have a `.gitpod.yml` file for your project, Gitpod will compute one by
analyzing your project and using good common defaults.

## Creating a Gitpod Config File

Gitpod comes with a cli, that walks you through the initial creation of a `.gitpod.yml` file.
Open a terminal and type
```sh
gp init
```

It will ask you about the different configuration options and generate and open an initial `.gitpod.yml` file for you.
You can now edit directly in the file supported by validation, completion and hovers providing information about the various options.
