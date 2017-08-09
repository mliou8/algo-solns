// Given the first node in a singly linked list return a boolean indicating whether or not the list is a cycle
// That means a node points to a previous node in the list.

//Best case run time to establish if you have a loop is O(N) because you have to cycle through the whole thing
function containsCycle(firstNode) {
  var slowRunner = firstNode;
  var fastRunner = firstNode;
  console.log("firstNode ", firstNode)
  while (fastRunner && fastRunner.next) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;
  console.log("slowRunner ", slowRunner.value)
  console.log("fastRunner ", fastRunner.value)
    if (fastRunner === slowRunner) {
      return true;
    }
  }
  return false;
}


var testFirstNode = {
  value: 'first'
}

var testSecondNode = {
  value: 'second'
}

var testThirdNode = {
  value: 'third'
}

testFirstNode.next = testSecondNode
testSecondNode.next = testThirdNode
testThirdNode.next = testFirstNode

containsCycle(testFirstNode)
