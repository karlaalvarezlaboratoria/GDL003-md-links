const mdLinks = require("./index.js");
let filePath = process.argv[2];
let fileContent = mdLinks.readFile(filePath);

let readMdFile = (filePath, fileContent) =>{
   if (mdLinks.findMdExtension) {
    mdLinks.readFile; 
    mdLinks.findLinks;
     
  } 
};
console.log(mdLinks.findLinks(fileContent)[0]);


