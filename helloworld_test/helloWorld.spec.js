const helloWorld = require('./helloWorld'); //to import the code from the javascript file (helloWorld.js) so that we can test it.

describe('Hello World', function() {
  it('says hello world', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});