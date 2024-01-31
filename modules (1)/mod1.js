// const nome =  'Gabriel'
// const sobrenome = 'Ayres'

// function falaNome(nome, sobrenome)
// {
//     console.log(nome, sobrenome)
// }
// falaNome(nome, sobrenome)

// module.exports.nome = nome
// module.exports.sobrenome = sobrenome
// module.exports.falaNome = falaNome
// this.qualquerCoisa = 'O que eu quiser exportar'

// console.log(exports)

class Pessoa
{
    constructor(nome)
    {
        this.nome = nome
    }   
}

module.exports.nome = 'Roberto'
module.exports.Pessoa = Pessoa
