require.config({
    baseUrl: "src",
    paths: {
        templates: "../templates",
        mousewheel: "../lib/jquery-mousewheel/jquery.mousewheel",
        fixedHeaderTable: "../lib/jquery-fixedheadertable/jquery.fixedheadertable",
        jquery: "//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min",
        handlebars: "//cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.0/handlebars.min",
        migrate: "//cdnjs.cloudflare.com/ajax/libs/jquery-migrate/1.2.1/jquery-migrate.min"
    },
    shim: { 
        migrate: {
            deps: 'jquery',
            exports: "jquerymigrate"
        },
        fixedHeaderTable: {
            deps: ['jquery', 'mousewheel'],
            exports: "fixedheadertable"
        },
        handlebars: {
            exports: "Handlebars"
        }
    }
});

require(["main"], function (main) {
    "use strict";
    main.init();
});