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
    let fileContent = fs.readFileSync(filePath).toString();
    return fileContent;
  },
 
//Función encuentra links y devuelve un array con 0-link entre paréntesis; 1-index; 2-input con texto; 3- groups undefined. 
  findLinks : (fileContent) => {
    let linkEquivalent = /\(\S+\)/gim; 
    let myArray = linkEquivalent.exec(fileContent);
    console.log(fileContent);
    console.log(myArray);
      return myArray;
    }, 
  };

//Función con matchAll no la identifica como función.
// Antes retornaba un array vacío.  
/*
  findLinks : (fileContent) => {
    let linkEquivalent = RegExp("/\[(\S+)\]\((\S+)\)/gim");
    let findedLinks = fileContent.matchAll(linkEquivalent);
    let links = Array.from(findedLinks, match => { 
      return {"name": match[1], "link": match[2]}
    });
    console.log(fileContent);
    console.log(linkEquivalent);
    console.log(findedLinks);
    console.log(links);
    
    return findedLinks;
    console.log(findLinks(fileContent));
  },  
};

*/

