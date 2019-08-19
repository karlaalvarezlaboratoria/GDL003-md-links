const mdLinks = require("../index.js");

describe('mdLinks', () => {
  it('mdLinks it should to be an object', () => {
    expect(typeof mdLinks).toBe('object');
  });

  it('mdLinks contains findMdExtension function', () => {
    expect('findMdExtension' in mdLinks).toBe(true);
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

describe('findMdExtension', () => {

  it('findMdExtension it should to be a function', () => {
    expect(typeof mdLinks.findMdExtension).toBe('function');
  });

});
