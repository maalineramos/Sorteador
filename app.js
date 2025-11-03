function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // let numero = numAleatorio(de, ate);
    // alert(numero);     
    
    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumAleatorio(de,ate);    
        sorteados.push(numero);
    }
    alert(sorteados);
}

function obterNumAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 