import prompt from "prompt-sync";
let ler = prompt()

console.log('Exercício 16')

let sorteado = parseInt(Math.random() * 1000)
let acertou = false
for (let tentativas = 10; tentativas > 0; tentativas--) {
    console.log('Informe um númeor:')
    let n = Number(ler())

    if (n == sorteado) {
        acertou = true
        tentativas = 0
    } else {
        if (n > sorteado) {
            console.log('Tente um menor!')
        } else {
            console.log('Tente um maior!')
        }
    }
}

if (acertou) {
    console.log('Acertou!')
} else {
    console.log('Errou!')
}