"use strict";
/// <reference path ="../node_modules/@types/jquery/index.d.ts"/> 
var p = document.createElement("p");
p.textContent = "Ola Mundo";
document.body.appendChild(p);
$(document).ready(function () {
    $("p").click(function () {
        $(this).hide();
    });
});
//# sourceMappingURL=index.js.map