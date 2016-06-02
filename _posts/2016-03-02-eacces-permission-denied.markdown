---
layout: post
title: Eacces permission denied
date: 2016-03-01 07:38:39.000000000 -08:00
category: programming
tags: [js,ionic,en]
img: /assets/img/posts/2016/jekyll-small.png
---

## Error

Get error message in Ionic2 process setup:
{% highlight bash %}
$ Ionic 2 Unhandled rejection Error: EACCES: permission denied
{% endhighlight %}

## Debug
Run code on developer machine and get error: permission denied.
Get the classic solution:

{% highlight bash %}
$ sudo chown -R whoami ~/.npm
$ sudo chown -R whoami /usr/local/lib/node_modules
{% endhighlight %}

whoami - terminal command get current user.

Another good practice:

{% highlight bash %}
$ sudo chown -R $USER ~/.npm
$ sudo chown -R $USER /usr/local/lib/node_modules
{% endhighlight %}

If used mac also use:

{% highlight bash %}
$ sudo chown -R $USER /usr/local
{% endhighlight %}