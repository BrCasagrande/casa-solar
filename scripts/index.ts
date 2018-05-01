$(document).ready(() =>{
    createPage(); 
    carragaAjax();
    $("conteudo").load(`scripts/partials/home.html`);
});

let carragaAjax = () =>{
    $.post('scripts/partials/nav.html', (data, status)=>{         
        loadContent();                    
        if( $('nav').length == 0){//Prevent err
            carragaAjax();
        }     
    }); 
}
/* Adiciona o navegador a página */
const createPage = () =>{
    $('nav-principal').load('scripts/partials/nav.html'); 
    $('footer').load(`scripts/partials/footer.html`);
 }
/* Carrega o conteudo com base no value do elemento a */
let loadContent = () =>{                      
    $('#menu-itens a').click(function(){
        // seleciona o valor de 'a'para fazer o load da pagina
        let lnk = $(this).attr('value'); 
        $("conteudo").load(`scripts/partials/${lnk}.html`, 
        (response, status, xhr)=>{
            if(status == "error"){
                $("conteudo").load(`scripts/partials/404.html`)
            }
        }); 
        if(lnk == 'produtos'){
            $('#navProdutos h1').append(lnk);
            console.log("Foi");
        }    
    });    
}