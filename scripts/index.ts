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
    let nl = $('#menu-itens .nav-link'); 
    nl.click(function(){
        // seleciona o valor de 'a'para fazer o load da pagina
        let lnk = $(this); 
        $("conteudo").load(`scripts/partials/${lnk.attr('value')}.html`, 
        (response, status, xhr)=>{
            if(status == "error"){
                $("conteudo").load(`scripts/partials/404.html`)
            }            
            if(lnk.attr('value') == 'produtos'){pContent(); }
            $('h1').append(lnk.text());
        });         
    });    
}
let pContent = () =>{        
    let nl = $('#navProdutos .nav-link'); 
    nl.click(function(){
        // seleciona o valor de 'a'para fazer o load da pagina
        let lnk = $(this); 
        $("pcontent").load(`scripts/partials/${lnk.attr('value')}.html`, 
        (response, status, xhr)=>{
            if(status == "error"){
                $("pcontent").load(`scripts/partials/404.html`)
            }            
            $('#hp').text(lnk.text());
        });         
    });    
}
