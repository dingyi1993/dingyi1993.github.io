---
layout: post
title: 将以jekyll为框架的blog同时部署在github和coding
excerpt: 详细讲一下将本博客（采用jekyll转化为静态博客）部署在github和coding并配置dns的过程 ，同时支持百度和google索引。
category: 开发
tags: jekyll blog github coding seo
date: 2016-08-17 21:20:45 +0800
---

## 前言

我的博客搭建好以后，有在我的第一篇博客中有简单介绍如何搭建此博客，但是仍有不少不懂的童鞋来问我，我就在此详细的讲一下。

## 正文

初衷：

正如我第一篇博客所说，因为github直接将百度蜘蛛踩死在脚下，所以同时部署在coding上是为了能添加到百度索引，虽然某度之前各种XX门，但国内用户使用百度的还是占了大部分，好东西要让大家看到才行嘛。

令我震惊的是，百度竟然很良心的把我的搜索位置放在了第一位，表扬一下。

![guzhang]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/guzhang.jpg"}

PS: 部署时需要一定的git基础，在此不赘述。

话不多说，开始正文。

***

总共分四步：

1. [将代码上传到github](#github)

2. [将代码上传到coding](#coding)

3. [配置dns](#dns)

4. [添加至搜索引擎的索引](#section-2)

***

### 将代码上传到github

**1、** 在你的github上新建一个仓库，仓库名为 `{username}.github.io`，**{username}**为你的github用户名；

**2、** 在你的jekyll根目录新建**CNAME**文件，在里面添加你想绑定的域名，如下图，然后将整个目录上传至刚刚新建的仓库中。

![cname]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/1.png"}

***

### 将代码上传到coding

**1、** 在你的coding上创建一个与你**用户名相同**的项目；

**2、** 将你的jekyll目录上传至刚才新建的项目（目前Coding Pages支持**jekyll 3.0**）；

**3、** 进入刚才上传的项目，点击Pages服务，如下图；

![pages]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/2.png"}

**4、** 输入分支名称，点击立即开启，如下图，这里的分支名称一定要和你刚才**上传的jekyll目录所在的分支相同**，默认是coding-pages，所以一定要注意；

![branch]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/3.png"}

**5、** 绑定你的自定义域名，和刚才**github**上**CNAME**的值一致，当然你也可以绑定多个。

![domain]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/4.png"}

***

### 配置dns

我的域名是在[dnspod](https://www.dnspod.cn/){:target="_blank"}买的，所以以[dnspod](https://www.dnspod.cn/){:target="_blank"}的dns解析为例。

**1、** 登陆[dnspod](https://www.dnspod.cn/){:target="_blank"}，点击域名解析，添加域名后，点击域名进入dns配置，如下图；

![dns]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/5.png"}

**2、** 第一次进入dns配置，会初始化2个NS记录，如下图；

![dns]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/6.png"}

**3、** 添加如下几个记录：

一个**www**的**CNAME**的记录，线路默认，记录值为`pages.coding.me`

一个**@**的**显性URL**记录，线路为默认，记录值为`http://www.choujindeputao.com`（以我的网站为例），这个记录意思是将`http://choujindeputao.com`重定向到`http://www.choujindeputao.com`

一个**www**的**CNAME**的记录，线路国外，记录值为`{username}.github.io`，**{username}**是你的github用户名

一个**@**的**CNAME**的记录，线路国外，记录值为`{username}.github.io`，**{username}**是你的github用户名

我还添加了两个百度线路的记录，不过貌似没有什么卵用，最终效果图如下；

![dns]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/7.png"}

值得注意的是[dnspod](https://www.dnspod.cn/){:target="_blank"}的dns解析显性URL记录时，只有在注册一个月后才能用，所以可以暂时先不添加此记录。

***

### 添加至搜索引擎的索引

这个环节比较简单，我简单讲一下。

要将你的网站添加至搜索引擎的索引，一般先要验证你的网站所有权，然后验证你的robots.txt文件，最后提交你blog中的url。

这几个步骤在[百度站长](https://zhanzhang.baidu.com/)或者[google search console](https://www.google.com/webmasters/tools/home)都有傻瓜式的指引，如果还是有不懂的地方的话欢迎联系我。

***

## 最后

如果有错误或纰漏的地方，可以在下方留言。

完。
