const createMenu = () =>{
   $('nav-principal').load('scripts/partials/nav.html');   
    
}
$('nav-principal').ready(function(){
    
});

let subMenu = () =>{
    $("li").hover(function(){$(this).children('ul').css("display", "block")}
    , function(){$(this).children('ul').css("display", "none")});
}

