import prompt from "prompt-sync";
let ler = prompt()

console.log('Exercício 3')

console.log('Informe a quantidade dos tamanhos pequeno, médio e grande:')
let pequeno = Number(ler())
let medio = Number(ler())
let grande = Number(ler())

let valorAPagar = (pequeno * 13.5) + (medio * 15) + (grande * 17.5)

console.log(`Total à pagar: ${valorAPagar}`)