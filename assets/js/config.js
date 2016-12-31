---
---

require.config({
    baseUrl: '{{ site.asset_path }}',
    waitSeconds: 60,
    urlArgs: 'v={{ site.version }}',
    map: {
        '*': {
            'css': 'js/css.min'
        }
    },
    paths: {
        'jquery': 'js/jquery-2.2.3.min',
        'av': 'https://cdn1.lncld.net/static/js/av-mini-0.6.10',
        'hit-kounter': 'http://jerry-cdn.b0.upaiyun.com/hit-kounter/hit-kounter-lc-0.2.0',
        'lazyload': 'js/jquery.lazyload.min',
        'easing': 'js/jquery.easing.min',
        'galaxy': 'js/galaxy',
        'pagepiling': 'pagepiling/jquery.pagepiling.min',
        'magicsearch': 'magicsearch/jquery.magicsearch.min',
        'layer': 'layer/layer',
        'smoothscroll': 'js/SmoothScroll',
        'tagcanvas': 'js/jquery.tagcanvas.min',
        'useragent': 'js/userAgent.min',
    },
    shim: {
        'hit-kounter': ['av'],
        'lazyload': ['jquery'],
        'easing': ['jquery'],
        'galaxy': ['jquery'],
        'pagepiling': ['jquery'],
        'magicsearch': ['jquery', 'css!{{ site.asset_path}}/magicsearch/jquery.magicsearch.min'],
        'layer': ['jquery', 'css!{{ site.asset_path}}/layer/skin/layer'],
        'tagcanvas': ['jquery'],
    }
});
