
const recebeConstanteNumerica = (numero)=>{
    let constanteNumerica = numero
    if ((constanteNumerica % 2) === 0) {
        let resultado = `O número: ${numero} é par!`
        console.log(resultado)
        return resultado
    }
}

recebeConstanteNumerica(4)
recebeConstanteNumerica(3)
recebeConstanteNumerica(10)
recebeConstanteNumerica(1789)