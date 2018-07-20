---
layout: post
title: bash command not found 
date: 2016-03-21 07:38:39.000000000 -08:00
category: programming
tags: [en,mac,error,nodejs]
img: /assets/img/posts/2016/def2.png
permalink: /:year/:month/:day/:title:output_ext
---

## Error

I get error on process npm install on mac. After successfully installed npm package tsd, tsd command get back error message:

{% highlight bash %}
$ -bash: tsd: command not found 
{% endhighlight %}

All others npm packages not running.
It's look like bash don't know path for node modules.

Command:
{% highlight bash %}
$ npm bin
{% endhighlight %}

Get back:
{% highlight bash %}
$ IF (not in PATH env variable)
{% endhighlight %}

## Fix

For fix this issue add path for node modules in PATH
{% highlight bash %}
$ export PATH="/Users/<username>/.node/bin:$PATH"
{% endhighlight %}

For get bash username use command: whoami
