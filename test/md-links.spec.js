const mdLinks = require("../index.js");

describe('mdLinks', () => {
  it('mdLinks it should to be an object', () => {
    expect(typeof mdLinks).toBe('object');
  });

  it('mdLinks contains findMdExtension function', () => {
    expect('findMdExtension' in mdLinks).toBe(true);
  });

  it('mdLinks contains readFile function', () => {
    expect('readFile' in mdLinks).toBe(true);
  });
  
  it('mdLinks contains findLinks function', () => {
    expect('findLinks' in mdLinks).toBe(true);
  });
  
  it('mdLinks contains readDirectory function', () => {
    expect('readDirectory' in mdLinks).toBe(true);
  });
});

describe('readDirectory', () => {
  it ('readDirectory it should to be a function', () =>{
    expect(typeof mdLinks.readDirectory).toBe('function');
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
    expect(mdLinks.findLinks(`Leo correctamente un archivo [Markdown](https://es.wikipedia.org/wiki/Markdown)`)[0]).toBe("(https://es.wikipedia.org/wiki/Markdown)");
  });
});

