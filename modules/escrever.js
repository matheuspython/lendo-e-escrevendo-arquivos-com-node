const fs = require("fs").promises
const path = require("path")
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json')

const pessoas = [
  {nome: 'joão'},
  {nome: 'maria'},
  {nome: 'eduardo'},
  {nome: 'luiza'}
]
const json = JSON.stringify(pessoas,'',2)//converte o obj em json



fs.writeFile(caminhoArquivo,json, {flag: 'a', encoding: 'utf-8'})
//a flag w apaga tudo que esta no arquivo caso ele ja exista
//caso vc queira fazer um "append" utilize a flag:'a'