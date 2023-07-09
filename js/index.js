/*evitar comentarios pega os personagens pequenos e mostra ao lado maior e coloca o nome e descricao do personagem*/
//comentario em linha
//console.log(document.getElementById('ciclope'))
//const itemCiclope = document.getElementById('ciclope');
//console.log(itemCiclope);

const personagens = document.querySelectorAll('.personagem');//queryAll busca uma lista
personagens.forEach(personagem =>{
    personagem.addEventListener('mouseenter',()=>{
//usar no  celular par ter movimento suavizado
        if(window.innerWidth < 450){
            window.scrollTo({top: 0,behavior:'smooth'})
        }
        personagemSelecionado(personagem);
        //console.log(personagem.classList)
        //console.log('mouse entrou na li')
        imagemPersonagemSelecionado(personagem);
//muda o nome do personagem na imagem grande
        nomePersonagemSelecionado(personagem);
//muda a descricao do personagem grande
const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-texto');
})
})

function nomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function imagemPersonagemSelecionado(personagem) {
    const personagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    personagemGrande.src = `./imagens/card-${idPersonagem}.png`;
}

function personagemSelecionado(personagem) {
    const personagemSelecionado = document.querySelector('.selecionado');
    //remove a selecao do personagem o fundo         
    personagemSelecionado.classList.remove('selecionado');
    //adiciona a classe ao personagem selecionado
    personagem.classList.add('selecionado');
}
/*personagens.addEventListener('click',()=>{
    console.log('clicou');
})*/