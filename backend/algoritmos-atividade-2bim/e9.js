import prompt from "prompt-sync";
let ler = prompt()

console.log('Exercício 9')

console.log('Informe o peso:')
let peso = Number(ler())
let totalAPagar = 0

let preco = 3.5
if (peso >= 1000) {
    preco -= 0.5
}

totalAPagar = (preco * peso) / 100

console.log(`Total a pagar: ${totalAPagar}`)