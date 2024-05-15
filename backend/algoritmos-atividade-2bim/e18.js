import prompt from "prompt-sync";
let ler = prompt()

console.log('Exercício 18')
console.log('Valores dos produtos:')

// Entrada
let valorCompraTotal = 0
let ultimoProduto = 0
let ultimoCancelado = false

let continuar = true
while (continuar) {
    let valorCompra = Number(ler())

    if (valorCompra == -1) {
        if (!ultimoCancelado) {
            valorCompraTotal -= ultimoProduto
            ultimoCancelado = true
        } else {
            console.log('Não pode cancelar novamente!')
        }
    } else if (valorCompra > 0) {
        valorCompraTotal += valorCompra
        ultimoCancelado = false
    }
    
    if (valorCompra == 0) {
        continuar = false
        console.log(`Valor total: R$ ${valorCompraTotal}`)
    } else {
        ultimoProduto = valorCompra
    }
}
