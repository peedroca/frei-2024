import prompt from "prompt-sync";
let ler = prompt()

console.log('Exercício 8')

console.log('Informe as cores:')
let temperatura = Number(ler())

let situacao = ''

if (temperatura >= 41) {
    situacao = 'Hipetermia'
} else if (temperatura >= 39.6 && temperatura < 41) {
    situacao = 'Febre Alta'
} else if (temperatura >= 37.6 && temperatura < 39.6) {
    situacao = 'Febre'
} else if (temperatura >= 36 && temperatura < 37.6) {
    situacao = 'Normal'
} else {
    situacao = 'Hipotermia'
}

console.log(`A situação é ${situacao}`)