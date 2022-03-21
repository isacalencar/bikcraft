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

console.log(perguntas)


function ativarPergunta(event){
    const pergunta = event.currentTarget
    const controls = pergunta.getAttribute('arial-controls')
    const res = document.getElementById(controls)


    res.classList.toggle("ativa")
    console.log('res')
}

function eventosPerguntas(pergunta) {
 pergunta.addEventListener('click',ativarPergunta)
}

perguntas.forEach(eventosPerguntas)

