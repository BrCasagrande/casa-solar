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
//Produtos.html
let pContent = () =>{        
    let nl = $('#navProdutos .nav-link'); 
    nl.click(function(){
        // seleciona o valor de 'a'para fazer o load da pagina
        let lnk = $(this); 
        $.post('scripts/partials/produtos.json', (data, status)=>{    
            let produto;
            let tec; 
            //Seleciona o texto de produtos.json
            if( lnk.attr('value') == 'paineis'){
                produto = data.paineis[0];                
                tec = data.paineis[0].tec[0];
            } else if( lnk.attr('value') == 'baterias'){
                produto = data.baterias[0];  
                tec = data.baterias[0].tec[0];              
            } else if( lnk.attr('value') == 'telhas'){
                produto = data.telhas[0];  
                tec = data.telhas[0].tec[0];              
            }  else if( lnk.attr('value') == 'inversores'){
                produto = data.inversores[0];  
                tec = data.inversores[0].tec[0];             
            }    
            let cont = `<img src="${produto.imgPrincipal}" class="img-fluid w-100">
            <div class="text-center">
                <div class="container m-5">
                        <h2>${produto.tituloPrincipal}</h2>
                        <p>${produto.textoPrincipal}</p>
                </div>
                ${insertItem(produto.colunas)}                  
                <div class="row m-0 bg-dark text-light">                    
                    <div class="col-lg-8 p-4">
                        <img class="w-100" src="${tec.img}">
                    </div>
                    <div class="col-lg-4">
                        <div class="p-3">        
                            <h2>Informações Técnicas</h2>                    
                            ${insertText(tec.info)}
                        </div>
                    </div>
                </div>      
            </div>`;            
            $('pContent').html(cont);            
        });           
        $('#hp').text(lnk.text());           
    });    
}

const insertText = item =>{
    let result = "";
    for(let i in item){
        result += `<p>${item[i]}</p>`
    }
    return result;
}
const insertItem = item =>{
    let result = "";
    let posicao = "order-last";
    for(let i in item){
        if(posicao == ""){ posicao = "order-last" } else{posicao = ""}
        result += `
        <div class="row m-0">
            <div class="col-lg-6 bk ${posicao}">
                <div class="painelT p-5">
                    <h4>${item[i].titulo}</h4>
                    <p>${item[i].texto}</p>
                </div>
            </div>
            <div class="col-lg-6">
                <img class="img-fluid w-100" src="${item[i].img}">
            </div>
        </div>`
    }
    return result;
}//Produtos.html end