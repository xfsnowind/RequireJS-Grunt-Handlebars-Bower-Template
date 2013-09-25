require.config({
    baseUrl: "src",
    paths: {
        templates: "../templates",
        mousewheel: "../lib/jquery-mousewheel/jquery.mousewheel",
        fixedHeaderTable: "../lib/jquery-fixedheadertable/jquery.fixedheadertable",
        jquery: "//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min",
        handlebars: "//cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.0/handlebars.min",
        underscore: "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min",
        backbone: "//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min"
    },
    shim: {
        fixedHeaderTable: {
            deps: ['jquery', 'mousewheel'],
            exports: "fixedheadertable"
        },
        handlebars: {
            exports: "Handlebars"
        },
        backbone: {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        },
        underscore: {
            exports: "_"
        }
    }
});

require(["main"], function (main) {
    "use strict";
    main.init();
});