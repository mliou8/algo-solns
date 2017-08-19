//Given a string with opening and closing parenthesis, find the corresponding index of the close parens 
//of the input given.
//EG: Given the position a in a string such as There is a lot of ( eiwojfew((oiaje ))) return the index of the closing parens
var str = "There is a lot ( of times when a matching parens is here)"

// This solution works - but I think it has O(N) + something run time and O(N) ish space?
function matchingParens (str, input) {
  var openParens = []
  var closeParens = []
  var indexFound;
  var strArray = str.split("")
  for (var i = 0; i < strArray.length; i++) {
    if (strArray[i] === "(") {
      openParens.push(i)
    } else if (strArray[i] === ")") {
      closeParens.push(i)
    }
  }
  for (var i = 0; i < openParens.length; i++) {
    if (openParens[i] === input) {
      indexFound = i
    }
  }
  return closeParens[indexFound]
}

//Cleaner solution is to use a counter to find out whenever a parens is closing.
// Start counting at wherever the open index is, then count forward.

function getClosingParen(sentence, openingParenIndex) {
  var openNestedParens = 0;

  for (var position = openingParenIndex + 1; position < sentence.length; position++) {
      var char = sentence[position];

      if (char === '(') {
          openNestedParens += 1;
      } else if (char === ')') {
          if (openNestedParens === 0) {
              return position;
          } else {
              openNestedParens -= 1;
          }
      }
  }

  throw new Error('No closing parenthesis :(');
}

