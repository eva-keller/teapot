//includes someone's age and then 
//calculates and reports the future age in 10, 20, 30 and 40 years.
//use a for loop to display the future ages
let rlSync = require('readline-sync');
let age = Number(rlSync.question("How old are you? \n"));

console.log(`You are ${age} years old`);

for (let future = 10; future <= 40; future += 10) {
    console.log(`You are ${age + future} years old in ${future} years. `);
}
//console.log(`You are going to be ${age+10} years old in 10 years.`);
//console.log(`You are going to be ${age+20} years old in 20 years.`);


