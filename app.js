const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json')

const escreve = require('./modules/escrever')
const ler = require('./modules/ler')

const pessoas = [
  {nome: 'joão'},
  {nome: 'maria'},
  {nome: 'eduardo'},
  {nome: 'luiza'}
]
const json = JSON.stringify(pessoas,'',2)//converte o obj em json

escreve(caminhoArquivo, json)

async function leArquivo(caminho){
  const dadoArquivo= await ler(caminho)
   renderizaDados(dadoArquivo)
}

function renderizaDados(dados){
  dados = JSON.parse(dados)//transforma o json em obj novamente
  dados.forEach(val => console.log(val))

}
leArquivo(caminhoArquivo)