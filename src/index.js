require.config({
    baseUrl: "src",
    path: {
        templates: "../templates",
        "jquery-mousewheel": "../lib/jquery-mousewheel/jquery.mousewheel",
        "jquery-fixedHeaderTable": "../lib/jquery-fixedheadertable/jquery.fixedheadertable",
        jquery: "//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js",
        "jquery-migrate": "//cdnjs.cloudflare.com/ajax/libs/jquery-migrate/1.2.1/jquery-migrate.min.js",
        "handlebars": "//cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.0/handlebars.min.js",
    },
    shim: {
        "jquery-migrate": {
            deps: ['jquery'],
            exports: "jqueryMigrate"
        }
    }
})