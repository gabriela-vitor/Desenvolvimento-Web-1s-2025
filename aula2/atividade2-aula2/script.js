
let contador = 0;

function incrementar(){
    contador++;
    //getelementbyid obtem o html a partir do ID
    //innetext retorna o conteudo textual
    document.getElementById('counterValue').innerText = contador;
    
}

function decrementar(){
    if(contador === 0){
        alert("O contador já está em 0 !!!");
    }else{
        contador--;
        document.getElementById('counterValue').innerText = contador;
    }
}

//onclick executa uma funcao qnd e clicado
document.getElementById('botaoIncrementar').onclick = incrementar;
document.getElementById('botaoDecrementar').onclick = decrementar;


//event - evento do teclado
function adicionarTexto(event){
    //verifica se apertou o enter
    if(event.key === 'Enter'){
        const texto = document.getElementById('campoTexto').value;
        //impede msg vazias
        if(texto.trim() !== ''){
            const paragrafo = document.createElement('p');
            paragrafo.textContent = texto;
            document.getElementById('mensagemTexto').appendChild(paragrafo);
        }
        document.getElementById('campoTexto').value = '';
    }
}

document.getElementById('campoTexto').addEventListener('keydown', adicionarTexto);



function contarCaracteres(){
    const texto = document.getElementById('inputTexto').value;
    //remove todos os espacos
    const textoSemEspaco = texto.replace(/\s+/g, '');
    //mede o comprimento do texto sem os espaços
    const quantidadeCaracteres = textoSemEspaco.length;
    document.getElementById('contadorCaracteres').innerText = quantidadeCaracteres + ' caracteres';
}

document.getElementById('inputTexto').addEventListener('input', contarCaracteres);


function lista(){
    const listaEscolhida = document.getElementById('listaEscolhida').value;
    const listaContainer = document.getElementById('listaContainer');
    listaContainer.innerHTML = ''; //limpa a lista anterior

    let lista;

    if(listaEscolhida === 'opcao1'){
        lista = document.createElement('ol');
    }else{
        lista = document.createElement('ul');
    }

    //adicionar 1,2,3 na lista
    for(let i = 1; i <= 3; i++){
        const item = document.createElement('li'); //cria uma lista
        item.textContent = `Item ${i}` //texto
        lista.appendChild(item); //adicionar item a lista
    }

    listaContainer.appendChild(lista); //adiciona  lista
}

document.getElementById('botao2').addEventListener('click', lista);



function resetarTudo() {
    contador = 0;
    document.getElementById('counterValue').innerText = contador;

    
    document.getElementById('campoTexto').value = '';

   
    document.getElementById('mensagemTexto').innerHTML = '';

    
    document.getElementById('inputTexto').value = '';
    document.getElementById('contadorCaracteres').innerText = '0 caracteres';

   
    document.getElementById('listaContainer').innerHTML = '';
}


document.getElementById('resetar').addEventListener('click', resetarTudo);


