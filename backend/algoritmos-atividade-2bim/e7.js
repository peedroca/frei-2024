import prompt from "prompt-sync";
let ler = prompt()

console.log('Exercício 7')

console.log('Informe as cores:')
let c1 = ler()
let c2 = ler()

let primaria = false
if (
    (c1 == 'vermelho' || c1 == 'amarelo' || c1 == 'azul')
    && (c2 == 'vermelho' || c2 == 'amarelo' || c2 == 'azul')
) {
    primaria = true
}

console.log(`Primaria? ${primaria}`)