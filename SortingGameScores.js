//Given game scores, and the maximum game score, sort through an array in less than O(n log n)
// Given 100, and [99, 42, 31, 50] need to return [ 99, 50, 42, 31]

function sortScores(unorderedScores, highestPossibleScore) {

  // array of 0s at indices 0..highestPossibleScore
  var scoreCounts = [];
  for (var i = 0; i < highestPossibleScore + 1; i++) {
      scoreCounts.push(0);
  }

  // populate scoreCounts
  unorderedScores.forEach(function(score) {
      scoreCounts[score]++;
  });

  // populate the final sorted array
  var sortedScores = [];

  // for each item in scoreCounts
  for (var score = highestPossibleScore; score >= 0; score--) {
      var count = scoreCounts[score];

      // for the number of times the item occurs
      for (var time = 0; time < count; time++) {
          sortedScores.push(score);
      }
  }

  return sortedScores;
}