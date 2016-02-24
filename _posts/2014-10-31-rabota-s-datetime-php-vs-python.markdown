---
layout: post
title: Datetime PHP like Python
date: 2014-10-31 21:41:54.000000000 -07:00
category: programming
tags: [ python,ru]
---
Разработка данных datetime удобнее с использованием Unix формата(числа).

Datetime in PHP:

{% highlight php startinline=true %}
$today = date("Y-m-d H:i:s");  //MYSQL
$date = date();
echo $date->format("Y-m-d H:i:s"); //echo Date in format

$today = date('h-i-s, j-m-y, it is w Day'); // 05-16-18, 10-03-01, 1631 1618 6 Satpm01
{% endhighlight %}

Datetime in Python:

{% highlight python %}
from datetime import datetime
date_object = datetime.strptime('Jun 1 2005  1:33PM', '%b %d %Y %I:%M%p')
{% endhighlight %}

Datetime from MSSQL in Mysql in Python:

{% highlight python %}
date_object = datetime.strptime(date, '%b %d %Y %I:%M%p')
date_object.strftime('%Y-%m-%d %H:%M:%S') #MySQL format
{% endhighlight %}

Так что ф-ии datetime в Python похожи на PHP. И не только datetime.
