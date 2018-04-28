$(document).ready(function(){
    createMenu();  
    carregaPag();  
});

let carregaPag = () =>{
    $('#home').on("click",function(){
        $( "#conteudo" ).load( `scripts/partials/home.html` );
    });
    
}