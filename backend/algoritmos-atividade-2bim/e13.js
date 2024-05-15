import prompt from "prompt-sync";
let ler = prompt()

console.log('Exercício 13')

console.log('Informe os números:')
let somaPositivos = 0
let qtdNegativos = 0

let continuar = true
while (continuar) {
    let n = Number(ler())
    if (n == 0) {
        continuar = false
    } else {
        if (n > 0) {
            somaPositivos = somaPositivos + n
        } else {
            qtdNegativos = qtdNegativos + 1
        }
    }
}

console.log('Positivos:', somaPositivos)
console.log('Qtd Negativos:', qtdNegativos)