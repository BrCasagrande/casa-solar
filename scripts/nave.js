"use strict";
var init = function () {
    createMenu();
};
var createMenu = function () {
    var nav = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n<a class=\"navbar-brand\" href=\"#\">Navbar</a>\n<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#menuPrincipal\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n</button>\n    \n<div class=\"collapse navbar-collapse\" id=\"menuPrincipal\">\n    <ul id =\"menu-itens\" class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n            <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Simulador</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Produtos</a>\n            <ul class=\"navbar-nav bg-dark menuShow\">\n                <li class=\"nav-item\">\n                    <a href=\"#\" class=\"nav-link\">Pain\u00E9is Solares</a>\n                    <ul class=\"navbar-nav bg-dark menuShow\">\n                        <li class=\"nav-item\"><a href=\"#\" class=\"nav-link\">At\u00E9 95w</a></li>\n                        <li class=\"nav-item\"><a href=\"#\" class=\"nav-link\">100w at\u00E9 195w</a></li>\n                        <li class=\"nav-item\"><a href=\"#\" class=\"nav-link\">200w at\u00E9 295w</a></li>\n                        <li class=\"nav-item\"><a href=\"#\" class=\"nav-link\">Aciam de 300w</a></li>\n                    </ul>\n                </li>\n            </ul>\n        </li>                      \n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n    <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n    <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n</div>\n</nav>";
    $('nav-principal').append(nav);
};
init();
$("li").hover(function () { $(this).children('ul').css("display", "block"); }, function () { $(this).children('ul').css("display", "none"); });
//# sourceMappingURL=nave.js.map