const helloWorld = require('./helloWorld'); //to import the code from the javascript file (helloWorld.js) so that we can test it.

describe('Hello World', function() { //all it's doing is running your code and testing to see if the output is correct. 
//The it() function describes what should be happening in plain english and then includes the expect() function.
  it('says hello world', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});