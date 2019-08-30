const path = require('path');
const fs = require('fs');
const directory = process.cwd();
const filePath = process.argv[2];
const url = require('url');
const fetch = require ( 'node-fetch' ) ; 
const marked = require ('marked');
let linksArray = [];

//Objeto que contiene mis funciones como propiedades.
module.exports = {

//Función lee el directorio en la ruta relativa.  
  readDirectory : (directory) => fs.readdirSync(directory), 
  
//Función retorna true si el archivo tiene una extensión .md
  checkIfMD : filePath => path.extname(filePath) === '.md',
  
//Función lee archivo desde terminal.
  readFile : (filePath) => fs.readFileSync(filePath).toString(),
 
//Función encuentra links y devuelve un array con todos los links 
     findLinks: (fileContent) => {
        const pony = new marked.Renderer();
        pony.link = (href, title, text) =>{
        linksArray.push({
            file : directory+"/"+filePath ,
            href : href ,
            text: text                
          });
        }
          marked(fileContent, { renderer: pony});
          return linksArray;   
        },
       
         
       
           
  // findLinks : (fileContent) => {
  //   const textEquivalent =(/\[(.+)\]/gim);
  //   const linkEquivalent =(/https?:\S+\w/g); 
  //   const textFind = fileContent.match(textEquivalent);
  //   const linksFind = fileContent.match(linkEquivalent);
  //   //console.log(textFind);
  //   //console.log(linksFind);
  //    const linksArray = Array.concat(fileContent, match => {
  //      //console.log(linksFind);
  //     // console.log(match[10]);
  //      return { "file": directory+`/`+filePath, "text": textFind, "href": linksFind}
  // 
  //    })
  // 
  // 
  //     console.log(linksArray);  
  //    return linksArray;
  //   }, 
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