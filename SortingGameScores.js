//Given game scores, and the maximum game score, sort through an array in less than O(n log n)
// Given 100, and [99, 42, 31, 50] need to return [ 99, 50, 42, 31]

function sortScores(unorderedScores, highestPossibleScore) {
  var scoreCounts = [];
  //Populates an array full of 0's
  for (var i = 0; i < highestPossibleScore + 1; i++) {
    scoreCounts.push(0);
  }
  unorderedScores.forEach(function(score) {
    scoreCounts[score]++;
  })
  var sortedScores = [];
  console.log("scoreCounts ", scoreCounts)
  for (var i = highestPossibleScore; i >= 0; i--) {
    var count = scoreCounts[i];
    for (var times = 0 ; times < count; times ++) {
      sortedScores.push(i);
    }
  }
  return sortedScores;
}
