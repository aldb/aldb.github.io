---
layout: post
title: Как создать блог на github.io используя CMS Ghost
date: 2014-10-14 18:28:58.000000000 -07:00
category: programming
tags: [github, pages, jekyll,ru]
permalink: /:year/:month/:day/:title:output_ext
---
Github предоставляет всем своим пользователям создать статический блог в домене github.io. При это предлагает использовать Jekyll. Но сегодня мы поговорим как сделать блог на гитхабе с cms **ghost**.

Я не хочу создавать, я хочу [demo](http://alexsdbk.github.io/)!

На создание блога нам потребуется **3 Этапа**:

### I этап

Необходимо создать открытый репозиторий на Git, который создаст поддомен с вашим именем пользователя(http://username.github.io).

Следуем [инструкции](https://pages.github.com/) создадим [репозиторий](https://github.com/new) c именем нашего пользователя на github.

### II Этап


Настройка локального окружения и создание блога.

Нам потребуется Node.js 0.10.x (latest stable). Для работы с Ghost рекомендуют Node.js 0.10.30 и пакетный менеджер npm 1.4.21. Ниже будут примеры кода под Linux Ссылки для других платформ:[Mac](http://support.ghost.org/installing-ghost-mac/) [Windows](http://support.ghost.org/installing-ghost-windows/)

Установим ghost

	mkdir ghost
	wget "http://ghost.org/zip/ghost-latest.zip"
	unzip ghost-latest.zip -d ghost
	cd ghost
	cp config.example.js config.js
    
Установим nodejs & npm

	sudo apt-get update
	sudo apt-get install nodejs
	sudo apt-get install npm

Изменим **URL** адрес в config.js раздел Development с http://localhost:2368 на http://username.github.io

	// ### Development **(default)**	development: {
    // The url to use when providing links to the site, E.g. in RSS and email.
    // Change this to your Ghost blogs published URL.
    url: 'http://username.github.io',

    // Example mail config
    // Visit http://support.ghost.org/mail for instructions
    // ```
    //  mail: {
    //      transport: 'SMTP',
    //      options: {
    //          service: 'Mailgun',
    //          auth: {
    //              user: '', // mailgun username
    //              pass: ''  // mailgun password
    //          }
    //      }
    //  },
    // ``
    
Зайдем в папку ghost, установим и запустим npm

	npm install
	npm start
    
![npm-start](../../../../assets/img/posts/2014/10/npminstall.png)

Зайдем http://127.0.0.1:2368/ghost/

![ghost](../../../../assets/img/posts/2014/10/ghost-wellcome.png)

Создание и настройка блока а также редактирования постов(по примеру шаблона) интуитивно понятны. Так же всегда можно найти информацию на https://ghost.org/.

### III Этап

Создание статичного блога и 'commit' на github

Что бы сделать ghost статичным Нам потребуется **Buster**

![buster](../../../../assets/img/posts/2014/10/buster.png)

Установка

	sudo apt-get update
	sudo apt-get install wget
	sudo apt-get install python
	sudo apt-get install python-pip
	pip install buster

Проверяем запущен наш блог http://127.0.0.1:2368 или запускаем:

	cd ghost
	npm start

Создадим новую папку для статичной версии блога.

	cd ghost
	cd buster setup
    
Запускаем бустер

	buster setup

Указываем ссылку на github репозиториий:

	https://github.com/username/username.github.io 

Бустер сгенерировал папку static. Теперь захватим бустером приведение, т.е. наш локальный ghost.

	buster generate --domain=http://127.0.0.1:2368
    
Для предпросмотра запустим:

	buster preview 

Теперь наш статичный блог можно посмотреть http://127.0.0.1:9000

Останавливаем отображение превью **Control + C**. Загружаем блог на Git:

	buster deploy
    
Теперь или спустя пару минут он будет доступен http://username.github.io

###### Ложка дёгтя

У меня не получился deploy в Git через buster. Но я сделал 'commit' через терминал.
Так же buster не хочет ловить статичные страницы ghost'a. Решил их просто оформлять постами.

### Повседневное использование

Запускаем ghost и редактируем посты http://127.0.0.1:2368/ghost

	npm start

**Buster** генерирует статичную версию и делает 'commit'.

	buster generate --domain=http://127.0.0.1:2368    
	buster deploy
    
### Заключение

Плюсы использование статичного блога на Github

* Бесплатно
* Не нужна БД
* Высокая производительность
* Возможность легкого бэкап
* Возможность создать посты оффлайн

###### Cсылки:

* Оригинальная статья: [How to: Host a Ghost Blog for Free](http://talalanwar.com/host-a-ghost-blog-for-free/)
* Набор ссылок по установке cms ghost: [Ghost How to install Ghost blogging platform](http://ghost.centminmod.com/how-to-install-ghost-blogging-platform/)
* Git репозиторий [buster](https://github.com/axitkhurana/buster)
