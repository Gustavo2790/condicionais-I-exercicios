
const recebeNacionalidade = ()=>{
    const nacionalidade = prompt('Escreva aqui sua nacionalidade:')
    const nacionalidadeMinuscula = nacionalidade.toLowerCase()
    if (nacionalidadeMinuscula === "brasileira"){
        console.log(`A nacionalidade é: ${nacionalidadeMinuscula}`)
    } else if (nacionalidadeMinuscula === "argentina"){
        console.log(`A nacionalidade é: ${nacionalidadeMinuscula}`)
    } else if (nacionalidadeMinuscula === "uruguaia"){
        console.log(`A nacionalidade é: ${nacionalidadeMinuscula}`)
    } else if (nacionalidadeMinuscula === "chilena"){
        console.log(`A nacionalidade é: ${nacionalidadeMinuscula}`)
    } else if (nacionalidadeMinuscula === "colombiana"){
        console.log(`A nacionalidade é: ${nacionalidadeMinuscula}`)
    } else {
        console.log(`A nacionalidade não foi encontrada.`)
    }

}

recebeNacionalidade()