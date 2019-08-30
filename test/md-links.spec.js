const mdLinks = require("../index.js");

describe('mdLinks', () => {
  it('mdLinks should be an object', () => {
    expect(typeof mdLinks).toBe('object');
  });
  
  it('mdLinks should contain readDirectory, findMdExtension, readFile, findLinks, validateLinks', () => {
    const objKeys = Object.keys(mdLinks);
    objKeys.forEach((el) => {
        expect(el in mdLinks).toBe(true)
    })
  })  
});

describe('readDirectory', () => {
  it ('readDirectory it should to be a function', () =>{
    expect(typeof mdLinks.readDirectory).toBe('function');
  });
  
  it ('readDirectory contains a x file', () =>{
    expect(mdLinks.readDirectory('/home/laboratoria-185/Documentos/LaboratoriaKEAC/GDL003-md-links')[3])
    .toBe('.gitignore');
  });
});

describe('checkIfMD', () => {

  it('checkIfMD should be a function', () => {
    expect(typeof mdLinks.checkIfMD).toBe('function');
  });

  it('checkIfMD should return true for a valid .md file', () => {
    expect( mdLinks.checkIfMD('../README.md')).toBe(true);
  });

  it('checkIfMD should return false for a no valid .md file', () => {
    expect( mdLinks.checkIfMD('../README.js')).toBe(false);
  });
});

describe('readFile', () => {

  it('readFile should be a function', () => {
    expect(typeof mdLinks.readFile).toBe('function');
  });

  it('readFile should read a file', () => {
    expect(mdLinks.readFile('test/readmeTest.md')).toEqual('Leo correctamente un archivo [Markdown](https://es.wikipedia.org/wiki/Markdown)');
  });
});

describe('findLinks', () => {
  
  it('findLinks should be a function', () => {
    expect(typeof mdLinks.findLinks).toBe('function');
  });
  
  it('findLinks find a links into a .md file', () => {
    expect(mdLinks.findLinks(`Leo correctamente un archivo [Markdown](https://es.wikipedia.org/wiki/Markdown)`)[0]).toEqual({ file:
         '/home/laboratoria-185/Documentos/LaboratoriaKEAC/GDL003-md-links/--coverage',
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown' });
  });
});

describe('validateLinks', () => {
  
  it('validateLinks should be a function', () => {
    expect(typeof mdLinks.validateLinks).toBe('function');
  })
  
  it('validateLinks validate a link', () => {
      mdLinks.validateLinks('https://es.wikipedia.org/wiki/Markdown')
      .then((response) => {
        expect(response.status).toBe(200);
      });
})
})