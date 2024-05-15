import prompt from "prompt-sync";
let ler = prompt()

console.log('Exercício 11')

console.log('Informe a tabuada:')
let tabuada = Number(ler())

for (let i = 1; i <= 10; i++) {
    let resposta = tabuada * i
    console.log(`${tabuada} x ${i} = ${resposta}`)
}
