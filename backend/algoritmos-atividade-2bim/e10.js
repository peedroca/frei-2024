import prompt from "prompt-sync";
let ler = prompt()

console.log('Exercício 10')

console.log('Informe a altura e peso:')
let altura = Number(ler())
let peso = Number(ler())

let imc = peso/(altura**2)
let classificacao = ''

if (imc >= 40) {
    classificacao = 'Obesidade grau III'
} else if (imc >= 35 && imc <= 39.9) {
    classificacao = 'Obesidade grau II'
} else if (imc >= 30 && imc <= 34.9) {
    classificacao = 'Obesidade grau I'
} else if (imc >= 25 && imc <= 29.9) {
    classificacao = 'Sobrepeso'
} else if (imc >= 18.5 && imc <= 24.9) {
    classificacao = 'Peso normal'
} else {
    classificacao = 'Abaixo do peso'
}

console.log(`IMC ${imc}`)
console.log(`Classificação ${classificacao}`)