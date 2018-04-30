"use strict";
$(document).ready(function () {
    createMenu();
    carragaAjax();
    $("conteudo").load("scripts/partials/home.html");
});
var carragaAjax = function () {
    $.post('scripts/partials/nav.html', function (data, status) {
        carregaPag();
    });
};
/* Carrega o conteudo com base no value do elemento a */
var carregaPag = function () {
    $('#menu-itens a').click(function () {
        var lnk = $(this).attr('value'); // a value          
        $("conteudo").load("scripts/partials/" + lnk + ".html", function (response, status, xhr) {
            if (status == "error") {
                $("conteudo").load("scripts/partials/404.html");
            }
        });
    });
};
//# sourceMappingURL=index.js.map