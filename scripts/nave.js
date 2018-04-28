"use strict";
var createMenu = function () {
    $('nav-principal').load('scripts/partials/nav.html');
};
$('nav-principal').ready(function () {
    $.post('scripts/partials/nav.html', function (data, status) {
        $("li").hover(function () { $(this).children('ul').css("display", "block"); }, function () { $(this).children('ul').css("display", "none"); });
    });
});
//# sourceMappingURL=nave.js.map