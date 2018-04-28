$(document).ready(function(){
    createMenu();  

    carragaAjax();
});

let carragaAjax = () =>{
    $.post('scripts/partials/nav.html', function(data, status){ 
            carregaPag();
            subMenu();
    }); 
}
let carregaPag = () =>{
    $('#menu-itens a').click(function(){
        let lnk = $(this).attr('value');   
        $("conteudo").load(`scripts/partials/${lnk}.html`);        
    });
    
    
}