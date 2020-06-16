---
author: JesterOrNot
date: Thu June 11 2020
image: /gitpod-bitbucket.png
subtitle: Happy Summer!
teaserImage: /gitpod-bitbucket.png
title: June 2020 Release
---

# June 2020 Release

Hello everyone! We hope you're having a great summer! We are releasing a new (highly requested) feature in Gitpod for everyone: Search for Extensions in Gitpod.

## Search for Extensions in Gitpod

Before searching for extensions was not ideal you had to search through some extternal registry and download the extension and drag and drop it into Gitpod but now you'll be able to search and install your favoraite Gitpod extension *from gitpod!* using the new vendor neutral extension registry [OpenVSX](https://open-vsx.org/).

However, the proof is in the pudding as it werem, so let's go through an example, say we want to setup a Rust project (for the sake of simplicitly we will just be configuring extensions for a full example please see [the docs](https://www.gitpod.io/docs/languages/rust/)) first we might want syntaax highlighting for our [Cargo.toml](https://doc.rust-lang.org/cargo/reference/manifest.html) file so before this feature one might go through say OpenVSX or Visual Studio Marketplace, but now we can go directly through Gitpod just like in VSCode! First open your extensions view or do <kbd>CTRL + SHIFT + X</kbd> and at the top will be a search bar, simply type in `toml` and the top result will be `Better TOML` simply click install and you're done!

![An image of the extension search](/ext-search.png)
