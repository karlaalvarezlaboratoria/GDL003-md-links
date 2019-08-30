const mdLinks = require("./index.js");
const directory = process.cwd();
let filePath = process.argv[2];
let fileContent = mdLinks.readFile(filePath);
let linksArray = mdLinks.findLinks(fileContent);
const fetch = require ( 'node-fetch' ) ; 

//Muestra el directorio completo de la ruta relativa
//console.log(mdLinks.readDirectory(directory));

let readMdFile = () =>{
   if (mdLinks.checkIfMD) { 
//    console.log(mdLinks.readFile(filePath));
//    console.log(mdLinks.findLinks(fileContent));
    console.log(mdLinks.findLinks(fileContent).length);     
  } 
  //En efecto si no es .md no ejecuta correctamente, pero
  //tampoco muestra console.log
   else {
  //   console.log("La ruta es incorrecta o no es un archivo .md");
   }
};
readMdFile();

const objStatistics = {
  ok : 0,
  notFound: 0,
  lost : 0,
  invisibleTotal : 0,
  total : 0,
};

const showStatistics = () => {
  setTimeout(() => {
    console.log(objStatistics);
  }, 3100)
};


let validateAllLinks = (link, i) =>{
  
  linksArray.forEach((link) => { 
  //  console.log(link); 
    mdLinks.validateLinks(link).then((objData) => {
    //  console.log();
      if( objData.status == 200){
      //  console.log("(Link funciona, status: " + objData.textStatus + " clave: " + objData.status + ", URL: " + link + ")");
        objStatistics.ok++;
        objStatistics.invisibleTotal++;
        objStatistics.total++;
      }
      else{
      //console.log("(No funciona, status: " + objData.textStatus + " clave: " + objData.status + ", URL: " + link + ")");
      objStatistics.notFound++;
      objStatistics.invisibleTotal++;
      objStatistics.total++;
      }
      // for (var i=0;i<linksArray.length ;i++)   {
      //       if (i == (linkArray.length -1) ) {
      objStatistics.lost == mdLinks.findLinks(fileContent).length - objStatistics.total;
      objStatistics.lost = mdLinks.findLinks(fileContent).length - objStatistics.invisibleTotal;
      objStatistics.total= objStatistics.invisibleTotal + objStatistics.lost;
      showStatistics()
      // console.log(objStatistics);
    //   }
    // }  
})  
})
}
validateAllLinks();
