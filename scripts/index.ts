$(document).ready(() =>{
    createMenu(); 
    carragaAjax();
    $("conteudo").load(`scripts/partials/home.html`);
});

let carragaAjax = () =>{
    $.post('scripts/partials/nav.html', (data, status)=>{ 
            carregaPag();                
    }); 
}
/* Carrega o conteudo com base no value do elemento a */
let carregaPag = () =>{    
    $('#menu-itens a').click(function(){
        let lnk = $(this).attr('value');// a value          
        $("conteudo").load(`scripts/partials/${lnk}.html`, 
        (response, status, xhr)=>{
            if(status == "error"){
                $("conteudo").load(`scripts/partials/404.html`)
            }
        });        
    });
    
    
}