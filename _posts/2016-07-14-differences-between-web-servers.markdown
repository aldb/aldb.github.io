---
layout: post
title: 'Apache vs IIS vs Nginx vs Node.js'
date: 2016-07-13 21:38:39.000000000 -08:00
category: programming
tags: [nodejs, apache, nginx, iis,en]
tldr: 'Difference between web servers: **Apache, IIS, Nginx, Node.js**. Process schema illustrations.'
permalink: /:year/:month/:day/:title/
---
Today, the most popular web servers are: **Apache, IIS, Nginx, Node.js**. Every web server has its own history, focus on technology, the preferred operating system, and etc.

But there is a fundamental difference in processing requests.

#### What are Web servers?

<img src="../../../../assets/img/Client-server-model.svg.png" class="img-fluid" alt="Responsive image">

Web servers need to work with web applications on the [Client–server model]. Their task processing request from the user (customer, client) and the query result returned from the server (backend, serverside).

#### Web servers limits

A web server has defined <b>load limits</b>, because it can handle only a limited number of concurrent client connections per IP address (and TCP port) and it can serve only a certain maximum number of requests per second (RPS, also known as queries per second or QPS) depending on HTTP request type, settings, cached and <b>hardware</b>.

Each server has a dedicated "resources(hardware)" (RAM, CPU, etc.) to handle requests. These resources are used in flows and processes:

-   [Thread\_(computing)]
-   [Process\_(computing)]

The difference in the distribution of resources in the processing of requests is a key differentiator for are risen web servers.

  [Client–server model]: http://en.wikipedia.org/wiki/Client%E2%80%93server_model
  [Thread\_(computing)]: http://en.wikipedia.org/wiki/Thread_(computing)
  [Process\_(computing)]: http://en.wikipedia.org/wiki/Process_(computing)

#### Process-based web serves: Apache, IIS.

<b>Apache, IIS</b> are used each request is processed in a separate thread / process - <b>"process-based"</b>.

<img src="../../../../assets/img/process-based-server-2.png" class="img-fluid" alt="Responsive image">
<center>
“Process-based” web servers.
</center>

<br>
<br>
For every client request uses a separate <b>process / thread</b>. Each thread / process requires a certain number of server <b>resources(hardware)</b>. Server resources "idle/ not used" until the pending request and send the client a reply. What a <b>negative</b> impact on performance at high loads when the selected process flow is not enough to handle all requests.

#### Event-based web serves: Nginx, Node.js.

<img src="../../../../assets/img/event-based-server-3.png" class="img-fluid" alt="Responsive image">
<center>
Event-based web servers.
</center>

**Event-based** web servers are used all resources of server hardware.
**Loop-event** - endless request processing cycle. This cycle tracks the status of the request (the request from the customer reception, processing and sending the response).

In **Singe process/thread** is used all the resources the web server, allowing you to process requests as quickly as possible, and in cases of delays (obtaining data from the client to send data to the client) to work with other requests from the queue (<b>Event Queue</b>) ie asynchronously.

#### Total

**Event-based(Node.js, Nginx)** shows better performance under high loads, because that the server does not need to share resources among other threads / processes. Also, the server resources are always used without the "downtime".

#### Links

-   [Concurrent Programming for Scalable Web Architectures]
-   [Apache vs nginx]

  [Concurrent Programming for Scalable Web Architectures]: http://berb.github.io/diploma-thesis/original/042_serverarch.html#42
  [Apache vs nginx]: http://www.wikivs.com/wiki/apache_vs_nginx