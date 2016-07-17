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
});
