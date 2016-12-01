---
layout: post
title: jQuery和zepto在width和height方法源码中的不同
excerpt: jQuery和zepto在有缩放的dom上获取宽高时，结果不一致，这里大概讲一下源码。
category: 开发
tags: 前端 javascript 源码 jQuery zepto
date: 2016-12-01 17:45:23 +0800
---

## 前言

偶然间发现的，在pc端用jQuery的width和height方法时，遇到需要动画缩放，用起来毫无问题；

但是在移动端用zepto，这两个方法在缩放时就会粗问题，jQuery获取的是缩放前的值，zepto获取的是缩放后的值。

## 正文

症状如下：

[传送门](/demo{{ page.id }}/){:target="_blank"}

既然发现问题，我们来翻一下源码。

PS：jQuery版本为1.9.1，zepto版本为1.2.0 。

### jQuery主要源码

{% highlight javascript %}
...
function getWidthOrHeight( elem, name, extra ) {

    var valueIsBorderBox = true,
        val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
        styles = getStyles( elem ),
        isBorderBox = jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

    ...

    return ( val +
        augmentWidthOrHeight(
            elem,
            name,
            extra || ( isBorderBox ? "border" : "content" ),
            valueIsBorderBox,
            styles
        )
    ) + "px";
}
...
{% endhighlight %}

实际上jQuery并不是直接进入到上面的函数中，而是经过七大姑八大姨的跳转才来到这里，具体经历了什么可以自行debug查找，这里不赘述。

可以看到，上面获取width或者height时，是用offsetWidth或者offsetHeight。

### zepto主要源码

{% highlight javascript %}
...
offset: function(coordinates){
    ...
    var obj = this[0].getBoundingClientRect()
    return {
        left: obj.left + window.pageXOffset,
        top: obj.top + window.pageYOffset,
        width: Math.round(obj.width),
        height: Math.round(obj.height)
    }
}
...
{% endhighlight %}

但是zepto这里用的是getBoundingClientRect函数来进行获取，这个函数会返回一个对象，里面有 top、left、bottom、right、width、height 六个key，其中width和height是元素自身的宽高。

### 总结

其实不一致的原因就是一个用了offsetWidth、offsetHeight，另一个用了getBoundingClientRect，总之是找到了原因。

但是有人觉得缩放后就应该获取缩放后的值，又有人觉得既然缩放后站的位置大小不会变，就应该原来是多少缩放后还是多少，其实应该根据具体的情况来使用就好，没有撕X的必要。

## 最后

以上，没有了。
