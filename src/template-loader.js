/*global $, Handlebars*/
var TemplateLoader = {};

(function () {
    TemplateLoader.getTemplateFromFile = function (templateFile, templateId) {
        var source = $(templateFile).filter(templateId).html();
        return Handlebars.compile(source);
    };

    TemplateLoader.getTemplateFile = function (fileName) {
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
    };

    TemplateLoader.getTemplate = function (fileName, templateId) {
        var templateFile = TemplateLoader.getTemplateFile(fileName);
        return TemplateLoader.getTemplateFromFile(templateFile, templateId);
    };

    TemplateLoader.getPartial = function (fileName, templateId) {
        var templateFile = TemplateLoader.getTemplateFile(fileName);
        var source = $(templateFile).filter("#" + templateId).html();
        Handlebars.registerPartial(templateId, source);
    };
}());