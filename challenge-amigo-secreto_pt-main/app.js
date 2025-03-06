let listaAmigos = [];

function adicionarAmigo() {
    let nomeInserido = document.getElementById("amigo");
    let nomes = nomeInserido.value.trim().toLowerCase();

    if (nomes == '') {
        alert ('Insira um nome valido.');
        return;
    }
    
    if (listaAmigos.includes(nomes)) {
        alert ('Esse nome ja foi inserido');
        return;
    }
        
    listaAmigos.push(nomes); //puxa o nome inserido para a lista de amigos
    nomeInserido.value = ''; //apaga o campo apos colocar o nome

    atualizarLista();
}

function atualizarLista() {
    let listaAmostra = document.getElementById("listaDeAmigos");
    listaAmostra.innerHTML = listaAmigos.map(amigo => `<li>${amigo}</li>`).join('');
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert ('Lista vazia');
        return;
    }

    let numeroSorteado = Math.floor(Math.random() * listaAmigos.length); //sorteia um numero
    let nomeSorteado = listaAmigos[numeroSorteado]; //pega o nome colocado na lista atraves do numero correspondente
    document.getElementById("resultado").innerHTML = nomeSorteado;

    reiniciar();
}

function reiniciar() {
    listaAmigos = [];
    atualizarLista(); 
}