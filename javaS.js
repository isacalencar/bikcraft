const links  = document.querySelectorAll('.header-menu a')

function ativarlink (link){
    
    const url = window.location.href
    const href = link.href
    //console.log(url)
    //console.log(link)
    if(url.includes(href)){
     link.classList.add('ativo')
    }
     

}

links.forEach(ativarlink) 


//ativar itens orçamento 

const parametros = new URLSearchParams(location.search)

function ativarPRODUTO (parametro) {
    const elemento = document.getElementById(parametro)
    console.log(elemento)
    if (elemento){elemento.checked = true}
}

parametros.forEach(ativarPRODUTO)


//perguntas frequentes questions frenquet

const perguntas = document.querySelectorAll(".perguntas-container button")

//console.log(perguntas)


function ativarPergunta(event){
    const pergunta = event.currentTarget
    const controls = pergunta.getAttribute('aria-controls')
    console.log(controls)
    const res = document.getElementById(controls)
    console.log(res)
    
    res.classList.toggle("ativa")
    const ativa =res.classList.contains("ativa")
    pergunta.setAttribute('aria-expanded' , ativa )
    console.log(pergunta)
}

function eventosPerguntas(pergunta) {
 pergunta.addEventListener('click',ativarPergunta)
}

perguntas.forEach(eventosPerguntas)

//galeria de bicicletas 

const galeria = document.querySelectorAll('.bicicletas-imagens img')
const galeriaContainer = document.querySelector('.bicicletas-imagens')




function trocaIMAGEM (event){
    const img = event.currentTarget
    galeriaContainer.prepend(img)
    
    const media = matchMedia('(min-width:1000px)')

    console.log(media)
}



function eventosGALERIA(img){
    img.addEventListener('click', trocaIMAGEM)
    
}


console.log(galeria ,galeriaContainer)
galeria.forEach(eventosGALERIA)

// simples animação 
if (window.SimpleAnime){
new SimpleAnime()
}
