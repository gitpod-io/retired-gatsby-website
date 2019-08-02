---
author: svenefftinge
subtitle: Join the Beta!
title: Your Favorite VS Code Extension in an Online IDE
date: Fri Aug 2 2019 12:16:17 GMT+0000 (UTC)
image: /tools.jpg
teaserImage: /tools.jpg
---

Today, we are excited to announce the start of our public beta phase for VS Code extensions in Gitpod, the next generation cloud IDE.

So far Gitpod supported the mainstream languages like JavaScript, Java, Python, Ruby, Rust, C++ and Go, but many others weren't covered yet. With today's release, we have added support for installing any of the 10K+ existing extensions for VS Code. Finally, Scala, Swift and F# developers will feel at home in Gitpod, too.

## Part of Your Project’s Configuration

Gitpod automatically creates fresh, disposable dev environments on demand. Unlike traditional dev environments which you setup once and then have to maintain over time, you get a fresh one for every task. Therefore any installed extensions would normally be gone when discarding the workspace.

That’s because a Gitpod dev environment is tailored and optimized for the project at hand. I might work on multiple different projects, e.g. a Scala project as well as some Node.js projects. Why should I need to have the Scala extension in all my projects?

> Traditionally you would maintain one bloated editor for all your projects or alternatively maintain multiple per project.

Gitpod solves this problem for you by providing a small configuration that is part of your git history. This includes information about dependencies, start up tasks and now also lists the extensions needed for the project at that point in time (version).

Here is how it works:

## Installing an Extension

Installing extensions is a matter of dragging and dropping a *.vsix file into the extension view. Gitpod will automatically install and activate the new extension, and add an entry to the .gitpod.yml file. You can now test the experience and if you are happy with it share this new experience with your team by pushing the change to your remote Git repository.
Here’s a small screencast:

`youtube: hEqmXM62cjo`

## Where Do I Find Extensions?

Microsoft prohibits the direct use of the [Visual Studio Marketplace](https://marketplace.visualstudio.com/vscode) for any other software but their own. Although most extensions are open-source and not even developed or maintained by MS, the access to the Marketplace is restricted.
However, if you have the `.vsix` file available, you can upload the extension yourself. `.vsix` files are not only available from the Visual Studio Marketplace but can be found on [GitHub as well](https://github.com/prettier/prettier-vscode/releases).

An extension only needs to be uploaded once and is available for you and your teammates afterwards. Please make sure you comply with the licenses of those extensions.
Additionally, of course, you can develop and upload your own extensions. They won’t be listed anywhere publicly except in your own `.gitpod.yml` file.

## Your extension doesn't work as expected?

Covering the full API surface of VS Code extension is a huge task and the Theia community has been working hard on that for over a year now.

As we are approaching 100% coverage of the implementation it is time to expose this feature to more users. Which is why we decided to make it available as a beta feature to the Gitpod community.

So if you want to help us hardening this exciting new feature, please try your favorite extensions and [submit issues on the Theia project](https://github.com/theia-ide/theia/issues/new) for anything that you think needs improving.

Happy coding!
