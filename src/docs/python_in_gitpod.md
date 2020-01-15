# Python

Gitpod comes with great support for Python builtin. Still, depending on your project, you might want to further optimize the experience.

## Examples

Before we get started, here are some examples of already-[gitpodified](https://www.gitpod.io/blog/gitpodify/) repositories!

| Name                                                                                                |                                                                                                              Description |                                        Try it |
-----------|-----------------------------------------------------------|----------------------------------------------------
| [gitpod-io/django-locallibrary-tutorial](https://github.com/gitpod-io/django-locallibrary-tutorial) | An example website written in Django by MDN |        [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#gitpod-io/django-locallibrary-tutorial) |
| [JesterOrNot/Gitpod-PyQt](https://github.com/JesterOrNot/Gitpod-PyQt)                               |    A PyQt example for Gitpod | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/JesterOrNot/Gitpod-PyQt) |
| [gitpod-io/wxPython-example](https://github.com/gitpod-io/wxPython-example)                      | A wxPython example for Gitpod    | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/wxPython-example) |
| [techwithtim/Hangman](https://github.com/techwithtim/Hangman)                                       |   A wxPython example for Gitpod  |     [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/techwithtim/Hangman) |


## GUI Applications with wxPython

To install wxPython to your repository please add the following to your [`.gitpod.Dockerfile`](https://www.gitpod.io/docs/42_config_docker/). If you don't have one, simply run `gp init` and commit the two generated files.

```dockerfile
# This will pull the official Gitpod `vnc` image
# which has much of what you need to start
FROM gitpod/workspace-full-vnc

USER gitpod

# Install wxPython dependencies
RUN sudo apt-get -q update && \
    sudo DEBIAN_FRONTEND=noninteractive apt-get install -yq freeglut3-dev python3.7-dev libpython3.7-dev libgl1-mesa-dev libglu1-mesa-dev libgstreamer-plugins-base1.0-dev libgtk-3-dev libnotify-dev libsdl2-dev libwebkit2gtk-4.0-dev libxtst-dev libgtk2.0-dev && \
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

# This will expose all necessary ports needed for your VNC image
ports:
  - port: 6080
    onOpen: open-preview
  - port: 5900
    onOpen: ignore
  - port: 35900
    onOpen: ignore

# This will make it so that on workspace start it will run a file called `app.py`
tasks:
  - command: python3 app.py
```
<br>
We also support other GUI frameworks such as
<br>
Here are some exmaples of other applications in Gitpod

| Name             | Open in Gitpod | Framework |
|------------------|----------------|-----------|
| Tic-Tac-Toe-GUI  | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/JesterOrNot/Tic-Tac-Toe-GUI) | Kivy |
| Pong             | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/JesterOrNot/Pong) | Kivy |
| Gitpod-PyQt | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/JesterOrNot/Pong) | PyQt |
<br>
And here is an example of PyQT running
<br>

## VSCode Extensions
While most popular Python VSCode extensions are builtin to Gitpod here are a few "Nice to have" extensions that you can use

### ARepl for Python
![](./images/AReplExample.gif)
It's helpful for constantly checking your code and debugging.
To install this extension for your repository, add the following to your `.gitpod.yml`:
```yaml
vscode:
  extensions:
    - almenon.arepl@1.0.20:Uu7lIOwyLgmNWpTwCl/iqQ==
```
### Python Test Explorer
![](./images/python_Test_In_Gitpod.png)
Easily test your python extensions.
To add this to your repository add the following to your `.gitpod.yml`
```yaml
vscode:
  extensions:
    - littlefoxteam.vscode-python-test-adapter@0.3.16:tZ/6xOSSdKUaq6JCUVkD+A==
```
