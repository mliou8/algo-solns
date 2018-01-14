function isLetter(character) {
  return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(character) >= 0;
}

//This will have an array that is equal to words
function splitWords(inputString) {

  var words = [];

  var currentWordStartIndex = 0;
  var currentWordLength = 0;

  for (var i = 0; i < inputString.length; i++) {
      var character = inputString[i];

      if (isLetter(character)) {
          if (currentWordLength === 0) {
              currentWordStartIndex = i;
          }
          currentWordLength += 1;
      } else {
          var word = inputString.slice(currentWordStartIndex,
              currentWordStartIndex + currentWordLength);
          words.push(word);
          currentWordLength = 0;
      }
  }

  return words;
}

var wordsToCounts = new Map();

function addWordToHashMap(word) {
  if (wordsToCounts.has(word)) {
      wordsToCounts.set(word, wordsToCounts.get(word) + 1);
  } else {
      wordsToCounts.set(word, 1);
  }
}
