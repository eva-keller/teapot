function largestOfFour(arr) {
    var results = []; //Create a variable to store the results as an array.
    for (var n = 0; n < arr.length; n++) { //Create an outer loop to iterate through the outer array.
      var largestNumber = arr[n][0]; //Create a second variable to hold the largest number and initialise it 
      //with the first number. This must be outside an inner loop so it won’t be reassigned until we find a larger number.
      for (var sb = 1; sb < arr[n].length; sb++) { //Create said inner loop to work with the sub-arrays.
        if (arr[n][sb] > largestNumber) { //Check if the element of the sub array is larger than the currently stored largest number.
            //If so, then update the number in the variable.
          largestNumber = arr[n][sb];
        }
      }
        //After the inner loop, save the largest number in the corresponding position inside of the results array.
        //And finally return said array.
      results[n] = largestNumber;
    }
  
    return results;
  }

//solution 2
function largestOfFour(arr) {
    return arr.map(function(group) { //we map all items within the main array to a new array using Array.prototype.map()
        //and return this array as the final result within each inner array,
      return group.reduce(function(prev, current) { // we reduce its contents down to a single value using Array.prototype.reduce()
        //the callback function passed to the reduce method takes the previous value and the current value 
        //and compares the two values
        //if the current value is higher than the previous value 
        //we set it as the new previous value for comparison with the next item within the array or 
        //returns it to the map method callback if it’s the last item

        return current > prev ? current : prev;
      });
    });
  }

   
  
  
  
  
  
  
   
  
