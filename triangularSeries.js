
function triangularSeries(arr) {
    var num = arr[arr.length - 1]
    var correctSum = (num * num + num) / 2
    var actualSum = 0;
    for (var i = 0; i < arr.length; i++) {
      actualSum += arr[i]
    }
    return actualSum - correctSum;
}

var testArr = [1, 2, 3, 4, 4, 5, 6, 7]

triangularSeries(testArr);