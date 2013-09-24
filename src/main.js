/*global $*/
define(function (require) {
    'use strict';
    var $ = require('jquery'),
        TemplateLoader = require('template-loader'),
        fixedHeaderTable = require('fixedHeaderTable');

    function init() {
        var tempData = {test : 4},
            html,
            // loader = TemplateLoader.getTemplate("handlebars.hbs", "#handlebars");
            loader = require("templates/handlebars");
        html = loader(tempData);
        $('#content').empty().append(html);

        var $node = $("#myTable01"),
        // extraHeightOfTable = $node.find("thead > tr").length * 25 + $node.find("tbody > tr").length * 9,
        // extraWidthOfTable = $node.find("tr:first > th").length * 6,
        // width = $node.width() + extraWidthOfTable,
        // height = $node.height() + extraHeightOfTable;

        // height = height > $(window).height() - height ? $(window).height : height;
        // width = width > $node.parent().width() ? $node.parent().width() : width;
            height = "400",
            width = "300";

        $node.fixedHeaderTable({
            height: height,
            width: width,
            fixedColumns: 1,
            altClass: 'odd',
            themeClass: 'fancyTable'
        });
    }
    
    return {
        init: init
    };
});