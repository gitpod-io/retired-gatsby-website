# Python

Gitpod comes with great support for Python builtin. Still, depending on your particular project, you might want to further optimize the experience.

## GUI Applications with wxPython

Have a super cool GUI application you are building with wxPython? Want to run it in Gitpod? Please take a look at [gitpod-io/Gitpod-PythonGUI-Example](https://github.com/gitpod-io/Gitpod-PythonGUI-Example)

To install wxPython to your repository please add the following to your [`.gitpod.Dockerfile`](https://www.gitpod.io/docs/42_config_docker/) if you don't have one please run `gp init` and commit the two generated files.

```dockerfile
# This will pull the official Gitpod `vnc` image
# which has much of what you need to start
FROM gitpod/workspace-full-vnc

USER gitpod

# Install wxPython dependencies
RUN sudo apt-get -q update \
    && sudo DEBIAN_FRONTEND=noninteractive apt-get install -yq \
    freeglut3-dev \
    python3.7-dev \
    libpython3.7-dev \
    libgl1-mesa-dev \
    libglu1-mesa-dev \
    libgstreamer-plugins-base1.0-dev \
    libgtk-3-dev \
    libnotify-dev \
    libsdl2-dev \
    libwebkit2gtk-4.0-dev \
    libxtst-dev \
    libgtk2.0-dev \
    && sudo rm -rf /var/lib/apt/lists/*

# Install wxPython
RUN pip3 install -U -f https://extras.wxpython.org/wxPython4/extras/linux/gtk3/ubuntu-18.04/ wxPython
```

Here is an example `.gitpod.yml`:

```yaml
image:
  file: .gitpod.Dockerfile

ports:
  - port: 6080
    onOpen: open-preview
  - port: 5900
    onOpen: ignore
  - port: 35900
    onOpen: ignore

tasks:
  - command: python3 app.py
```

## Examples

Here are some examples of already Gitpodified workspace setups!

| Name                                                                                                |                                                                                                              Open In Gitpod Button |
| --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------: |
| [gitpod-io/django-locallibrary-tutorial](https://github.com/gitpod-io/django-locallibrary-tutorial) |        [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#gitpod-io/django-locallibrary-tutorial) |
| [JesterOrNot/Gitpod-PyQt](https://github.com/JesterOrNot/Gitpod-PyQt)                               |    [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/JesterOrNot/Gitpod-PyQt) |
| [gitpod-io/wxPython-example](https://github.com/gitpod-io/wxPython-example)                         | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/wxPython-example) |
| [techwithtim/Hangman](https://github.com/techwithtim/Hangman)                                       |        [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/techwithtim/Hangman) |
