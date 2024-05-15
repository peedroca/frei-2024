import prompt from "prompt-sync";
let ler = prompt();

console.log('Exercício 17')

let escolha = 0
do {
    console.clear()
    console.log(`
1. Somar
2. Subtrair
3. Multiplicar
4. Dividir
5. Potência
6. Raiz quadrada
0. Sair
    `)

    console.log('Escolha uma opção:')
    escolha = Number(ler())

    console.clear()

    if (escolha == 1) {
        console.log('Soma')
        console.log('Informe dois números:')
        let n1 = Number(ler())
        let n2 = Number(ler())
        
        let resultado = n1 + n2;
        console.log(`Soma de ${n1} e ${n2} é`, resultado)
    } else if (escolha == 2) {
        console.log('Subtração')
        console.log('Informe dois números:')
        let n1 = Number(ler())
        let n2 = Number(ler())
        
        let resultado = n1 - n2;
        console.log(`Subtração de ${n1} por ${n2} é`, resultado)
    } else if (escolha == 3) {
        console.log('Multiplicação')
        console.log('Informe dois números:')
        let n1 = Number(ler())
        let n2 = Number(ler())
        
        let resultado = n1 * n2;
        console.log(`Multiplicação de ${n1} por ${n2} é`, resultado)
    } else if (escolha == 4) {
        console.log('Divisão')
        console.log('Informe dois números:')
        let n1 = Number(ler())
        let n2 = Number(ler())
        
        let resultado = n1 / n2;
        console.log(`Divisão de ${n1} por ${n2} é`, resultado)
    } else if (escolha == 5) {
        console.log('Potencia')
        console.log('Informe dois números:')
        let n1 = Number(ler())
        let n2 = Number(ler())
        
        let resultado = n1 ** n2;
        console.log(`Potencia de ${n1} por ${n2} é`, resultado)
    } else if (escolha == 6) {
        console.log('Raiz quadrada')
        console.log('Informe um números:')
        let n1 = Number(ler())
        
        let resultado = Math.sqrt(n1);
        console.log(`Raiz quadrada de ${n1} é`, resultado)
    }

    console.log('Pressione qualquer tecla para continuar')
    ler()
} while (escolha != 0)