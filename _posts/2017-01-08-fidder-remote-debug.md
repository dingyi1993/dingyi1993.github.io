---
layout: post
title: 使用fidder远程调试移动端的代码
excerpt: 可以用fidder调试在移动端的任何http/https的代码，没有做不到，只有想不到。
category: 开发
tags: 前端 工具
date: 2017-01-08 16:45:23 +0800
---

## 前言

前一阵子一直在忙着重新布局博客，对于一个强迫症来说，重新布局简直是要了老命了，每一点都要纠结很久，最终花了很长时间，现在终于能把这篇博客补上了。

## 正文

移动端web页面的开发过程中，免不了真机测试，但是移动端肯定没有pc上方便调试，于是有了[fidder](http://www.telerik.com/fiddler){:target="_blank"} 。

先看一下效果图：

![alert]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/11.jpg"}

下面是调试的几个步骤：

1. [去官网下载安装fidder](http://www.telerik.com/fiddler){:target="_blank"} ；

2. [配置fidder可以调试远程设备](#fidder)；

3. [在移动端安装fidder的证书](#fidder-1)；

4. [将代码在本地复制一份](#section-2)；

5. [将请求代理到本地文件](#section-3)；

6. [修改本地文件](#section-4)。

### 配置fidder可以调试远程设备

打开fidder后，在**Tools**下拉菜单中选择 **Fidder Options** ，如下图：

![1]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/1.jpg"}

点击**HTTPS**标签，按下图中的步骤操作：

![2]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/2.jpg"}

点击**Connections**标签，默认端口是8888（一会需要在移动端用到），勾选 **Allow remote computers to connect** ，记得设置完这一步后重启一下fidder：

![3]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/3.jpg"}

### 在移动端安装fidder的证书

在移动设备中打开浏览器，输入pc的ip地址+端口号（移动设备和pc必须在同一网络内），如`192.168.1.173:8888`，然后点击下图中红框的链接，会提你示安装证书，一路确定就好：

![4]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/4.jpg"}

### 将代码在本地复制一份

在手机中访问任意网址（在此用百度首页为例），找到 你需要修改代码的请求，在请求上点击右键，按下图步骤操作，将代码保存到本地：

![5]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/5.jpg"}

### 将请求代理到本地文件

点击右面板中的AutoResponeder标签，将刚才的请求拖拽至右边的红框区域，如下图：

![6]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/6.jpg"}

确保第一个红框中的选项选中，点击第二个红框中的请求，然后在第三个红框中的下拉菜单中选择 **Find a file...** ，选择刚才你保存过的文件：

![7]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/7.jpg"}

选择完成后，应该如下图所示的样子：

![8]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/8.jpg"}

### 修改本地文件

打开你保存的文件，可能是如下的状态：

![9]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/9.jpg"}

没关系，格式化一下就好，然后插入你想改动的代码，如下图：

![10]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/10.jpg"}

在手机中重新打开你刚才的页面，即可看到效果：

![11]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/11.jpg"}

## 最后

上面演示了fidder中稍微高级一点的用法，实际上fidder可以做的远远比上面的多，持续探索ing...

PS： 移动端的调试搭配 [vconsole](https://github.com/WechatFE/vConsole){:target="_blank"} 效果更佳。
