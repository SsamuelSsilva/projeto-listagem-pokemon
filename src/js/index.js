/*
Para trocar para o modo escuro
1 - Pegar no JS o elemento HTML correspondente ao botão de troca de tema;
2 - Dar um jeito de pegar no JS o elemento HTML correspondete ao body;
3 - Dar um jeito de identificar o clique do usuário no botão de troca de tema;
4 - Adcionar a classe modo_escuro no body;
5 - Trocar a imagem do botão de alterar tema para lua;


Desfazer a troca
6 - Verificar se o body já tem a classe modo_escuro
7 - Remover a classe do modo_escuro do body;
8 - Trocar a imagem do botão de alterar imagem para o Sol.
*/

// Passo 1
let botaoAlterarTema = document.getElementById('botao_alterar_tema')

// Passo 2
const body = document.querySelector('body')

const imagemBotaoAlterarTema = document.querySelector('.imagem_botao')

// Passo 3
botaoAlterarTema.addEventListener('click', () => {
    // Destrocar o modo_escuro
    //Passo 6
    const modoEscuroAtivo = body.classList.contains('modo_escuro') // está vendo se a classe do body é tem o modo_escuro (Retorna True caso possua ou retorna False caso não tenha)

    body.classList.toggle('modo_escuro') // Alterna entre colocar ou tirar a classe modo_escuro

    if (modoEscuroAtivo){
        // Passo 7
        /*body.classList.remove('modo_escuro') // Remove a classe modo_escuro do body*/
        
        // Passo 8
        imagemBotaoAlterarTema.setAttribute('src', './src/imagens/sun.png') // Substitui a Lua pelo Sol

        
    }else{
        //Código que vai ser executado quando clicar no botão
    // Passo 4
    /*body.classList.add('modo_escuro') //classList = mostra as classes que tem no body
    // O add está adicionando a classe modo_escuro no body*/

    // Passo 5
    imagemBotaoAlterarTema.setAttribute('src', './src/imagens/moon.png') // põe um atributo novo, ou substitui, na imagem. O primeiro parametro é o que queremos mudar e o segundo é o que vai ser colocado. Nesse caso o parametro é o src e o que vai ser colocado é a imagem da lua
    } 
}) 
