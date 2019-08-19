const mdLinks = require("../index.js");
/*
describe('mdlinks', () => {
  it('should be and object', () =>{
    expect(typeof mdLinks.mdLinks).toBe('object');
  });
}
*/

describe('mdLinks', () => {

  it('should return true for a valid .md file', () => {
    expect( mdLinks.mdLinks('../README.md')).toBe(true);
  });

  it('should return true for a valid .md file', () => {
    expect( mdLinks.mdLinks('../README.js')).toBe(false);
  });

});
