const path = require('path')
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')

const caminhoArquivo = path.resolve(__dirname,'teste.json')

// const pessoas = [
//     {nome: 'João'},
//     {nome: 'Maria'},
//     {nome: 'Eduardo'},
//     {nome: 'Gabriel'}
// ]

// const json = JSON.stringify(pessoas, '', 2)
// escreve(caminhoArquivo, json)
async function leArquivo(caminho)
{
    const dados = await ler(caminho)
    renderizaDados(dados)
}

function renderizaDados(dados)
{
    dados = JSON.parse(dados)
    
    dados.forEach(element => {
        console.log(element)
    });
}
leArquivo(caminhoArquivo)