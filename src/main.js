
var loader = TemplateLoader.getTemplate("handlebars.html", "#handlebars"),
    tempData = {test : 4},
    html;


html = loader(tempData);
$('#content').empty().append(html);


var $node = $("#myTable01 table"),
extraHeightOfTable = $node.find("thead > tr").length * 25 + $node.find("tbody > tr").length * 9,
extraWidthOfTable = $node.find("tr:first > th").length * 6,
width = $node.width() + extraWidthOfTable,
height = $node.height() + extraHeightOfTable;

height = height > $(window).height() - height;
width = width > $node.parent().width() ? $node.parent().width() : width;

$node.fixedHeaderTable({
    height: height,
    width: width,
    fixedColumns: 1,
    altClass: 'odd',
    themeClass: 'fancyTable'
});

