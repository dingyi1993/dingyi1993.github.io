---
layout: post
title: fiddler配置可视化的跨域选择
#image: 6.jpg
excerpt: 在用fiddler的autoResponder代理接口时，如果接口恰好和你的资源不是同一主机名下，就会产生跨域的问题，此博客介绍如何方便、可视化地添加跨域。
category: 开发
tags: 前端 工具
date: 2017-07-08 16:15:34 +0800
---

## 前言

在用fiddler的autoResponder代理接口时，如果接口恰好和你的资源不是同一主机名下，就会产生跨域的问题，此博客介绍如何方便、可视化地添加跨域。

## 正文

打开fiddler的安装目录，找到如下文件，编辑之：

![config file]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/1.png"}

找到下图中红框的位置，添加红框下面的一串代码，此代码意思在rule菜单中添加一个选项，并且定义了一个变量，表示需要跨的域。

![config file]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/2.png"}

{% highlight javascript %}
// 这里是新加的菜单项
RulesString("Override &Allow-Origin", true) // 一级菜单名称
RulesStringValue(1,"*.ssjlicai.com", "*.ssjlicai.com") // 指定几个默认的的选项
RulesStringValue(2,"&Custom...", "%CUSTOM%") // 允许用户自已定义,点击时弹出输入
// 如果加第4个参数为true的话,会把当前规则当作默认规则,每次启动都会生效,如:
// RulesStringValue(3,"菜单项显示内容","菜单项选中对应值",true) // 将会默认选中此项
public static var sAllowOrigin: String = null; // 定义变量名称
{% endhighlight %}

找到下图中红框的onBeforeResponse方法，添加第二个if判断，即sAllowOrigin的判断。

![config file]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/3.png"}

{% highlight javascript %}
if(sAllowOrigin){
    oSession.oResponse["Access-Control-Allow-Origin"] = sAllowOrigin;
    oSession.oResponse["Access-Control-Allow-Credentials"] = "true";
}
{% endhighlight %}

效果图如下，点击custom可以自定义。

![config file]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/4.jpg"}

上面截图中的是稍微旧一点的fiddler，最新版的fiddler已经支持在界面中编辑脚本了，如下图：

![config file]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/5.png"}

添加的代码和位置都是一样的，修改完后记得点击保存，就可以看到效果了。
