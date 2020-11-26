//solution1
function findLongestWordLength(str) {
    let record = 0;
    let i = 0;
    let wordLength = 0;
    while(true) {
      wordLength = str.indexOf(' ', i) - (i);
      if (str.indexOf(' ', i) === -1) {
        wordLength = str.length-i;
      }
      i = i + (wordLength > 0 ? wordLength : wordLength*(-1)) + 1;
      // OR...
      // i += Math.abs(wordLength)+1;
      if (wordLength > record) {
        record = wordLength;
      }
      if (i > str.length) {
        break;
      }
    }
    return record;
  }

  //solution2
  //Take the string and convert it into an array of words. 
  //Declare a variable to keep track of the maximum length 
  //and loop from 0 to the length of the array of words.
  //Then check for the longest word by comparing the current word 
  //to the previous one and storing the new longest word. 
  //At the end of the loop just return the number value of the variable maxLength.
  function findLongestWordLength(str) {
    var words = str.split(' ');
    var maxLength = 0;
  
    for (var i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {  //length of elements in the array
        maxLength = words[i].length;
      }
    }
  
    return maxLength;
  }

  //solution3
  function findLongestWordLength(s) {
    return s.split(' ')
      .reduce(function(x, y) {
        return Math.max(x, y.length)
      }, 0);
  }