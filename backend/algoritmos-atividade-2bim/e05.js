import prompt from "prompt-sync";
let ler = prompt()

console.log('Exercício 5')

console.log('Informe as 3 notas:')
let nota1 = Number(ler())
let nota2 = Number(ler())
let nota3 = Number(ler())

let media = (nota1 + nota2 + nota3) / 3
let passou = false

if (media >= 6) { passou = true }

console.log(`Média ${media}`)
console.log(`Passou? ${passou}`)