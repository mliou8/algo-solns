//Given game scores, and the maximum game score, sort through an array in less than O(n log n)
// Given 100, and [99, 42, 31, 50] need to return [ 99, 50, 42, 31]

function sortScores(unorderedScores, highestPossibleScore) {
  var scoreCounts = [];
  //Populates an array full of 0's to use as a look up table.
  
  for (var i = 0; i < highestPossibleScore + 1; i++) {
    scoreCounts.push(0);
  }
  unorderedScores.forEach(functino(score) {
    scoreCounts[score]++;
  })
  var sortedScores = [];
  for (var i = highestPossibleSCore; i >=0; i--) {
    var count = scoreCounts[i];
    for (var times = 0; times < count; times++) {
      sortedScores.push(i);
    }
  }
  return sortedScores;
}