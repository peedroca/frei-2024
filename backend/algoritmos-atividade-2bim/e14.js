import prompt from "prompt-sync";
let ler = prompt()

console.log('Exercício 14')

console.log('Informe um número:')
let n = Number(ler())

let primo = true

if (n == 0 || n == 1) {
    primo = false
} else {
    for (let i = n-1; i > 1; i--) {
        if (n % i == 0) {
            primo = false
        }
    }
}

console.log(`É primo? ${primo}`)