"use strict";
var createMenu = function () {
    $('nav-principal').load('scripts/partials/nav.html');
};
$('nav-principal').ready(function () {
});
var subMenu = function () {
    $("li").hover(function () { $(this).children('ul').css("display", "block"); }, function () { $(this).children('ul').css("display", "none"); });
};
//# sourceMappingURL=nave.js.map