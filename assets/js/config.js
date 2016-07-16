require.config({
    baseUrl: '/assets',
    waitSeconds: 60,
    map: {
        '*': {
            'css': 'js/css.min' // or whatever the path to require-css is
        }
    },
    paths: {
        'jquery': 'js/jquery-2.2.3.min',
        'av': 'https://cdn1.lncld.net/static/js/av-mini-0.6.10',
        'hit-kounter': 'http://jerry-cdn.b0.upaiyun.com/hit-kounter/hit-kounter-lc-0.2.0',
        'unveil': 'js/jquery.unveil',
    },
    shim: {
        'hit-kounter': ['av'],
        'unveil': ['jquery'],
    }
});
