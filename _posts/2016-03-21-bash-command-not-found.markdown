---
layout: post
title: bash command not found 
date: 2016-03-21 07:38:39.000000000 -08:00
category: programming
tags: [mac,error,nodejs]
img: /assets/img/posts/2016/jekyll-small.png
---

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

For fix this issue add path for node modules in PATH
{% highlight bash %}
$ export PATH="/Users/<username>/.node/bin:$PATH"
{% endhighlight %}