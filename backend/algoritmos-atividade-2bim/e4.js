import prompt from "prompt-sync";
let ler = prompt()

console.log('Exercício 4')

console.log('Informe o nome do livro, total de páginas e tempo que leva para ler:')
let nome = ler()
let paginas = Number(ler())
let tempoSegundos = Number(ler())

let horasParaLer = (paginas * tempoSegundos) / 3600

console.log(`Você lerá ${nome} em ${horasParaLer.toFixed(2)} horas`)