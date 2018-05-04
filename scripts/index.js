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
    var nl = $('#menu-itens .nav-link');
    nl.click(function () {
        // seleciona o valor de 'a'para fazer o load da pagina
        var lnk = $(this);
        $("conteudo").load("scripts/partials/" + lnk.attr('value') + ".html", function (response, status, xhr) {
            if (status == "error") {
                $("conteudo").load("scripts/partials/404.html");
            }
            if (lnk.attr('value') == 'produtos') {
                pContent();
            }
            $('h1').append(lnk.text());
        });
    });
};
var pContent = function () {
    var nl = $('#navProdutos .nav-link');
    nl.click(function () {
        // seleciona o valor de 'a'para fazer o load da pagina
        var lnk = $(this);
        $("pcontent").load("scripts/partials/" + lnk.attr('value') + ".html", function (response, status, xhr) {
            if (status == "error") {
                $("pcontent").load("scripts/partials/404.html");
            }
            $('#hp').text(lnk.text());
        });
    });
};
//# sourceMappingURL=index.js.map