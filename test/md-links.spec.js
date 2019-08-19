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
    expect(mdLinks.readFile('test/readmeTest.md')).toEqual('Leo correctamente un archivo');
  });

});
