require(['jquery', 'smoothscroll', 'useragent', 'hit-kounter', 'lazyload', 'tagcanvas'], function($, smoothScroll, useragent) {

    $("img.lazy").lazyload({
        effect : "fadeIn",
        threshold : 500
    });
    $(window).scroll(function() {
        var $this = $(this);
        var $rocket = $('#rocket');
        var $grape = $('#main .grape');
        if ($this.scrollTop() >= 800) {
            !$rocket.hasClass('show') && $rocket.addClass('show');
        } else {
            $rocket.hasClass('show') && $rocket.removeClass('show');
        }
        if ($('#main').offset().top - $(document).scrollTop() <= 0) {
            !$grape.hasClass('fixed') && $grape.addClass('fixed');
        } else {
            $grape.hasClass('fixed') && $grape.removeClass('fixed');
        }
    });
    $('#rocket').click(function() {
        $('body').animate({
            'scroll-top': 0
        });
    });

    smoothScroll({ arrowScroll: 100, animationTime: 500 });

    $('#tag-canvas').tagcanvas({
        textColour: '#666',
        outlineColour: '#999',
        bgColour: '#040404',
        outlineMethod: 'colour',
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        textHeight: 12,
        textFont: 'Microsoft Jhenghei, Consolas, Helvetica, Arial, sans-serif',
        shadowBlur: 2,
        bgRadius: 3,
        dragControl: useragent.isMobile,
    },'tags');

    var leftHeight = 0,
        rightHeight = 0,
        space = 20,
        ratio = 0.33;
    var $posts = $('.posts .item');
    $posts.each(function() {
        var $this = $(this),
            selfHeight = $this.outerHeight();
        if (
            (rightHeight < leftHeight && ((leftHeight - rightHeight) >= (selfHeight * ratio))) ||
            (rightHeight > leftHeight && ((rightHeight - leftHeight) < (selfHeight * ratio)))
        ) {
            $this.css({
                top: rightHeight,
                right: 0,
            });
            rightHeight += selfHeight + space;
        } else {
            $this.css({
                top: leftHeight,
                left: 0,
            });
            leftHeight += selfHeight + space;
        }
    });
    $('.posts').height(Math.max(leftHeight, rightHeight));
    $('#main').removeClass('not-ready').addClass('animate');
    $('#bottom').removeClass('not-ready');
    $(window).trigger('scroll');
});
