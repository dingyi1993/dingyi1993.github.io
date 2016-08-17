---
layout: post
title: 将以jekyll为框架的blog同时部署在github和coding
excerpt: 简单介绍一下我的博客
category: 开发
tags: jekyll github coding seo
date: 2016-08-17 17:23:00 +0800
---

## 前言

我的博客搭建好以后，有在我的第一篇博客中有简单介绍如何搭建此博客，但是仍有不少不懂的童鞋来问我，我就在此详细的讲一下。

## 正文

初衷：

正如我第一篇博客所说，因为github直接将百度蜘蛛踩死在脚下，所以同时部署在coding上是为了能添加到百度索引，虽然某度之前各种XX门，但国内用户使用百度的还是占了大部分，好东西要让大家看到才行嘛。

令我震惊的是，百度竟然很良心的把我的搜索位置放在了第一位，表扬一下（手动斜眼笑）。

PS: 部署时需要一定的git基础，在此不赘述。

话不多说，开始正文。

***

总共分四步：

1. 将代码上传到github

2. 将代码上传到coding

3. 配置dns

4. 添加至搜索引擎的索引

***

### 将代码上传到github

1、 在你的github上新建一个仓库，仓库名为 **{username}.github.io**，**{username}**为你的github用户名；

2、 在你的jekyll根目录新建**CNAME**文件，在里面添加你想绑定的域名，如下图，然后将整个目录上传至刚刚新建的仓库中。

![cname]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/1.png"}

***

### 将代码上传到coding

1、 在你的coding上创建一个与你用户名相同的项目；

2、 将你的jekyll目录上传至刚才新建的项目（目前Coding Pages支持**jekyll 3.0**）；

3、 进入刚才上传的项目，点击Pages服务，如下图；

![pages]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/2.png"}

4、 输入分支名称，点击立即开启，如下图，这里的分支名称一定要和你刚才**上传的jekyll目录所在的分支相同**，默认是coding-pages，所以一定要注意；

![branch]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/3.png"}

5、 绑定你的自定义域名，和刚才**github**上**CNAME**的值一致，当然你也可以绑定多个。

![domain]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/4.png"}

***

### 配置dns

- [lazyload](http://www.appelsiini.net/projects/lazyload){:target="_blank"} 延迟加载图片

- [normalize](https://necolas.github.io/normalize.css/){:target="_blank"} 初始化标签的样式，但不会像reset那样太暴力

- [font-awesome](http://fontawesome.io/){:target="_blank"} 图标库

- [pagepiling](http://www.alvarotrigo.com/pagePiling/){:target="_blank"} 单页面滚动插件，see [about me]({{ site.baseurl }}/about/){:target="_blank"}

***

博客的部署：

为了让百度爬虫能爬到，最后折中的方案是国内线路采用coding pages来呈现，国外则解析到github pages，所以代码同时部署在[coding](https://coding.net/){:target="_blank"}和[github](https://github.com){:target="_blank"}上。

***

关于博客技术和部署上的任何问题，欢迎留言或联系我（左下角），能看到基本都能回复。

如果发现了任何bug，及时告诉我也是极好的。

## 最后

老司机要开车了，还不快上车

