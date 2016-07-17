require(['jquery','hit-kounter', 'unveil', 'lazyload', 'easing'], function() {
    $('#top .menu').click(function() {
        $('#side').removeClass('hide');
    });
    $('#side .close').click(function() {
        $('#side').addClass('hide');
    });
    $('#tab a').click(function() {
        var $this = $(this);
        if (! $this.hasClass('active')) {
            $this.parent().find('a.active').removeClass('active');
            $this.addClass('active');
        }
    });
    $("img.lazy").lazyload({
        effect : "fadeIn",
        container: '#main'
    });
    $('#main').scroll(function(){
        var $this = $(this);
        if ($this.scrollTop() >= 800) {
            $('#rocket').fadeIn();
        } else {
            $('#rocket').fadeOut();
        }
    });
    $('#rocket').click(function() {
        $('#main').animate({
            'scroll-top': 0
        }, {
            duration: 800,
            easing: "easeOutBounce"
        });
    });

    var browser={
        versions:function() {
            var u = navigator.userAgent, app = navigator.appVersion;
            return {//移动终端浏览器版本信息
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                mobile: u.indexOf('Mobile') > -1, //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
            };
        }(),
        language:(navigator.browserLanguage || navigator.language).toLowerCase()
    };
    if (! browser.versions.mobile) {
        require(['galaxy']);
    }
});
