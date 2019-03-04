---
url: https://medium.com/gitpod/bring-your-own-docker-image-to-gitpod-52db1aa861de
date: Wed Sep 12 2018 08:25:15 GMT+0000 (UTC)
author: geropl
title: Bring your own (Docker) image to Gitpod
---

# Bring your own (Docker) image to Gitpod

Since we released Gitpod into Public Beta it has been incredibly exciting to see people from all over the world use our service. Even more so with feedback like this:

<iframe src="https://medium.com/media/75e088faf659f6c20dcb82abcff84f01" frameborder=0></iframe>

Of course, there is always room for improvement, especially with a service as new as Gitpod. Luckily, people have started to share their questions and ideas with us on [https://github.com/gitpod-io/gitpod](https://github.com/gitpod-io/gitpod). One of the most often asked questions was:

### “How do I add tool XYZ to my workspace?”

And indeed that hasn’t been straight forward. You had to:

* create a Dockerfile on your machine

* build that Dockerfile on your machine

* push it to hub.docker.com (no account? Create one first!)

* create a branch in your project with a customized .gitpod.yml file which references that specific image

* visit *gitpod.io/#<your-repos-branch-url>*

* get no feedback except ‘Build has status FAILURE’…

* rinse and repeat from step 2

That was way too tedious for everyone to start playing around.

### Let Gitpod do the heavy lifting

To improve this experience we introduced[ Dockerfile support (#62)](https://github.com/gitpod-io/gitpod/issues/62), which lets you reference your Dockerfile directly from inside your .gitpod.yml file:

    image:
      file: docker/Dockerfile

Now, Gitpod knows about the Dockerfile and builds that image for you. Whenever you access the repository on Gitpod it checks whether the Dockerfile has been updated and rebuilds the image if needed. When this happens you’ll be shown the log output of the build for easier debugging, too.

### An example, please!

Let’s get concrete. As an exercise we’ll use [a minimal REST service](https://github.com/lankydan/rust-web-with-rocket) written in[ Rust](https://www.rust-lang.org/) using Rocket and Diesel that talks to a PostgreSQL DB. It also has a nice[ blog post](https://lankydanblog.com/2018/05/20/creating-a-rusty-rocket-fuelled-with-diesel/) to get started.

The example relies on a very specific nightly build of the Rust compiler from May 2018. Thus, a simple git clone … && cargo build && cargo run won’t get you up-and-running. Of course, you could switch Rust toolchains but then other projects on your machine might stop working. Furthermore, there is more setup and tools to install: A database, a CLI tool…
Gitpod to the rescue!

I went to [gitpod-io/definitely-gp](https://github.com/gitpod-io/definitely-gp/) and added a [*.*gitpod.yml](https://github.com/gitpod-io/definitely-gp/blob/master/rust-web-with-rocket/.gitpod.yml) and [Dockerfile](https://github.com/gitpod-io/definitely-gp/blob/master/rust-web-with-rocket/Dockerfile) there. The *.*gitpod.yml file looks like this:

<iframe src="https://medium.com/media/18a3f0e6a78fe28d7e7eb3d77c50d22b" frameborder=0></iframe>

It references the Dockerfile next to it, says that the resulting app should be accessible on port 8000 and contains the command executed on workspace startup: set config, start postgres, build and run app (I basically copied those from the repo’s .md file).

The Dockerfile itself inherits from our default image [gitpod/workspace-full](https://hub.docker.com/r/gitpod/workspace-full/)¹ and contains:

* PostgreSQL (+ some configuration for the gitpod user)

* specific Rust toolchain

* some project specific setup

Here it is:

<iframe src="https://medium.com/media/40806efadb1f5b95d21f4d13c934ed99" frameborder=0></iframe>

Remember, this is done once per project. Most projects already have those setup descriptions, they are just buried inside their README.

Now whenever anyone accesses the repository through Gitpod, be it a branch, a particular commit, an issue or a[ PR,](https://medium.com/gitpod/when-code-reviews-lgtm-2fd4ffd66f87) they will get a custom workspace with all the tools set up and running, out of the box. [Give it a spin](http://gitpod.io/#https://github.com/lankydan/rust-web-with-rocket)!

Once the service has build and is running, we just follow the tutorial:

* Open /people: Click Open on the appearing messagebox² and change the path in the integrated browser to http://8000-<your-workspace-url>/people , click Reload : The query results in an empty []

* Hit F1 -> "Open new Terminal" and paste:

    curl -XPOST [http://localhost:8000/people](http://localhost:8000/people) -H "Content-Type: application/json" --data '{"id": 123, "first_name": "Jon", "last_name": "Doe", "age": 64, "profession": "Engineer", "salary": 1024}'

* Hit Reload again to see Jon Doe’s people entry

## Try it yourself

You can either create a PR on[ gitpod-io/definitely-gp](https://github.com/gitpod-io/definitely-gp) — or dive right in and create the [.gitpod.yml in your repositories](http://docs.gitpod.io/40_Configuration.html#checked-in-gitpod-file)! For details on how this works and what is possible please head over to[ the docs](http://docs.gitpod.io/40_Configuration.html#gitpod-file).

¹ It is not required to inherit from that image at all. You can even start with a plain alpine or debian based image. I used it here for convenience.

² Alternatively, go to View -> Ports and click Open
