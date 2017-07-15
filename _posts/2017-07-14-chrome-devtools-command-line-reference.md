---
layout: post
title: chrome devtools中内置的方便调试DOM的函数和变量
image: console-panel.png
excerpt: chrome的devtools内置了很多方便调试DOM的函数和变量，比如$、$$、$x、debug等，这应该算是一篇伪翻译，因为是从谷歌开发者网站搬过来的（摊手）。
category: 开发
tags: 前端 chrome
date: 2017-07-15 16:57:12 +0800
---

## 前言

The Command Line API contains a collection of convenience functions for performing common tasks: selecting and inspecting DOM elements, displaying data in readable format, stopping and starting the profiler, and monitoring DOM events.

翻译过来大概意思就是谷歌爸爸在F12中内置了一系列方便选择、注入DOM的函数和变量，展示可读性高的数据，事件监听等等，下面就来详细讲一下。

PS：谷歌爸爸还说了，这些api只能在F12中用，代码中可用不了。

## 正文

### $_

此变量返回你最近一次表达式返回的结果，通俗来说就是你上次在console中输出了什么，```$_```就返回什么。

下面这个例子先执行```(2 + 2)```，返回4，然后输入```$_```也返回4。

![config file]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/recently-evaluated-expression-1.png"}

但是当你执行```$_```时，返回的结果也会被作为一次表达式求值，下面的代码就是当你执行```$_.length```时，```$_```的值不再是数组。

![config file]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/recently-evaluated-expression-2.png"}

### $0 - $4

其实是```$0```、```$1```、```$2```、```$3```和```$4```一共5个变量，他们会返回你在elements标签中最近选中的元素，```$0```是最近一个选择的，```$1```是最近第二个选择的，以此类推。

比如你选择了p元素，console中输入```$0```就会打印出你刚选择的元素。

![config file]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/element-0.png"}

当你再选择li时，```$0```就变成了li，而```$1```就变成了p。

![config file]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/element-1.png"}

### $(selector)

这个函数其实就是```document.querySelector()```的别名。

![config file]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/selector-img.png"}

PS：如果你用了jQuery或者其他任何定义在window上的以$为变量名的变量的库或代码，此函数都会被覆盖。

### $$(selector)

这个函数的功能和```document.querySelectorAll()```是一样的，返回一个DOM数组。注意这个和上面的```$(selector)```不一样，不是能说是```document.querySelectorAll()```的别名，只能说是功能一样，因为这个函数返回值的类型是Array，```document.querySelectorAll()```返回值的类型是NodeList。

{% highlight javascript %}
var images = $$('img');
for (each in images) {
    console.log(images[each].src);
}
{% endhighlight %}

![config file]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/all-selector.png"}

PS：在console中按 Shift + Enter 可以换行。

### $x(path)

这个函数让你可以以XPath expression的形式去选择DOM。XPath expression是什么？[点击这里](http://saxon.sourceforge.net/saxon6.5.3/expressions.html){:target="_blank"}。

比如下面图中就是选择所有的p标签。

![config file]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/xpath-p-example.png"}

下面图中是选择所有包含a标签的p标签。

![config file]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/xpath-p-a-example.png"}

### clear()

顾名思义，清空console。

### copy(object)

拷贝一个DOM字符串至剪贴板，如```copy($0);```

### debug(function)

这个函数可以让你在function之前添加断点，并且可以一步步执行。

下图是在jQuery.Animation中添加断点，执行animate方法就会跳入单步调试了。

![config file]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/debug.png"}

用```undebug(fn)```来解除断点。

### inspect(object/function)

可以在面板中显示DOM对象的位置或者function的定义位置。

比如输入```inspect(document.body);```，则会直接定位到body的位置。

![config file]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/inspect.png"}

### getEventListeners(object)

此函数返回绑定在某个DOM上的所有事件，返回一个对象，对象的key是事件明，value是数组，因为同一个事件可以绑定多次。

![config file]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/get-event-listeners.png"}

### keys(object)

返回一个对象所有的key组成的数组。

![config file]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/keys-values.png"}

### monitor(function)

监听一个function，每当function被调用时会有一条log，并且显示参数。

{% highlight javascript %}
function sum(x, y) {
    return x + y;
}
monitor(sum);
sum(1, 2);
{% endhighlight %}

![config file]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/monitor.png"}

### monitorEvents(object[, events])

可以监听某个DOM上的事件，如不指定第二个参数，则监听全部的事件。

比如输入```monitorEvents(window, "resize");```，则每次在resize时都会在控制台输出相关信息。

![config file]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/monitor-events.png"}

第二个参数也可以是数组

{% highlight javascript %}
monitorEvents(window, ["resize", "scroll"]);
{% endhighlight %}

每一种事件对应一种类型，下面是所有可以监听的事件。

| 类型 | 事件 |
|:-----------|:------------:|
| mouse | "mousedown", "mouseup", "click", "dblclick", "mousemove", "mouseover", "mouseout", "mousewheel" |
| key | "keydown", "keyup", "keypress", "textInput" |
| touch | "touchstart", "touchmove", "touchend", "touchcancel" |
| control | "resize", "scroll", "zoom", "focus", "blur", "select", "change", "submit", "reset" |

第二个参数你也可以传类型的名称，这样可以监听这个类型的所有事件。

{% highlight javascript %}
monitorEvents($0, "key");
{% endhighlight %}

![config file]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/monitor-key.png"}

### table(data[, columns])

将对象以表格的形式展现。

{% highlight javascript %}
var names = {
    0: { firstName: "John", lastName: "Smith" },
    1: { firstName: "Jane", lastName: "Doe" }
};
table(names);
{% endhighlight %}

![config file]({{ site.asset_path }}/images/{{ site.loading }}){:class="lazy"}{:data-original="{{ site.asset_path }}/images/posts{{ page.id }}/table.png"}

### undebug(function)

解除用debug添加的断点。

### unmonitor(function)

解除监听monitor所监听的函数。

### unmonitorEvents(object[, events])

解除用monitorEvents监听的事件，你也可以用此函数来快速监听除了某个事件之外的事件，比如：

{% highlight javascript %}
monitorEvents($0, "mouse");
unmonitorEvents($0, "mousemove");
{% endhighlight %}

### values(object)

返回一个对象所有的value组成的数组。

## 最后

参考google developer官方文档（[https://developers.google.cn/web/tools/chrome-devtools/console/command-line-reference](https://developers.google.cn/web/tools/chrome-devtools/console/command-line-reference){:target="_blank"}），上文截图也来自官方文档。
