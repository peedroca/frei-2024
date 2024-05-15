import prompt from "prompt-sync";
let ler = prompt()

console.log('Exercício 6')

console.log('Informe o salário, bonus, desconto:')
let salario = Number(ler())
let bonus = Number(ler())
let desconto = Number(ler())

let aumento = salario * (bonus / 100)
let salarioLiquido = salario + aumento - desconto

console.log(`Salário novo ${salarioLiquido}`)
