/*global $, Handlebars*/
define(function (require) {
    'use strict';
    var Handlebars = require('handlebars'),
        $ = require('jquery');

    return {
        getTemplateFromFile : function (templateFile, templateId) {
            var source = $(templateFile).filter(templateId).html();
            return Handlebars.compile(source);
        },

        getTemplateFile : function (fileName) {
            var result = null,
                input = {};
            input.url = "templates/" + fileName;
            input.datatype = "html";
            input.type = "GET";
            input.async = false;
            $.ajax({
                url: input.url,
                type: input.type,
                datatype: input.datatype,
                async: input.async,
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    result = data;
                },
            });
            return result;
        },

        getTemplate : function (fileName, templateId) {
            var templateFile = this.getTemplateFile(fileName);
            return this.getTemplateFromFile(templateFile, templateId);
        },

        getPartial : function (fileName, templateId) {
            var templateFile = this.getTemplateFile(fileName);
            var source = $(templateFile).filter("#" + templateId).html();
            Handlebars.registerPartial(templateId, source);
        }
    };
});