const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Número Secreto:', numeroSecreto)

const elementMenorValor = document.getElementById('menor-valor')
elementMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor