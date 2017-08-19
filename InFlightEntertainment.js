// Two runtimes of movies equal to flight time
// Return a boolean if there are two movies that match exactly to the total amount of time of the flight

var movieLengths = [24, 23, 55, 123]
//Can't watch same movie twice, will watch at least two movies
//optimize for run time over length

//Given a flight time of 47
//This has a run time of O(N) ^2
function flightTime(flightLength, movieLengths) {
  for (var i = 0; i < movieLengths.length; i++) {
    for (var j = 0; j < movieLengths.length; j++) {
      if (movieLengths[i] + movieLengths[j] === flightLength) {
          return true;
      }
    }
  }
  return false;
}

function flightTimeOptimized(flightLength, movieLengths) {
  var movieLengthsSeen = new Set();
  for (var i = 0; i < movieLengths; i++) {
    var firstMovieLength = movieLengths[i];
    var secondMovieLength = flightLength - firstMovieLength;
    if (movieLengthsSeen.has(secondMovieLength)) {
      return true;
    }
    movieLengthsSeen.add(firstMovieLength);
  }
  return false;
}