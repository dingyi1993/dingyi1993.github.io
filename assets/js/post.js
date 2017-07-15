require(['jquery', 'layer', 'toc'], function() {
    $('#toc').toc({
        // showEffect: 'slideDown',
        showSpeed: 0,
        noBackToTopLinks: true,
    });
    $('.entry img').load(function() {
        var $this = $(this);
        var src = $this.attr('src');
        var original = $this.attr('data-original');
        if (src == original) {
            var data = {
                alt: $this.attr('alt'),
                src: src,
            };
            $this.click(function() {
                layer.photos({
                    photos: {
                        data: [data]
                    }
                });
            });
        }
    });
});
