---
layout: post
title: Nightwatchjs build
date: 2016-06-1 07:38:39.000000000 -08:00
category: programming
tags: [en,mac,nightwatchjs]
img: /assets/img/posts/2016/def4.png

---

## What|Why is Nightwatch.js?

<b>Nightwatch.js</b> is an easy to use Node.js based End-to-End (E2E) testing solution for browser based apps and websites. It uses the powerful Selenium WebDriver API to perform commands and assertions on DOM elements. (c) [nightwatchjs.org](nightwatchjs.org)

I used Nightwatch.js for E2E testing script modules. I really liked option quick setup environment based on Node.js + write javascript test cases + use bash scripts(Node.js/javascript) for automatization run process. In this post I make detail description how setup Nightwatch.js on OS X platform.

## Overview

<b>Nightwatch.js Goals:</b> 

* Crossbrowsers
* Easy setup writing test process(Javascript, CSS, XPath) 
* Good documentation

Let's overview logic shceme how Nightwatch works with Selenium server and Browsers:

![](../../../../assets/img/posts/2016/06/nw_overview.png)

<center><em>Nightwatch.js logic scheme with example files paths.</em></center>

*Tests and bin directories in example build setup.


## Setup

Here details setup description step by step for Mac OS X. TODO work build:

#### Install/Download

