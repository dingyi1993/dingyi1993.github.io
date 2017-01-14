---
layout: post
title: browser-sync中的一些不为人之的秘密
image: 6.jpg
excerpt: web前端开发中的脚手架，大家基本都会用到browser-sync，但是我发现周围好多人仅仅只知道它能实现自动刷新的功能，然而它还有很多更加强大的功能。
category: 开发
tags: 前端 工具
date: 2017-01-14 18:25:34 +0800
---

## 前言

最开始用browser-sync时，每次启动后都会有如下输出：

![console]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/1.png"}

身为强迫症的我，自然对红框中的链接感到好奇，直到我打开了这个链接，感觉打开了新世界的大门。

## 正文

下面是打开后的样子：

![welcome]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/2.png"}

左边是功能的分类，默认展示browser-sync的概览。

可以点进去 **Sync Options** ，这里面显示了一些同步事件的开关，默认是所有事件开启，如下图：

![sync options]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/3.png"}

比如在手机上滑动页面，pc上的同一个页面也会跟着滑动，如下图，如果你关闭了 **Scroll** 选项，则滑动就不会同步到所有页面。

![scroll]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/4.gif"}

**Remote Debug** ，这里面有一些远程调试的相关工具，比如 [weinre](http://people.apache.org/~pmuellr/weinre/docs/latest/Home.html){:target="_blank"}，还有 **CSS Outlining** ，可以显示每个元素所占的空间，最好自己亲自去试一下。

![css outlining]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/5.png"}

## 最后

bowser-sync还可以安装插件，你可以在npmjs中搜索关键字 `browser sync plugin` ，可以安装你想要的插件。
