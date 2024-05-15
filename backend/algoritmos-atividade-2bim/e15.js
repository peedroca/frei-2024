import prompt from "prompt-sync";
let ler = prompt()

console.log('Exercício 14')

let nomeAntigo = ''
let idadeAntigo = 0
let sexoAntigo = ''

let nomePessoaMaisVelha = ''
let nomeMulherMaisJovem = ''
let mediaIdade = 0
let quantosHomensMais30 = 0
let mulheresMenos18 = 0

let continuar = true
while (continuar) {
    console.log('Informe o nome a idade e sexo:')
    let nomeAtual = ler()
    let idadeAtual = Number(ler())
    let sexoAtual = ler()

    // Quem é mais velho?
    if (idadeAtual > idadeAntigo) {
        nomePessoaMaisVelha = nomeAtual
    } else {
        nomePessoaMaisVelha = nomeAntigo
    }

    // Mulher mais jovem
    if (sexoAtual == 'm' && sexoAntigo == 'm') {
        if (idadeAtual > idadeAntigo) {
            nomeMulherMaisJovem = nomeAntigo
        } else {
            nomeMulherMaisJovem = nomeAtual
        }
    } else if (sexoAtual == 'm') {
        nomeMulherMaisJovem = nomeAtual
    } else if (sexoAntigo == 'm') {
        nomeMulherMaisJovem = nomeAntigo
    }

    // Media de idade
    mediaIdade = (idadeAtual + idadeAntigo) / 2

    // Homens +30
    if (sexoAtual == 'h' && idadeAtual > 30) {
        quantosHomensMais30++;
    }
    if (sexoAntigo == 'h' && idadeAntigo > 30) {
        quantosHomensMais30++;
    }

    // Mulheres -18
    if (sexoAtual == 'm' && idadeAtual < 18) {
        mulheresMenos18++;
    }
    if (sexoAntigo == 'm' && idadeAntigo < 18) {
        mulheresMenos18++;
    }

    console.log(`nomePessoaMaisVelha: ${nomePessoaMaisVelha}`)
    console.log(`nomeMulherMaisJovem: ${nomeMulherMaisJovem}`)
    console.log(`mediaIdade: ${mediaIdade}`)
    console.log(`quantosHomensMais30: ${quantosHomensMais30}`)
    console.log(`mulheresMenos18: ${mulheresMenos18}`)

    console.log('Quer continuar?')
    if (ler() == 'n') {
        continuar = false
    } else {
        nomeAntigo = nomeAtual
        idadeAntigo = idadeAtual
        sexoAntigo = sexoAtual

        nomePessoaMaisVelha = ''
        nomeMulherMaisJovem = ''
        mediaIdade = 0
        quantosHomensMais30 = 0
        mulheresMenos18 = 0
    }
}
