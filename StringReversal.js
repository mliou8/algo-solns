//Write a function to do an inplace reversal of a string
// Given a string like Dogersted i should reverse it. It should be in the same capitalization so 
// I don't have to lower case or upper case it. In place in this case means what? 

function stringReversal(str) {
  if(str.length <= 1) {
    return str;
  }
  var strArr = str.split('');
  var startIndex = 0;
  var endIndex = strArr.length - 1 
  while(startIndex < endIndex) {
    var temp = stringArray[startIndex];
    stringArray[startIndex] = stringArray[endIndex]
    stringArray[endIndex] = temp;
    startIndex++;
    endIndex--;
  }
  return strArr.join('');
}
