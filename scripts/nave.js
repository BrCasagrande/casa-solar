"use strict";
var createMenu = function () {
    $('nav-principal').load('scripts/partials/nav.html');
};
var subMenu = function () {
    $('li').css('z-index', '999');
    $("li").hover(function () { $(this).children('ul').css("display", "block"); }, function () { $(this).children('ul').css("display", "none"); });
};
//# sourceMappingURL=nave.js.map