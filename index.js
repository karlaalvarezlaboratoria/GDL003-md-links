const path = require('path');
const fs = require('fs');
const directory = process.cwd();
const filePath = process.argv[2];
const url = require('url');
const fetch = require ( 'node-fetch' ) ; 

//Objeto que contiene mis funciones como propiedades.
module.exports = {

//Función lee el directorio en la ruta relativa.  
  readDirectory : (directory) => fs.readdirSync(directory), 
  
//Función retorna true si el archivo tiene una extensión .md
  checkIfMD : filePath => path.extname(filePath) === '.md',
  
//Función lee archivo desde terminal.
  readFile : (filePath) => fs.readFileSync(filePath).toString(),
 
//Función encuentra links y devuelve un array con todos los links 
  findLinks : (fileContent) => {
    const linkEquivalent = new RegExp(/https?:\S+\w/g); 
    const linksArray = fileContent.match(linkEquivalent);
      return linksArray;
    }, 
//En algún punto esto validará links    
    validateLinks : (linksArray) => {
      
      return new Promise((resolve, reject) => {
         fetch(linksArray) 
          .then((response) => {
            //console.log(response.status); 
              resolve(response);
          }).catch((err) => {
          //  console.log(err.message)
          //  reject(err)
          })
        })
      },      
};