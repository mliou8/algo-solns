//Has to be in place reverse.

function reverseList(headNode) {
  var curr = headNode;
  //initialize next and previous variables to null;
  var nextNode = null;
  var prevNode = null;
  
  while(curr) {
    //nextnode is the next node
    nextNode = curr.next;
    //set the current node's next to previous (since you have stored the next node)
    curr.next = prevNode;
    // move the "previous" pointer to the current pointer, since you have to move forward in the list
    previous = current; 
    //Set the current pointer to the next one and do this after you've already set previous, since it will change
    //current
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