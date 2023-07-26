/*
O que precisamos fazer? - Quando passar o mouse em cima da profissão na lista temos que adicionar a borda azul de seleção na imagem pequena e mostrar a imagem, o nome e o texto grande do personagem que está selecionado.

    OBJETIVO 1 - quando passar o mouse em cima do profissão na listagem, devemos selecioná-lo.

        passo 1 - pegar as profissões no JS para poder verificar quando o usuário passar o mouse em cima de um deles

        passo 2 - adicionar a classe selecionada no personagem que o usuário passar o cursor do mouse

        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele

    OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande

        passo 1 - pegar o elemento do personagem grande para adicionar as informações nele
        passo 2 - alterar a imagem do personagem grande
        passo 3 - alterar o nome do personagem grande
        passo 4 - alterar a descrição do personagem grande

*/

// OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo

//      passo 1 - pegar os personagens no JS para poder verificar quando o usuário passar o mouse em cima de um deles 

const profissao = document.querySelectorAll('.profissao');

//passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
profissao.forEach((profissao) => {
    profissao.addEventListener('mouseenter', () => {
       
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior:'smooth'});
        }

       //passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 
        removerSelecaoDaProfissao();

        profissao.classList.add('selecionada');

        //OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande

        //passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele

        alterarImagemProfissaoSelecionada(profissao);

        //passo 3 - alterar o nome do personagem grande

        alterarNomeProfissaoSelecionada(profissao);

        //passo 4 - alterar a descrição do personagem grande
        alterarDescricaoProfissaoSelecionada(profissao);

    })
})



function alterarDescricaoProfissaoSelecionada(profissao) {
    const descricaoProfissao = document.getElementById('descricao-profissao');
    descricaoProfissao.innerText = profissao.getAttribute('data-description');
}

function alterarNomeProfissaoSelecionada(profissao) {
    const nomeProfissao = document.getElementById('nome-profissao');
    nomeProfissao.innerText = profissao.getAttribute('data-name');
}

function alterarImagemProfissaoSelecionada(profissao) {
    const imagemProfissaoGrande = document.querySelector('.profissao-grande');

    //passo 2 - alterar a imagem do personagem grande
    const idProfissao = profissao.attributes.id.value;
    imagemProfissaoGrande.src = `/SRC/Imagens/card-${idProfissao}.png`;
}

function removerSelecaoDaProfissao() {
    const profissaoSelecionada = document.querySelector('.selecionada');
    profissaoSelecionada.classList.remove('selecionada');
}
