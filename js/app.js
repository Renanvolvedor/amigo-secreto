//Array vazia que vai receber cada amigo.
let amigos = [];
//Pega os campos onde digita o nome do amigo e onde vai ser adicionado e onde vai aparecer os amigos sorteados.
let amigo = document.getElementById('nome-amigo');
let lista = document.getElementById('lista-amigos');
let sorteio = document.getElementById('lista-sorteio');

function adicionar() {
    //Condicional para se o nome for repetido.
    if (amigos.includes(amigo.value)) {
        alert(`O nome ${amigo.value} já foi adicionado.`);
        return;
    }
    //Condicional para se o campo estiver vazio.
    if (amigo.value == '') {
        alert('Digite o nome de um amigo.');
        return;
    } 
    //Adiciona o valor do campo amigo na lista de amigos.
    amigos.push(amigo.value);
    //Se a lista de amigos estiver vazia, adiciona o amigo.
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    //Se não, adiciona o que estava antes mais o amigo.
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    //Limpa o campo pra adicionar outro amigo.
    amigo.value = '';
}

function sortear () {
    //Condicional para número mínimos de amigos no sorteio.
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos.');
        return;
    }
    //Embaralha a ordem de amigos adicionados na array.
    embaralhar(amigos);
    //Esvazia o sorteio toda vez.
    sorteio.innerHTML = '';
    //Para cada vez que o 'i' for menor que a quantidade de elementos da lista, adiciona 1 ao 'i'.
    for (let i = 0; i < amigos.length; i++) {
        //Se o i for igual a quantidade de amigos na lista menos 1 (pois começa no 0).
        //Isso serve para o último elemento da lista também funcionar.
        if (i == amigos.length - 1) {
            //Pega o último elemento da lista e o coloca com o primeiro.
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br/>';
        } else {
            //Se não pega o elemento atual da lista e o coloca com o próximo.
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br/>';
        }
    }
}

function reiniciar() {
    amigo.value = '';
    lista.textContent = '';
    sorteio.innerHTML = '';
    amigos = [];
}

//Função pronta tirada da internet que embaralha os elementos de uma array.
function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}
