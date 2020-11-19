//the program should ask for your name, 
//then output Hello, {name}! where {name} is the name you entered:
//Modify the greeter.js program to ask for the user's first and last names separately, 
//then greet the user with their full name.
let rlSync = require('readline-sync');
let firstName = rlSync.question("What's your first name?\n");
let lastName = rlSync.question("What's your last name?\n");

console.log(`Good Morning, ${firstName + " " + lastName}!`);
//updated version below
function getName(prompt) {
    let readlineSync = require('readline-sync');
    let name = readlineSync.question(prompt);
    return name;
  }
  
  let firstName = getName('What is your first name? ');
  let lastName = getName('What is your last name? ');
  console.log(`Hello, ${firstName} ${lastName}!`);