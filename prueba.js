const mdLinks = require("./index.js");
const directory = process.cwd();
let filePath = process.argv[2];
let fileContent = mdLinks.readFile(filePath);

let readMdFile = (filePath, fileContent) =>{
   if (mdLinks.findMdExtension) {
    mdLinks.readFile; 
    mdLinks.findLinks;
     
  } 
};

console.log(mdLinks.findLinks(fileContent)[0]);

//Muestra el directorio completo de la ruta relativa
//console.log(mdLinks.readDirectory(directory));

