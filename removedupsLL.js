function removeDupsLL(node) {
  let keyObj = {};
  var curr = node;
  while(curr.next) {
    if (!checkDuplicates(curr.data)) {

    }
    curr = curr.next;
  }
  function checkDuplicates(value) {
    if (!keyObj[value]) {
      keyObj[value] = 1;
      return true;
    }
    return false;
  }
}

//  Move through the linked list. Store each data value as a key in an object.
// If that key is already in the object, then just reject it.
