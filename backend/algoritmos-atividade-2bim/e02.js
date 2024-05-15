import prompt from "prompt-sync";
let ler = prompt()

console.log('Exercício 2')

console.log('Informe o peso em kilos:')
let kilos = Number(ler())

let gramas = kilos * 1000
console.log(gramas)
