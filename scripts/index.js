"use strict";
$(document).ready(function () {
    createPage();
    carragaAjax();
    $("conteudo").load("scripts/partials/home.html");
});
var carragaAjax = function () {
    $.post('scripts/partials/nav.html', function (data, status) {
        loadContent();
        if ($('nav').length == 0) { //Prevent err
            carragaAjax();
        }
    });
};
/* Adiciona o navegador a página */
var createPage = function () {
    $('nav-principal').load('scripts/partials/nav.html');
    $('footer').load("scripts/partials/footer.html");
};
/* Carrega o conteudo com base no value do elemento a */
var loadContent = function () {
    $('#menu-itens a').click(function () {
        // seleciona o valor de 'a'para fazer o load da pagina
        var lnk = $(this).attr('value');
        if (lnk == 'simulador') {
            $('conteudo').append('<div id="simula"></div>');
            $('#simula').load("scripts/partials/" + lnk + ".html");
        }
        else {
            $("conteudo").load("scripts/partials/" + lnk + ".html", function (response, status, xhr) {
                if (status == "error") {
                    $("conteudo").load("scripts/partials/404.html");
                }
            });
        }
        if (lnk == 'produtos') {
            $('#navProdutos h1').append(lnk);
            console.log("Foi");
        }
    });
};
//# sourceMappingURL=index.js.map