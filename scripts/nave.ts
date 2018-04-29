const createMenu = () =>{
   $('nav-principal').load('scripts/partials/nav.html');           
  
}
let subMenu = () =>{
    $('li').css('z-index','999');
    $("li").hover(function(){$(this).children('ul').css("display", "block")}
,   function(){$(this).children('ul').css("display", "none")});
    console.log('carregado');
}