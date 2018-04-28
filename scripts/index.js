"use strict";
$(document).ready(function () {
    createMenu();
    carregaPag();
});
var carregaPag = function () {
    $('#home').on("click", function () {
        $("#conteudo").load("scripts/partials/home.html");
    });
};
//# sourceMappingURL=index.js.map