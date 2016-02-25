---
layout: post
title: include() vs require() & require_once() vs include_once()
date: 2014-11-11 21:38:39.000000000 -08:00
category: programming
tags: [ php,ru]
---
В php ф-ии include, require отвечают за вставку кода из одних файлов в другие. Ф-ии имеют одинаковый синтаксис:
{% highlight php startinline=true %}
include('file');
require('file');
include 'file';
require 'file';
{% endhighlight %}

![](../../../../assets/img/posts/2014/11/include.png)

Данные ф-ии производят вставку и выполнение кода из указанного файла, но имеют следующие различия в случаи ошибки(файл не найден):

{% highlight php startinline=true %}
require - Fatal error(E_COMPILE_ERROR), т.е останока скрипта
include - Warning error(E_WARNING) и продолжение выполнение сценария.
{% endhighlight %}
Если в настройках PHP указано отображение ошибок пользователь увидит данный ошибку и что хуже вашу структуру файлов.

Использование require более рационально в целях безопастности.

{% highlight php startinline=true %}
require_once и include_once отличаются:
{% endhighlight %}

Если код из файла уже один раз был включен, он не будет включен и выполнен повторно.

Например:

{% highlight php startinline=true %}
var_dump(include_once 'file.php'); // exec script
var_dump(include_once 'file.php'); // bool(true)

var_dump(require_once 'file.php'); // bool(true)
var_dump(require_once 'file.php'); // bool(true)
{% endhighlight %}

Выполнение файла кода в файле file.php произойдет только при первом запуске include_once. В остальных случаях ф-ия вернет true - файл уже подключен.

Что бы избежать ошибок используются относительные пути:

{% highlight php startinline=true %}
require(dirname(__FILE__).'/params.php');

//__FILE__ - абсолютный путь с разрешенными символическими ссылками
include_once(dirname(__FILE__) . '/database.class.php');
{% endhighlight %}
Так же можно проверить подключение файлов, например с определением константы:

{% highlight php startinline=true %}
define('__ROOT__', dirname(dirname(__FILE__))); 
require_once(__ROOT__.'/config.php'); 
{% endhighlight %}
Для автоматической загрузки классов используются функция

{% highlight php startinline=true %}
spl_autoload_register().
{% endhighlight %}
Пример загруки с использованием ф-ии

{% highlight php startinline=true %}
function myAutoloader($className) {
    $path = '/path/to/class/';

    include $path.$className.'.php';
}

spl_autoload_register('myAutoloader');
$myClass = new MyClass();
{% endhighlight %}
Пример использования автозагрузки с использованием классов
{% highlight php startinline=true %}
spl_autoload_register('MyAutoloader::ClassLoader');
spl_autoload_register('MyAutoloader::HelperLoader');
spl_autoload_register('MyAutoloader::DatabaseLoader');
	
	class MyAutoloader {
		public $path = '/path/to/class/';

	    public static function ClassLoader($className){
	         require $this->path . 'className.php';
	    }
	
	
	    public static function LibraryLoader($className) {
	         require $this->path . 'className.php';
	    }
{% endhighlight %}