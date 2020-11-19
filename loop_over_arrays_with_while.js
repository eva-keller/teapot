let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
let index = 0; //Since array indexes are zero-based, we initialize an index variable with 0.

// loop that executes as long as the number in index is smaller than the length of the names array. 
// accesses the name stored at names[index] and uses it to call the toUpperCase method. 
//That method returns the name in uppercase, which we assign to upperCaseName.
while (index < names.length) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName); //push method for arrays to append the latest uppercase name to the upperNames array.
  index += 1;
}

console.log(upperNames); // => ['CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR']