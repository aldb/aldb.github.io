---
layout: post
title: Установка phpunit
date: 2014-10-19 23:54:24.000000000 -07:00
category: programming
tags: [ php,ru]
---
Все знаем что phpunit модно, стильно, молодежно.
И вот как ее быстро установить:

	pear channel-discover pear.phpunit.de
	pear channel-discover pear.symfony-project.com
    
В случаи проблемы с правами добавляем волшебное "sudo"
Таким образом мы добавили  **PEAR Installer**

	pear install phpunit/PHPUnit
    
Который в свою очередь установит PHPUnit. Но PHPUnit любит поругаться на недостающие модули:
	
    apt-get install php5-dev
    pecl install xdebug

После этого все должно заработать, проверить версию PHPUnit можно командой 

	phpunit

В дополнения простенький пример теста:

	<?php
	class StackTest extends PHPUnit_Framework_TestCase
	{
    	public function testPushAndPop()
	    {
	        $stack = array();
	        $this->assertEquals(0, count($stack));

	        array_push($stack, 'foo');
	        $this->assertEquals('foo',$stack[count($stack)-1]);
	        $this->assertEquals(1, count($stack));

	        $this->assertEquals('foo',array_pop($stack));
	        $this->assertEquals(0, count($stack));
    	}
	}

Подробнее можно посмотреть в [документации](https://phpunit.de/manual/current/en/writing-tests-for-phpunit.html), где все примеры с закрывающим тегом< ?  <i class="fa fa-wheelchair"></i>facepalm
