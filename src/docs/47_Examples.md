# Example Configurations

## Ready-made images

We also make images for common tech stacks that didn't fit in `gitpod/workspace-full`.

### noVNC

Graphical environment on port `6080`.

```
FORM gitpod/workspace-full-vnc
```

### PostgreSQL

`pg_start`, `pg_stop`, `pg_ctl status`.

```
FROM gitpod/workspace-postgres
```

## Real-world examples

### DEV

PostgreSQL, ensuring ENV variables are set
https://github.com/thepracticaldev/dev.to/blob/master/.gitpod.yml
https://github.com/thepracticaldev/dev.to/blob/master/.gitpod.dockerfile

### CircuitIO

https://github.com/Circuito-io/ComponentEditor/blob/master/.gitpod.yml

### Theia

https://github.com/theia-ide/theia/blob/master/.gitpod.yml

### Ant-design

Node 10 web app
https://github.com/ant-design/ant-design/blob/master/.gitpod.yml

### Firefox profiler

Split terminal with welcome message
https://github.com/firefox-devtools/profiler/blob/master/.gitpod.yml

### Windows 95

noVNC, Electron
https://github.com/gitpod-io/definitely-gp/blob/master/windows95/.gitpod.yml
https://github.com/gitpod-io/definitely-gp/blob/master/windows95/Dockerfile

### Chromium (experimental)

https://github.com/gitpod-io/definitely-gp/blob/master/chromium/.gitpod.yml
https://github.com/gitpod-io/definitely-gp/blob/master/chromium/Dockerfile

## More examples

https://github.com/gitpod-io/definitely-gp
https://github.com/search?q=.gitpod.yml&type=Commits

Schema `.gitpod.yml`:
https://github.com/gitpod-io/gitpod-yml-schema