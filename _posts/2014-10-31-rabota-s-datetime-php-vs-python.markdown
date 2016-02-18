---
layout: post
title: Datetime PHP like Python
date: 2014-10-31 21:41:54.000000000 -07:00
---
Разработка данных datetime удобнее с использованием Unix формата(числа).

Datetime in PHP:

	$today = date("Y-m-d H:i:s");  //MYSQL
    $date = date();
    echo $date->format("Y-m-d H:i:s"); //echo Date in format
    
    $today = date('h-i-s, j-m-y, it is w Day'); // 05-16-18, 10-03-01, 1631 1618 6 Satpm01
    
Datetime in Python:

    from datetime import datetime
	date_object = datetime.strptime('Jun 1 2005  1:33PM', '%b %d %Y %I:%M%p')

Datetime from MSSQL in Mysql in Python:

	date_object = datetime.strptime(date, '%b %d %Y %I:%M%p')
    date_object.strftime('%Y-%m-%d %H:%M:%S') #MySQL format

Так что ф-ии datetime в Python похожи на PHP. И не только datetime.
