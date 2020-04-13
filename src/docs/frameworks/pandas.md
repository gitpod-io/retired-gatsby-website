# Pandas in Gitpod

Welcome data scientists! This guide will show you how to configure Gitpod for Pandas development!

## Start Tasks

Setting up [start tasks](/docs/config-start-tasks/) for Pandas isn't very different from other Python frameworks, here is an example of how to configure you start tasks:

```yaml
tasks:
    # Install requirements in this case pandas
  - init: pip3 install -r requirements.txt
    # Run your program on workspace start
    command: python3 <PATH TO APP>
```

## Try it

To see a minimal project with Pandas installed and configured, please check out [gitpod-io/Gitpod-Pandas](https://github.com/gitpod-io/Gitpod-Pandas):

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/Gitpod-Pandas)

## Further Reading

- [Python in Gitpod](/docs/languages/python) For further information on configuring Python projects in Gitpod.
