const path = require('path');
const fs = require('fs');
const directory = process.cwd();
const filePath = process.argv[2];

//Misma función findMdExtension más corta (ternaria)
//module.exports = filePath => path.extname(filePath) === '.md';

//Objeto que contiene mis funciones como propiedades.
module.exports = {

  readDirectory : (directory) => {
    let files = fs.readdirSync(directory); 
    console.log(files);
    return files;
    console.log(directory);
},
    
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
    let fileContent = fs.readFileSync(filePath).toString();
    return fileContent;
  },
 
//Función encuentra links y devuelve un array con 0-link entre paréntesis; 1-index; 2-input con texto; 3- groups undefined. 
  findLinks : (fileContent) => {
    let linkEquivalent = new RegExp(/https?:\S+\w/g); 
    let myArray = fileContent.match(linkEquivalent);
    console.log(myArray.length);
    console.log(myArray);
      return myArray;
    }, 
  };




