"use strict";
var init = function () {
    createMenu();
    addItens();
};
var item = [{ "nome": "Home", "url": "#" }, { "nome": "Simulador", "url": "#" },
    { "nome": "Produtos", "url": "#", "itens": ["1", "vr"] }];
var createMenu = function () {
    var menuPrincipal = $('nav-principal');
    var nav = "\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n                <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#menuPrincipal\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                    <span class=\"navbar-toggler-icon\"></span>\n                </button>\n                    \n                <div class=\"collapse navbar-collapse\" id=\"menuPrincipal\">\n                    <ul id =\"menu-itens\" class=\"navbar-nav mr-auto\">\n                        <li class=\"nav-item active\">\n                            <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\">Simulador</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\">Produtos</a>\n                            <ul class=\"navbar-nav bg-dark menuShow\">\n                                <li class=\"nav-item\">\n                                    <a href=\"#\" class=\"nav-link\">Pain\u00E9is Solares</a>\n                                    <ul class=\"navbar-nav bg-dark menuShow\">\n                                        <li class=\"nav-item\"><a href=\"#\" class=\"nav-link\">At\u00E9 95w</a></li>\n                                        <li class=\"nav-item\"><a href=\"#\" class=\"nav-link\">100w at\u00E9 195w</a></li>\n                                        <li class=\"nav-item\"><a href=\"#\" class=\"nav-link\">200w at\u00E9 295w</a></li>\n                                        <li class=\"nav-item\"><a href=\"#\" class=\"nav-link\">Aciam de 300w</a></li>\n                                    </ul>\n                                </li>\n                            </ul>\n                        </li>                      \n                    </ul>\n                    <form class=\"form-inline my-2 my-lg-0\">\n                    <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n                    <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n                    </form>\n                </div>\n            </nav>   ";
    menuPrincipal.append(nav);
};
var addItens = function () {
    item.forEach(function (n) {
        var it = "<li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"" + n.url + "\">" + n.nome + "</a>        \n    </li>";
        $("#menu-itens").append(it);
        if (n.itens) {
            var sub = "<ul class=\"navbar-nav bg-dark menuShow\"></ul>";
            n.itens.forEach(function (m) {
                var subItem = "<li class=\"nav-item\">\n            <a href=\"#\" class=\"nav-link\">" + m + "</a></li>";
            });
            console.log(n);
        }
    });
};
init();
$("li").hover(function () { $(this).children('ul').css("display", "block"); }, function () { $(this).children('ul').css("display", "none"); });
//# sourceMappingURL=nave.js.map