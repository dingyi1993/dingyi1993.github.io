require(['jquery', 'layer'], function() {
    $('.entry img').load(function() {
        console.log($(this).attr('src'));
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
