# PHP in Gitpod

Gitpod Supports PHP right out of the box, but more advanced features such as Debugging and other tooling need to be configured, so here is how to do it!

## Example Repositories

| Repository | Description | Try it |
|------------|-------------|--------|
| magento2gitpod | Magento 2 optimized setup for Gitpod: Nginx, MySQL, PHP 7.2, PHP-FPM and more | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/nemke82/magento2gitpod) |
| koel | A personal music streaming server that works | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/phanan/koel) |
## VSCode Extensions
### PHP Debug

![](images/phpDebug.gif)
The PHP Debug extension allows debugging PHP applications from within Gitpod.

To add this extension to your repository, you must do two things:

First you must create a [`.gitpod.Dockerfile`](https://www.gitpod.io/docs/config-docker/):

```Dockerfile
FROM gitpod/workspace-full

USER gitpod

RUN sudo apt-get update -q \
    && sudo apt-get install -y php-dev

RUN wget http://xdebug.org/files/xdebug-2.9.1.tgz \
    && tar -xvzf xdebug-2.9.1.tgz \
    && cd xdebug-2.9.1 \
    && phpize \
    && ./configure \
    && make \
    && sudo cp modules/xdebug.so /usr/lib/php/20170718 \
    && sudo bash -c "echo -e '\nzend_extension = /usr/lib/php/20170718/xdebug.so\n[XDebug]\nxdebug.remote_enable = 1\nxdebug.remote_autostart = 1\n' >> /etc/php/7.2/cli/php.ini"
```

Second, reference the above Dockerfile in a [`.gitpod.yml`](https://www.gitpod.io/docs/config-gitpod-file/) file, then also install the extension, like so:

```yaml
image:
  file: .gitpod.Dockerfile
# This is to get rid of the annoying popup feel free to leave this out
ports:
  - port: 9000
    onOpen: ignore
vscode:
  extensions:
    - felixfbecker.php-debug@1.13.0:WX8Y3EpQk3zgahy41yJtNQ==
```

Finally, here is an [example repository](https://github.com/JesterOrNot/Gitpod-PHP-Debug) that contains a full PHP debugging configuration for Gitpod as described above. You can try it by clicking here:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/JesterOrNot/Gitpod-PHP-Debug)
