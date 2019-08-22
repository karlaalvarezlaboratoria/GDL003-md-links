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

describe('findMdExtension', () => {

  it('findMdExtension it should to be a function', () => {
    expect(typeof mdLinks.findMdExtension).toBe('function');
  });

  it('should return true for a valid .md file', () => {
    expect( mdLinks.findMdExtension('../README.md')).toBe(true);
  });

  it('should return true for a valid .md file', () => {
    expect( mdLinks.findMdExtension('../README.js')).toBe(false);
  });
});

describe('readFile', () => {

  it('readFile it should to be a function', () => {
    expect(typeof mdLinks.readFile).toBe('function');
  });

  it('readFile it should to read a file', () => {
    expect(mdLinks.readFile('test/readmeTest.md')).toEqual('Leo correctamente un archivo [Markdown](https://es.wikipedia.org/wiki/Markdown)');
  });
});

describe('findLinks', () => {

  it('findLinks it should to be a function', () => {
    expect(typeof mdLinks.findLinks).toBe('function');
  });
  
  it('findLinks find a links into a .md file', () => {
    expect(mdLinks.findLinks(`Leo correctamente un archivo [Markdown](https://es.wikipedia.org/wiki/Markdown)`)[0]).toBe("https://es.wikipedia.org/wiki/Markdown");
  });
});

