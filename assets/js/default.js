require(['jquery','hit-kounter', 'unveil'], function() {
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
    $("img.lazy").unveil(1000, function() {
        $(this).load(function() {
            var $this = $(this);
            $this.css('opacity', 0);
            $this.animate({
                opacity: 1
            });
        });
    });
    $('#main').scroll(function(){
        $(window).trigger('scroll');
    });
});
