require(['jquery','hit-kounter', 'unveil', 'lazyload', 'easing'], function() {

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
    });
    $('#side .close').click(function() {
        $('#side').addClass('hide');
    });
    $("img.lazy").lazyload({
        effect : "fadeIn",
        container: '#main',
        threshold : 500
    });
    $('#main').scroll(function(){
        var $this = $(this);
        if ($this.scrollTop() >= 800) {
            $('#rocket').fadeIn();
        } else {
            $('#rocket').fadeOut();
        }
    });
    $('.home:not(.not-home)').click(function() {
        $('#container').toggleClass('full');
    });
    $('#rocket').click(function() {
        $('#main').animate({
            'scroll-top': 0
        }, isMobile ? undefined : {duration: 800, easing: "easeOutBounce"});
    });

    $('js-category-btn').hover(function() {

    });

    if (! isMobile) {
        require(['galaxy']);
    }

    $('.cs-select').hover(function() {
        $(this).toggleClass('cs-active');
    });
});
