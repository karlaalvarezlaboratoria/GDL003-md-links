const path = require('path');
const fs = require('fs');
const parametro = process.argv;

//Misma función findMdExtension más corta (ternaria)
//module.exports = filePath => path.extname(filePath) === '.md';

//Objeto que contiene mis funciones como propiedades.
module.exports = {
    
//Función retorna true si el archivo tiene una extensión .md
  findMdExtension : (filePath) =>{
    if (path.extname(filePath) === '.md'){
      return true;
    }
    else {
      return false;
    }
  },
  
//Función lee archivo desde terminal.
  readFile : (filePath) =>{
    let show = fs.readFileSync(filePath);
    return show.toString();
  },
};
  
  


