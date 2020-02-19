import { readdir } from 'fs';

// Para listar arquivos em uma pasta usamos o método 
// fs.readdir(caminhoParaAPasta, callback)
const path: string = "../textos"
 
const directoryPath = path.join(__dirname, "files")
 
readdir(directoryPath, function(err, files) {
  if (err) {
    console.log("Erro ao buscar informações.")
  } else {
    files.forEach(function(file) {
      console.log(file)
    })
  }
})