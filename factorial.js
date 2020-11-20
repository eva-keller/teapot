//Write a function that computes and returns the factorial of a number 
//by using a for loop. Use a loop of some kind to solve this

function factorial(number) {
    let result = 1;
    for (let counter = number; counter > 0; counter -= 1) {
      result *= counter;
    }
  
    return result;
  }
  /*
  function factorial(number) {
  if (number <= 1) {
    return 1;
  }

  return number * factorial(number - 1);
}
*/ 

  console.log(factorial(0));     // => 1
  console.log(factorial(1));     // => 1
  console.log(factorial(2));     // => 2
  console.log(factorial(100));     // => 6
