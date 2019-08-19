
const fs = require('fs');
const path = require('path');
const parametro = process.argv;

let filePath = "";

const arrayLenght= () =>{
  for (let i = 2; i < parametro.length; i++){
    filePath += (parametro[i]);
    return filePath;
}
};
arrayLenght();

let extension = path.extname(filePath);
console.log(extension);

let read = (filePath) =>{
  let show = fs.readFileSync(filePath);
  return show.toString();
};



console.log(read(filePath));



/*
let extension= (data) => {

  if (path.extname(`"data"`) === '.md'){
    console.log("true");
  }
  else {
    console.log("false");
  }
};
extension();
*/
