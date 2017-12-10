var testArr = [1, 4, 5, 2, 3]

function inPlaceShuffle(arr) {
  if (arr.length  < = 1) return; 
  for (var i = 0; i < arr.length - 1; i++) {
    var randomIndex = getRandom(i, arr.length - 1)
    if (randomIndex !== i) {
      var temp = arr[i];
      arr[i] = arr[randomIndex];
      arr[randomIndex] = temp;
    }
  }
}

function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1) + floor)
}

//known as the fisher-yates shuffle