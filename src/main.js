/*global define*/
define(function (require) {
    'use strict';
    var $ = require('jquery'),
        fixedHeaderTable = require('fixedHeaderTable'),
        Handlebars = require("handlebars"),
        Common = require("Common");

    function init() {
        var tempData = {test : 4, partial: "partial"},
            html,
            loader = require("templates/handlebars"),
            partial = require("templates/partial");
        Handlebars.registerPartial("partial", partial);
        html = loader(tempData);
        $('#content').empty().append(html);

        var $node = $("#myTable01"),
            height = "400",
            width = "300";

        $node.fixedHeaderTable({
            height: height,
            width: width,
            fixedColumns: 1,
            altClass: 'odd',
            themeClass: 'fancyTable'
        });

        Common.test();
    }

    return {
        init: init
    };
});