1.Install/update for latest version [Java](http://java.com/en/download/mac_download.jsp)
<br><br> 
![](../../../../assets/img/posts/2016/06/screenshot1.png)
<br>
<br>
After successful installed you can verify [Java version](https://java.com/en/download/installed.jsp) online by java applet. Also check [Java SDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).
<br>
<br>
2. Install/update for latest version [Node.js](https://nodejs.org). Check my previos post for [Node.js setup](http://aldb.github.io/2016/06/01/install-nodejs-npm-by-brew/).
<br>
3. Download latest [Selenium Standalone Server](http://www.seleniumhq.org/download/)
<br>
<br>
![](../../../../assets/img/posts/2016/06/screenshot2.png)
<br>
<br>
<br>
3.Download [chromedriver](http://chromedriver.storage.googleapis.com/index.html?path=2.9/) for your OS. 
<br>
<br>
![](../../../../assets/img/posts/2016/06/screenshot3.png)
<br>
4.Download [Nightwatch.js](http://nightwatchjs.org/) from oficial website.
<br>

#### Build Files structure

5.Make new project folder, for example <b>“nightwathjs_screenshot”.</b> Create new folders:<b> bin, tests.</b> Copy/paste files: Selenium standalone Server, chrome driver, nightwatch-xxx.zip in bin directory. Extract(unzip) nightwatch-xxx.zip(on example:nightwatch-0.9.0.zip)
<br>
<br>
![](../../../../assets/img/posts/2016/06/screenshot4.png)
<br>
<br>
In <b>bin</b> directory keep all "run" files: drivers, original nightwatch.js arhive, selenium server and etc.
<b>Screenshots</b> directory for screenshots images.
In <b>tests</b> - tests cases files.
<br><br>

#### Npm install
6.Open in terminal folder "/nightwathjs_screenshot/bin/nightwatch-0.9.0" and run command:

{% highlight bash %}
$ npm install
{% endhighlight %}
![](../../../../assets/img/posts/2016/06/screenshot5.png)

#### Selenium server

7.For start test cases need run Selenium server with chrome webdriver. Open "/nightwathjs_screenshot/bin/" folder in terminal and run command:

{% highlight bash %}
$ java -jar selenium-server-standalone-2.53.0.jar -Dwebdriver.chrome.driver='chromedriver'
{% endhighlight %}

<blockquote class="twitter-video" data-lang="en"><p lang="en" dir="ltr">@selenium server run example <a href="https://t.co/kT5aKXs6Yi">pic.twitter.com/kT5aKXs6Yi</a></p>&mdash; Alex (@aldbpr) <a href="https://twitter.com/aldbpr/status/741462605965840388">June 11, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

In terminal windows start seleneium server("Selenium Server is up and running"), for stop this process can use <b>"control + c"</b>. For next steps you need open new <b>"tab"</b> in terminal - <b>"control + r"</b>.

![](../../../../assets/img/posts/2016/06/screenshot6.png)

<br>
For check Selenium server status use <b>API url</b> - [http://localhost:4444/selenium-server/driver/?cmd=getLogMessages](http://localhost:4444/selenium-server/driver/?cmd=getLogMessages)
<br>
Also can stop Selenium server - [http://localhost:4444/selenium-server/driver/?cmd=shutDownSeleniumServer](http://localhost:4444/selenium-server/driver/?cmd=shutDownSeleniumServer) 


#### Configuration

8.Depending upon startup point Nightwatch.js used configuration file. By default used configuration from Nightwatch.js - <b>"nightwathjs_screenshot/bin/nightwatch-0.9.0/bin/nightwatch.json"</b>. Let's make new file <b>nightwatch.json</b> in main folder "nightwathjs_screenshot":

{% highlight json %}
{
  "src_folders" : ["tests"],
  "output_folder" : "reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : "",
  "globals_path" : "",
  "selenium" : {
    "start_process" : false,
    "server_path" : "",
    "log_path" : "",
    "host" : "127.0.0.1",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "./bin/chromedriver"
    }
  },

  "test_settings" : {
    "default" : {
      "launch_url" : "http://localhost",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },
    "firefox" : {
      "desiredCapabilities": {
        "browserName": "firefox",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },
    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },
    "safari" : {
      "desiredCapabilities": {
        "browserName": "safari",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    }
  }
}
{% endhighlight %}

Detail [configuration documentation](http://nightwatchjs.org/guide#settings-file).

#### Write and run tests

9.Let's write first test file for Nightwatch.js. It navigates to google.com and searches for nightwatch, * verifying if the term 'The Night Watch' exists in the search results. In <b> "nightwathjs_screenshot/tests"</b> folder make new file google.js:

{% highlight javascript %}
/**
 * Sample automated test scenario for Nightwatch.js
 *
 * > it navigates to google.com and searches for nightwatch,
 *   verifying if the term 'The Night Watch' exists in the search results
 */

module.exports = {
  'demo test google' : function (client) {
    client
      .url('http://google.com')
      .waitForElementPresent('body', 1000);
  },

  'part two' : function(client) {
    client
      .setValue('input[type=text]', ['nightwatch', client.Keys.ENTER])
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};
{% endhighlight %}

For run this test file open terminal in <b>“nightwatchjs_screenshot”</b> folder and use command:

{% highlight bash %}
$ ./bin/nightwatch-0.9.0/bin/nightwatch --test tests/google.js
{% endhighlight %}

Where:

* ./bin/nightwatch-0.8.18/bin/nightwatch  - path for nightwatch executable file
--test - additional params, run [specific test file]( http://nightwatchjs.org/guide#command-line-options). If in project used another version of nightwatch need update this command from "nightwatch-0.9.0" for "nightwatch-x.x.x" or folder name what used in project.
* tests/google.js - path for file
<blockquote class="twitter-video" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/nightwatchjs">@nightwatchjs</a> test run example <a href="https://t.co/EZBGLtb3xM">pic.twitter.com/EZBGLtb3xM</a></p>&mdash; Alex (@aldbpr) <a href="https://twitter.com/aldbpr/status/741462043706818560">June 11, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
#### Done!

Now you can write and run your test. On the end of the post can find Links for most helpfull nightwatchs resources.
Final file's structures:
<br><br>
![](../../../../assets/img/posts/2016/06/screenshot7.png)

In additional you can check two my two favorite test examples:

{% highlight javascript %}
/**
 * Sample automated test scenario for Nightwatch.js
 *
 * > it navigates to nightwatchjs.org/api and click on API list.
 * > verify Text h2 header equal clicked li element Text
 */
module.exports = {
  'Test NightwatchJS.org' : function (client) {
    client
      .url('http://nightwatchjs.org/api')
      .waitForElementVisible('body', 1000)
      .elements('css selector', '#api-container ul.nav.bs-sidenav>li', function (result) {
        for (var i = 0; i < result.value.length; i++) {
          var id = '';
          client
            .elementIdClick(result.value[i].ELEMENT)
            .pause(500)
            .url(function(r){
              id = '#' + r.value.split('#')[1]
            })
            .elementIdText(result.value[i].ELEMENT, function (res) {
                client.expect.element(id).text.to.equal(res.value.split('\n')[0]);
            });
        }
      })
      .end();
  }
};
{% endhighlight %}

For this test case need folder "nightwathjs_screenshot/screenshots", for save screenshot images.

{% highlight javascript %}
/**
 * Sample automated test scenario for Nightwatch.js
 *
 * > it navigates to google.com and make screenshot
 */
module.exports = {
    'Make screenshot': function (client) {
        var file = './imgs/' + Date.now() + '.png';
        client
          .resizeWindow(1300, 1300)
          .url('http://google.com')
          .waitForElementPresent('body', 1000)
          .pause(1000)
          .saveScreenshot(file)
          .perform(function(client, done) {
              console.log('Screenshot save:' + file);
              // potentially other async stuff going on
              // on finished, call the done callback
              done();
          })
          .end();
    }
};
{% endhighlight %}


## Links:

* Nightwatch.js - [http://nightwatchjs.org](http://nightwatchjs.org)
* Gitub wiki nightwatch.js - [https://github.com/nightwatchjs/nightwatch/wiki](https://github.com/nightwatchjs/nightwatch/wiki)
* Google group - [https://groups.google.com/forum/#!forum/nightwatchjs](https://groups.google.com/forum/#!forum/nightwatchjs)
* Drivers for Selenium - [https://selenium-release.storage.googleapis.com/index.html](https://selenium-release.storage.googleapis.com/index.html)
* Selenium server - [http://www.seleniumhq.org](http://www.seleniumhq.org)
