/*
const recebeValores = (idade, ensMedio, faculdade)=>{
    if (idade >= 18) {
        console.log(`A pessoa é maior de idade`)
    } else {
        console.log(`A pessoa é menor de idade`)
    }

    if (ensMedio === true) {
        console.log(`A pessoa terminou o Ensino Médio`)
    } else {
        console.log(`A pessoa não terminou o Ensino Médio`)
    }

    if (faculdade === true) {
        console.log(`A pessoa está cursando uma faculdade`)
    } else {
        console.log(`A pessoa não está cursando uma faculdade`)
    }

}

recebeValores(15, true, false)
recebeValores(13, false, false)
recebeValores(27, true, true)
recebeValores(30, true, false)
*/


const recebeValores = ()=>{
    let idade = Number(prompt('Qual a sua idade?'))
    let ensMedio = prompt('Você terminou o Ensino Médio? (responda "sim" ou "não")')
    let faculdade = prompt('Você faz faculdade? (responda "sim" ou "não")')
       
    if (idade >= 18) {
        console.log(`A pessoa é maior de idade`)
    } else {
        console.log(`A pessoa é menor de idade`)
    }

    if (ensMedio === "sim") {
        console.log(`A pessoa terminou o Ensino Médio`)
    } else {
        console.log(`A pessoa não terminou o Ensino Médio`)
    }

    if (faculdade === "sim") {
        console.log(`A pessoa está cursando uma faculdade`)
    } else {
        console.log(`A pessoa não está cursando uma faculdade`)
    }

}

recebeValores()
