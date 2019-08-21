const mdLinks = require("./index.js");
const directory = process.cwd();
let filePath = process.argv[2];
let fileContent = mdLinks.readFile(filePath);

let readMdFile = () =>{
   if (mdLinks.findMdExtension) { 
    mdLinks.findLinks(fileContent);   
  } 
   else {
     console.log("La ruta es incorrecta o no es un archivo .md");
   }
};
readMdFile();

//Muestra el directorio completo de la ruta relativa
//console.log(mdLinks.readDirectory(directory));

