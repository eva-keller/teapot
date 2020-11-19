let rlSync = require('readline-sync'); //Node's built-in require function to import readline-sync into your program. 
//It returns the library as an object, which we assign to the rlSync variable.
let name = rlSync.question("What's your name?\n"); //we use rlSync to call the question method. 
//This method displays its string argument, then waits for the user to respond. 
//When the user types some text and presses Return, 
//it returns that text to the program. Here, we assign that text to the variable name
// and use it to display a personalized greeting.
console.log(`Good Morning, ${name}!`);