---
layout: post
title: Как сделать слияние masters с github pages
date: 2014-10-26 20:19:35.000000000 -07:00
---
Сабж, создаем бранч, мержим с продактишном и коммитим:

	git checkout --orphan gh-pages
	git merge master
	git push origin gh-pages

Если есть желание всегда обновлять gh-pages при коммите можно добавить в файл .git/config, секцию [remote "origin"]

	push = +refs/heads/master:refs/heads/gh-pages
	push = +refs/heads/master:refs/heads/master


Ссылки:

- [Creating Project Pages manually](https://help.github.com/articles/creating-project-pages-manually/)
