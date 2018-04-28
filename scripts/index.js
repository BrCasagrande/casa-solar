"use strict";
$(document).ready(function () {
    createMenu();
    carragaAjax();
});
var carragaAjax = function () {
    $.post('scripts/partials/nav.html', function (data, status) {
        carregaPag();
        subMenu();
    });
};
var carregaPag = function () {
    $('#menu-itens a').click(function () {
        var lnk = $(this).attr('value');
        $("conteudo").load("scripts/partials/" + lnk + ".html");
    });
};
//# sourceMappingURL=index.js.map