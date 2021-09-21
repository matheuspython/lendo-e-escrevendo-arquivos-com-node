const fs = require("fs").promises
const path = require("path")
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt')

  

fs.writeFile(caminhoArquivo,'frase \n', {flag: 'a', encoding: 'utf-8'})
//a flag w apaga tudo que esta no arquivo caso ele ja exista
//caso vc queira fazer um "append" utilize a flag:'a'