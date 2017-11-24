---
layout: post
title: Install Nodejs & NPM by Brew
date: 2016-06-1 07:38:39.000000000 -08:00
category: programming
tags: [en,mac,nodejs,npm,brew]
img: /assets/img/posts/2016/nodejs.png

---

## Problem

Need quick script for install NPM & Node by terminal.

## Solution

Homebrew - the missing package manager for OS X, really easy way to setup environment.

Open terminal and check Brew version:


{% highlight bash%}
$ brew -v
{% endhighlight %}


If you get "brew: command not found" got to official web [page](http://brew.sh/) and copy/paster url link for install, for example:

{% highlight bash %}
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
{% endhighlight %}

If on Mac don't install Xcode you see alert message with option for install. Node.js & NPM don't need Xcode, so cancel Xcode installation alert message.


Then installing the NPM & Node by command:

{% highlight bash %}
$ brew node
{% endhighlight %}

Done! 

![Screenshot](/assets/img/posts/2016/npm_nodejs_by_brew.png)

## Check installed versions

For check nodejs/NPM version/location use:

{% highlight bash%}
$ node -v
$ which node
$ npm -v
$ which npm
{% endhighlight %}

Have fun with Nodejs!