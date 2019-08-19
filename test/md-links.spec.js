const mdLinks = require("../index.js");
/*
describe('mdlinks', () => {
  it('should be and object', () =>{
    expect(typeof mdLinks.mdLinks).toBe('object');
  });
}
*/
describe('mdLinks', () => {
  it('mdLinks it should to be an object', () => {
    expect(typeof mdLinks).toBe('object');
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
