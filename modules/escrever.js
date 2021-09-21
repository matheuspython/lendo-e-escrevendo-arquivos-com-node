const fs = require("fs").promises

module.exports = (caminho, dados) =>{
  fs.writeFile(caminho,dados, {flag: 'w', encoding: 'utf-8'})

}




//a flag w apaga tudo que esta no arquivo caso ele ja exista
//caso vc queira fazer um "append" utilize a flag:'a'