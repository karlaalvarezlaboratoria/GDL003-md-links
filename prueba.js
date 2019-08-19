const mdLinks = require("./index.js");
let filePath = process.argv[2];

let readMdFile = (filePath) =>{
   if (mdLinks.findMdExtension) {
    mdLinks.readFile; 
    console.log(mdLinks.readFile(filePath));
  } 
};
readMdFile(filePath);


