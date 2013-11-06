require.config({
    baseUrl: "src",
    paths: {
        templates: "../templates",
        mousewheel: "../lib/jquery-mousewheel/jquery.mousewheel",
        fixedHeaderTable: "../lib/jquery-fixedheadertable/jquery.fixedheadertable",
        jquery: "//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min",
        handlebars: "//cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.0/handlebars.min",
        lodash: "//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.1.0/lodash.min",
        backbone: "//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min"
    },
    shim: {
        fixedHeaderTable: {
            deps: ['jquery', 'mousewheel'],
            exports: "fixedheadertable"
        },
        handlebars: {
            // The reason to use 'exports' is if not, requirejs won't define a module for this plugin.
            // "exports" is used to identify the global that the non AMD module introduces.
            // It says: "Once loaded, use the global 'Handlebars' (which is used as value of exports )
            // as the module value". When requiring to use handlebars in some module and names it as "hhhh",
            // then requirejs will reference "Handlebars" to this local variable "hhhh".

            // And also this value should not be set as any name. It should fit to the variable name defined in
            // handlebars. So if you change this "Handlebars" to other names like "H", it will be error.

            //But jquery, loDash don't need this exports, because they have already call define() to declare the module
            exports: "Handlebars"
        },
        backbone: {
            deps: ["jquery", "lodash"],
            exports: "Backbone"
        },
        templates: {
            deps: ['handlebars']
        }
    }
});

require(["main"], function (main) {
    "use strict";
    main.init();
});