let amigos = [];

function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value;

    if (nomeAmigo.trim() === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nomeAmigo);

    document.getElementById('amigo').value = '';

    exibirListaAmigos();
};

function exibirListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(function (amigo) {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
};

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear.');
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    exibirResultado(amigoSorteado);
};

function exibirResultado(amigoSorteado) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const li = document.createElement('li');
    li.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
    resultado.appendChild(li);
};

