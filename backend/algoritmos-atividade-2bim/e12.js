import prompt from "prompt-sync";
let ler = prompt()

console.log('Exercício 12')

let notaTotal = 0
for (let qtdNotas = 3; qtdNotas > 0;) {
    console.log('Informe a nota:')
    let nota = Number(ler())

    if (nota > 10 || nota < 0) {
        console.log('Nota inválida!')
    } else {
        notaTotal += nota
        qtdNotas--
    }
}

let media = notaTotal / 3
console.log(`A média é ${media}`)
