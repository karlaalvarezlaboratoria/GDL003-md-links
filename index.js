const path = require('path');
const fs = require('fs');
//Misma función más corta (ternaria)
//module.exports = filePath => path.extname(filePath) === '.md';

//Funcion funcional, pasa los test.
module.exports = {

  findMdExtension : (filePath) =>{
    if (path.extname(filePath) === '.md'){
      return true;
    }
    else {
      return false;
    }
  },

  readFile : (filePath) =>{
    let show = fs.readFileSync(filePath);
    return show.toString();
  },
  };



/*
  /* saludo :  (name)=>{
    return `Hola ${name}`;
  }, */
/*   mdLinks : () => {
     return true;
   },
*/
  /* mdLinks : () => {
     const fs = ('fs');
     let archivo = fs.readFileSync('/path/to/file') => {
       return archivo
   },

});

*/
