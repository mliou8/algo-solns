//Given a string, find out if any permutation of that string will return a palindrome (same forwards and backwards)
// My strategy would be too check the number of permutations of all the leters, and if there's any that has more than 2, 
// or less than 2, then its not a palindrome
function palindrome(str) {
  var thisObj = {}
  var counter = 0;
  for (var i = 0; i < str.length; i++) {
    var char = str[i]
    if (thisObj.hasOwnProperty(char)) {
      thisObj[char] = thisObj[char] + 1
    } else {
      thisObj[char] = 1
    }
  }
  for (let key in thisObj) {
    if (thisObj[key] !== 2) {
      counter++;
    }
  }
  if (counter > 1) {
    return false
  }
  return true;
}

//A cleaner way would be to store everything without a pair in a "Set"
//Remove it from the set once it gets its pair

function hasPalindromePermutation(theString) {

  // track characters we've seen an odd number of times
  var unpairedCharacters = new Set();

  for (var i = 0; i < theString.length; i++) {
      var char = theString[i];

      if (unpairedCharacters.has(char)) {
          unpairedCharacters.delete(char);
      } else {
          unpairedCharacters.add(char);
      }
  }

  // the string has a palindrome permutation if it
  // has one or zero characters without a pair
  return unpairedCharacters.size <= 1;
}

//If the pair is less than or equal to one, then it's accurate