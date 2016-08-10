---
---

require(['jquery', 'hit-kounter', 'lazyload', 'easing'], function() {

    var system = {};
    var isMobile = true;
    var p = navigator.platform;
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
    if (system.win || system.mac || system.xll) {
        isMobile = false;
    }

    $('#top .menu').click(function() {
        $('#side').removeClass('hide');
        $('#container').addClass('full');
    });
    $('#side .close').click(function() {
        $('#side').addClass('hide');
    });
    $('#footer').hover(function() {
        var $this = $(this);
        var $about = $this.find('.about');
        $this.toggleClass('active');
        $this.hasClass('active') ? $about.text('About me') : $about.text('{{ site.name }}');
    });
    $("img.lazy").lazyload({
        effect : "fadeIn",
        threshold : 500
    });
    $(window).scroll(function() {
        var $this = $(this);
        if ($this.scrollTop() >= 800) {
            $('#rocket').fadeIn();
        } else {
            $('#rocket').fadeOut();
        }
    });
    $('#rocket').click(function() {
        $('body').animate({
            'scroll-top': 0
        }, isMobile ? undefined : {duration: 800, easing: "easeOutBounce"});
    });

    $('js-category-btn').hover(function() {

    });

    $('.weixin-btn').hover(function() {
        $('.weixin-qrcode').toggleClass('hover');
    });

    if (! isMobile) {
        require(['galaxy']);
    }
});
