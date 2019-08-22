const path = require('path');
const fs = require('fs');
const directory = process.cwd();
const filePath = process.argv[2];
const url = require('url');

//Objeto que contiene mis funciones como propiedades.
module.exports = {
  readDirectory : (directory) => fs.readdirSync(directory), 
  
//Función retorna true si el archivo tiene una extensión .md
  checkIfMD : filePath => path.extname(filePath) === '.md',
  
//Función lee archivo desde terminal.
  readFile : (filePath) => fs.readFileSync(filePath).toString(),
 
//Función encuentra links y devuelve un array con todos los links 
  findLinks : (fileContent) => {
    const linkEquivalent = new RegExp(/https?:\S+\w/g); 
    const linksArray = fileContent.match(linkEquivalent);
    console.log(linksArray.length);
    console.log(linksArray);
      return linksArray;
    }, 
    
    validateLinks : (myArray) => {
      console.log("Esto validará links");
    },
  };




