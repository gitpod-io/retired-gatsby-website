# Ruby in Gitpod

It's relatively easy to set up your Ruby project in Gitpod.

## Ruby Versions
Gitpod comes with Ruby 2.5 and 2.6 pre-installed (2.6 is the default).

To change the default Ruby version, you can simply run `rvm use 2.5 --default` in Gitpod's Terminal. You can also install other versions, e.g. by running `rvm install 2.7`.

## Example Repositories

Here are a few Ruby example projects that are already automated with Gitpod:

<div class="table-container">

Repository | Description | Try it
---------|----------|---------
[rails_sample_app](https://github.com/gitpod-io/rails_sample_app) | Ruby on Rails tutorial sample application | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/rails_sample_app)
[home-assistant.io](https://github.com/home-assistant/home-assistant.io) | Open source home automation | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/home-assistant/home-assistant.io)
[dev.to](https://github.com/thepracticaldev/dev.to) | A platform where software developers write articles | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/thepracticaldev/dev.to)

 </div>

## VSCode Extensions

Here are a few useful extensions that you'll likely want to install in your Ruby project.

### [Ruby Test Explorer](https://marketplace.visualstudio.com/items?itemName=connorshea.vscode-ruby-test-adapter)
With the Ruby test explorer, you can run unit tests from within the Gitpod UI.
![Ruby test explorer example](./images/ruby_test_ui.png)
To add this extension to your repository, simply add these lines to your [.gitpod.yml](https://www.gitpod.io/docs/config-gitpod-file/) configuration file:
```YAML
vscode:
  extensions:
    - connorshea.vscode-ruby-test-adapter@0.6.1:HO9rpcRv7bmRIuo7Mty/zg==
    - hbenl.vscode-test-explorer@2.15.0:koqDUMWDPJzELp/hdS/lWw==
```

## Ruby On Rails

So, you want to write your cool new Ruby On Rails application in Gitpod? Well, here is an idea of how to do it. Please take a look at our minimal Rails example running in Gitpod:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/JesterOrNot/Gitpod-Ruby-On-Rails)
