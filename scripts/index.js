"use strict";
$(document).ready(function () {
    $.ajaxSetup({
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json'
        }        
     });
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
//Produtos.html
var pContent = function () {
    var nl = $('#navProdutos .nav-link');
    nl.click(function () {
        // seleciona o valor de 'a'para fazer o load da pagina
        var lnk = $(this);
        $.post('scripts/partials/produtos.json', function (data, status) {
            var produto;
            var tec;
            //Seleciona o texto de produtos.json
            if (lnk.attr('value') == 'paineis') {
                produto = data.paineis[0];
                tec = data.paineis[0].tec[0];
            }
            else if (lnk.attr('value') == 'baterias') {
                produto = data.baterias[0];
                tec = data.baterias[0].tec[0];
            }
            else if (lnk.attr('value') == 'telhas') {
                produto = data.telhas[0];
                tec = data.telhas[0].tec[0];
            }
            else if (lnk.attr('value') == 'inversores') {
                produto = data.inversores[0];
                tec = data.inversores[0].tec[0];
            }
            var cont = "<img src=\"" + produto.imgPrincipal + "\" class=\"img-fluid w-100\">\n            <div class=\"text-center\">\n                <div class=\"container m-5\">\n                        <h2>" + produto.tituloPrincipal + "</h2>\n                        <p>" + produto.textoPrincipal + "</p>\n                </div>\n                " + insertItem(produto.colunas) + "                  \n                <div class=\"row m-0 bg-dark text-light\">                    \n                    <div class=\"col-lg-8 p-4\">\n                        <img class=\"w-100\" src=\"" + tec.img + "\">\n                    </div>\n                    <div class=\"col-lg-4\">\n                        <div class=\"p-3\">        \n                            <h2>Informa\u00E7\u00F5es T\u00E9cnicas</h2>                    \n                            " + insertText(tec.info) + "\n                        </div>\n                    </div>\n                </div>      \n            </div>";
            $('pContent').html(cont);
        });
        $('#hp').text(lnk.text());
    });
};
var insertText = function (item) {
    var result = "";
    for (var i in item) {
        result += "<p>" + item[i] + "</p>";
    }
    return result;
};
var insertItem = function (item) {
    var result = "";
    var posicao = "order-last";
    for (var i in item) {
        if (posicao == "") {
            posicao = "order-last";
        }
        else {
            posicao = "";
        }
        result += "\n        <div class=\"row m-0\">\n            <div class=\"col-lg-6 bk d-flex align-items-center p-3 " + posicao + "\">\n                <div>\n                    <h4>" + item[i].titulo + "</h4>\n                    <p>" + item[i].texto + "</p>\n                </div>\n            </div>\n            <div class=\"col-lg-6\">\n                <img class=\"img-fluid w-100\" src=\"" + item[i].img + "\">\n            </div>\n        </div>";
    }
    return result;
}; //Produtos.html end
//# sourceMappingURL=index.js.map