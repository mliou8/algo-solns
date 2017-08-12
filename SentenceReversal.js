//This has an O(N^2) run time because it's the naive solution, each
//thing that you're reversing in the sentence, if the lengths are not equal, 
// it creates a different thing.

function sentenceReversal(sentence) {
  var sentenceArr = sentence.split(" ")
  if(sentenceArr.length <= 1) {
    console.log("The sentence is only 1 word long")
    return sentenceArr;
  }
  var startIndex = 0;
  var endIndex = sentenceArr.length - 1;
  while(startIndex < endIndex) {
    var temp = sentenceArr[startIndex];
    sentenceArr[startIndex] = sentenceArr[endIndex]
    sentenceArr[endIndex] = temp
    startIndex++;
    endIndex--;
  }
  sentenceArr = sentenceArr.join(" ")
  return sentenceArr
}


sentenceReversal("dogBert is a friendly Dog")

//In order to get it down to O(N) time, reverse all the characters, and then sort them in place.

function reverseWords(message) {

  var messageArray = message.split('');

  // first we reverse all the characters in the entire messageArray
  reverseCharacters(messageArray, 0, messageArray.length - 1);
  // this gives us the right word order
  // but with each word backwards

  // now we'll make the words forward again
  // by reversing each word's characters

  // we hold the index of the *start* of the current word
  // as we look for the *end* of the current word
  var currentWordStartIndex = 0;
  for (var i = 0; i <= messageArray.length; i++) {

      // found the end of the current word!
      if (i === messageArray.length || messageArray[i] === ' ') {

          // if we haven't exhausted the string our
          // next word's start is one character ahead
          reverseCharacters(messageArray, currentWordStartIndex, i - 1);
          currentWordStartIndex = i + 1;
      }
  }

  return messageArray.join('');
}

function reverseCharacters(messageArray, startIndex, endIndex) {

    // walk towards the middle, from both sides
    while (startIndex < endIndex) {

        // swap the front char and back char
        var temp = messageArray[startIndex];
        messageArray[startIndex] = messageArray[endIndex];
        messageArray[endIndex] = temp;
        startIndex++;
        endIndex--;
    }
}