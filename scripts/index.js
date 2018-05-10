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
        $.post('scripts/partials/produtos.json', function (data, status) {
            var produto;
            var info;
            if (lnk.attr('value') == 'paineis') {
                produto = data.paineis[0];
                info = data.paineis.tec[0].info;
            }
            else if (lnk.attr('value') == 'baterias') {
                produto = data.baterias[0];
                info = data.baterias.tec[0].info;
            }
            var cont = "<img src=\"" + produto.imgPrincipal + "\" class=\"img-fluid w-100\">\n            <div class=\"text-center\">\n                <div class=\"container m-5\">\n                        <h2>" + produto.tituloPrincipal + "</h2>\n                        <p>" + produto.textoPrincipal + "</p>\n                </div>\n                <div class=\"row m-0\">\n                    <div class=\"col-lg-6 bk\">\n                            <div class=\"painelT p-5\">\n                                <h4>" + produto.colunas[0].titulo + "</h4>\n                                <p>" + produto.colunas[0].texto + "</p>\n                            </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <img class=\"img-fluid w-100\" src=\"" + produto.colunas[0].img + "\">\n                    </div>\n                </div>\n                <div class=\"row m-0\">\n                    <div class=\"col-lg-6\">\n                        <img class=\"img-fluid w-100\" src=\"" + produto.colunas[1].img + "\">\n                    </div>\n                    <div class=\"col-lg-6 bk\">\n                        <div class=\"painelT p-5\">\n                            <h4>" + produto.colunas[1].titulo + "</h4>\n                            <p>" + produto.colunas[1].texto + "</p>\n                        </div>\n                    </div>\n                </div>   \n                <div class=\"row m-0 bg-dark text-light\">\n                    <div class=\"col-lg-6\">\n                        <img class=\"img-fluid w-100\" src=\"" + produto.colunas[1].img + "\">\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div class=\"painelT p-5\">\n                            <h3>Informa\u00E7\u00F5es T\u00E9cnicas</h3>\n                            <p></p>\n                        </div>\n                    </div>\n                </div>               \n\n            </div>";
            $('pContent').html(cont);
            console.log(produto.tec[0].info);
        });
        $('#hp').text(lnk.text());
    });
};
var insertText = function (item) {
    var result = "";
    for (var i in item) {
        result += '';
    }
};
//# sourceMappingURL=index.js.map