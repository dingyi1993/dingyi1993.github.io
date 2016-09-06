require(['jquery', 'layer'], function() {
    $('.entry img').load(function() {
        var $this = $(this);
        var data = {
            alt: $this.attr('alt'),
            src: $this.attr('src'),
        };
        $this.click(function() {
            layer.photos({
                photos: {
                    data: [data]
                }
            });
        });
    });
});