import prompt from "prompt-sync";
let ler = prompt()

console.log('Exercício 1')

console.log('Informe o valor e o cupom:')
let valorCompra = Number(ler())
let cupom = Number(ler())

let totalDesconto = valorCompra - cupom

console.log(`O total é ${totalDesconto}`)