$(document).ready(function(){
    createMenu(); 
    carragaAjax();
    $("conteudo").load(`scripts/partials/home.html`);
});

let carragaAjax = () =>{
    $.post('scripts/partials/nav.html', function(data, status){ 
            carregaPag();            
    }); 
}
let carregaPag = () =>{    
    $('#menu-itens a').click(function(){
        let lnk = $(this).attr('value');   
        $("conteudo").load(`scripts/partials/${lnk}.html`, 
        (response, status, xhr)=>{
            if(status == "error"){
                $("conteudo").load(`scripts/partials/404.html`)
            }
        });        
    });
    
    
}