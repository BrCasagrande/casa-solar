
const init = () =>{
    createMenu();
    addItens();
}


const item = [ {"nome":"Home", "url":"#"},{"nome":"Simulador", "url":"#"}
,{"nome":"Produtos", "url":"#","itens":["1","vr"]}];

const createMenu = () =>{
    let menuPrincipal = $('nav-principal');    
let nav = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menuPrincipal" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                    
                <div class="collapse navbar-collapse" id="menuPrincipal">
                    <ul id ="menu-itens" class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Simulador</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Produtos</a>
                            <ul class="navbar-nav bg-dark menuShow">
                                <li class="nav-item">
                                    <a href="#" class="nav-link">Painéis Solares</a>
                                    <ul class="navbar-nav bg-dark menuShow">
                                        <li class="nav-item"><a href="#" class="nav-link">Até 95w</a></li>
                                        <li class="nav-item"><a href="#" class="nav-link">100w até 195w</a></li>
                                        <li class="nav-item"><a href="#" class="nav-link">200w até 295w</a></li>
                                        <li class="nav-item"><a href="#" class="nav-link">Aciam de 300w</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>                      
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>   `;
    menuPrincipal.append(nav);
}

const addItens = () =>{    
    item.forEach(n => {
    let it = `<li class="nav-item">
    <a class="nav-link" href="${n.url}">${n.nome}</a>        
    </li>`;
    $("#menu-itens").append(it);
    if(n.itens){
        let sub = `<ul class="navbar-nav bg-dark menuShow"></ul>`;
        
        n.itens.forEach(m =>{
            let subItem = `<li class="nav-item">
            <a href="#" class="nav-link">${m}</a></li>`;            
        });
        console.log(n);
    }
    
    });
}

init();
$("li").hover(function(){$(this).children('ul').css("display", "block")}
, function(){$(this).children('ul').css("display", "none")});