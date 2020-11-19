let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  if (names[index] === 'Naveed') {
    continue; 
  }
//When a loop encounters the continue keyword, it skips running the rest of the block and jumps ahead to the next iteration.
// In this example, we tell the loop to ignore 'Naveed' and skip to the next iteration without adding 'NAVEED' to upperNames.
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames); // => ['CHRIS', 'KEVIN', 'PETE', 'VICTOR']