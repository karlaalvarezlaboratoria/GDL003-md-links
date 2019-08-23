const mdLinks = require("./index.js");
const directory = process.cwd();
let filePath = process.argv[2];
let fileContent = mdLinks.readFile(filePath);
let linksArray = mdLinks.findLinks(fileContent);
const fetch = require ( 'node-fetch' ) ; 

//Muestra el directorio completo de la ruta relativa
console.log(mdLinks.readDirectory(directory));

let readMdFile = () =>{
   if (mdLinks.checkIfMD) { 
    console.log(mdLinks.readFile(filePath));
    console.log(mdLinks.findLinks(fileContent));
    console.log(mdLinks.findLinks(fileContent).length);     
  } 
  //En efecto si no es .md no ejecuta correctamente, pero
  //tampoco muestra console.log
   else {
  //   console.log("La ruta es incorrecta o no es un archivo .md");
   }
};
readMdFile();

let validateAllLinks = () =>{
  
  linksArray.forEach((link) => { 
    console.log(link); 
    mdLinks.validateLinks(link).then((objData) => {
      console.log();
      if( objData.status == 200){
        console.log("Link funciona");
      }
      else{
        console.log("No funciona");
      }
    })  
})
  
  
}
validateAllLinks();