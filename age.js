//includes someone's age and then 
//calculates and reports the future age in 10, 20, 30 and 40 years.
let rlSync = require('readline-sync');
let age = Number(rlSync.question("How old are you? \n"));


console.log(`You are ${age} years old`);
console.log(`You are going to be ${age+10} years old in 10 years.`);
console.log(`You are going to be ${age+20} years old in 20 years.`);


