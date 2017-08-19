//"{ [ ] ( ) }" should return true
//"{ [ ( ] ) }" should return false
//"{ [ }" should return false

var str = "{[}]}"
function isValid(code) {
// use this as a "key"
  var openersToClosers = {
      '(': ')',
      '[': ']',
      '{': '}',
  };
  
  //specific keys
  var openers = new Set(['(', '[', '{']);
  var closers = new Set([')', ']', '}']);

  openersStack = [];

  for (var i = 0; i < code.length; i++) {
      //Access the character key here
      var char = code.charAt(i);
      //If it is an opener
      if (openers.has(char)) {
          openersStack.push(char);
      //this is a closer
      } else if (closers.has(char)) {
        if (!openersStack.length) {
          return false;
        } else {
          lastUnclosedOpener = openersStack.pop();
          //if this closer doesn't correspond to the most recently seen
          //unclosed opener, short-circuit returning false
          if (openersToCloser[lastUnclosedOpener] !== char) {
            return false;
          }
        }
      }
    }
    return openersStack.length === 0;
  }
  