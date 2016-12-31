require(['jquery', 'useragent'], function($, useragent) {

    $('#footer').hover(function() {
        var $this = $(this);
        var $about = $this.find('.about');
        $this.toggleClass('active');
        $this.hasClass('active') ? $about.text('About me') : $about.text($about.attr('data-sitename'));
    });

    if (useragent.isPC) {
        require(['galaxy']);
    }

});
