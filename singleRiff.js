// Single Riff of deck

function isSingleRiffle(half1, half2, shuffledDeck, shuffledDeckIndex, half1Index, half2Index) {
  if (!shuffledDeckIndex) {
    shuffledDeckIndex = 0
  }
  if (!half1Index) {
    half1Index = 0
  }
  if (!half2Index) {
    half2Index = 0
  }
  
  
  if (shuffleDeck.length === 0) {
    return true;
  }
  //Make sure that there is a card from half1
  // check to see if half 1 is equal to top card
  if (half1.length && half1[0] === shuffledDeck[0]) {
    // take the top off half1 and shuffleDeck and recurse
    return isSingleRiffle(half1.slice(1), half2, shuffledDeck.slice(1));
  }
  else if (half2.length && half2[0] === shuffledDeck[0]) {
    //take the top off half2 and shuffleDeck and recurse
    return isSingleRiffle(half1, half2.slice(1), shuffledDeck.slice(1));
  } else {
    return false;
  }
}

