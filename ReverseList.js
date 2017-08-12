//Has to be in place reverse.

function reverseList(headNode) {
  var curr = headNode;
  var nextNode = null;
  var prevNode = null;
  
  while(curr) {
    nextNode = curr.next;
    curr.next = prevNode;
    previous = current; 
    current = nextNode;
  }
  return previous;
}

//Recursive solution 
function reverseLL(previousNode, currentNode) {
  if (!currentNode.next) {
    currentNode.next = previousNode;
    return currentNode;
  }
​
  var lastNode = reverseLL(currentNode, currentNode.next);
​
  currentNode.next = previousNode;
  previousNode.next = null;
​
  return lastNode; 
  
}