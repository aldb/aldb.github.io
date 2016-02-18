---
layout: post
title: Разница datetime и timestamp
date: 2014-10-20 21:03:44.000000000 -07:00
---
Datetime и timestamp типы данных в MySQL для хранения информации по дате. Их основные отличия:

#####Datetime 

- 8 байт без часового пояса
- DEFAULT CURRENT_TIMESTAMP / ON UPDATE CURRENT_TIMESTAMP устанавливает время по умолчанию (**MySQL 5.6.5**)
- Запросы не кешируются по умолчанию

#####Timestamp

- 4 байта с часовым поясом
- хранит время **UTC**(Гринвич)
- в версии до **MySQL 5.6.1** не более 2 TIMESTAMP колонок в одной таблице, в версии **MySQL 5.6.5**+ без ограничений
- Запросы кешируются по умолчанию
- Свойство DEFAULT CURRENTTIMESTAMP / ON UPDATE CURRENTTIMESTAMP  может быть примененно только для одной колонке:

		CREATE TABLE `test` (
		  `id` INT(10) UNSIGNED NOT NULL,
		  `AddedDate` TIMESTAMP NOT NULL DEFAULT 				CURRENT_TIMESTAMP,
		  `UpdatedDate` TIMESTAMP NOT NULL DEFAULT 		CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
		  ) ENGINE=INNODB;
          
Ошибка:

		Error Code : 1293
		Incorrect table definition; there can be only one TIMESTAMP column with CURRENT_TIMESTAMP in DEFAULT or ON UPDATE clause


####Когда использовать:

#####datetime:
- Колонки с фиксированными данными(логирование, день рождения, данные о покупке и т.п)
- Хорошая ассоциация datetime это часы и календарь на стене, при этом не важно в какой часовой зоне находиться дом в котором они висят.

#####timestamp:
- Колонки с часто обновляемыеми данными(последняя авторизация пользователя, дата и время обновления рейтинга/очков/счета и т.п.)
- Ассоциация: момент времени, т.е. как давно событие. Точный расчет момент времени напрямую зависит от того в каком часовом поясе вы находитесь.

Ссылки:

 - [Mysql manual](http://dev.mysql.com/doc/refman/5.1/en/datetime.html)
 - [Подробнее про ошибку 1293](http://stackoverflow.com/questions/4489548/why-there-can-be-only-one-timestamp-column-with-current-timestamp-in-default-cla)
 - [datetime vs timestamp?](http://stackoverflow.com/questions/409286/datetime-vs-timestamp)
