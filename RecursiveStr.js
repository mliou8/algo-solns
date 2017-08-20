// Use a recursive function to write all permutations of a string
// Return all of them as a set
// Every character is unique

//Approach: start with all characters but the last one, and do all of those permutations + the last string.
// Then repeat that process with n-1 of the string.
function getPermutations(string) {

  // base case
  if (string.length <= 1) {
      return new Set(string);
  }

  var allCharsExceptLast = string.slice(0, -1);
  var lastChar = string[string.length - 1];

  // recursive call: get all possible permutations for all chars except last
  var permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast);

  // put the last char in all possible positions for each of the above permutations
  var permutations = new Set();
  permutationsOfAllCharsExceptLast.forEach(function(permutationOfAllCharsExceptLast) {
      for (var position = 0; position <= allCharsExceptLast.length; position++) {
          var permutation = permutationOfAllCharsExceptLast.slice(0, position) + lastChar + permutationOfAllCharsExceptLast.slice(position);
          permutations.add(permutation);
      }
  });

  return permutations;
}