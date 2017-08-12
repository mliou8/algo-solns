function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
//Run time is slightly greater than O(N) time, because I have to loop backwards after looping forwards.

function kthToLastNode(k, headNode) {
  if (k < 1) {
    console.log("Impossible!")
  }
  var current = headNode;
  var nextNode = null;
  var prevNode = null;
  var kthCounter = 0;
  while(current) {
    current.previous = prevNode;
    prevNode = current;
    current = current.next;
  }
  var kthNode = prevNode;
  while(kthCounter < k - 1) {
    kthNode = kthNode.previous 
    kthCounter ++;
  }
  return kthNode
}

kthToLastNode(2, a);

//official solution
function kthToLastNode(k, head) {

  if (k < 1) {
      throw new Error('Impossible to find less than first to last node: ' + k);
  }

  // STEP 1: get the length of the list
  // start at 1, not 0
  // else we'd fail to count the head node!
  var listLength = 1;
  var currentNode = head;

  // traverse the whole list,
  // counting all the nodes
  while (currentNode.next) {
      currentNode = currentNode.next;
      listLength += 1;
  }

  // if k is greater than the length of the list, there can't
  // be a kth-to-last node, so we'll return an error!
  if (k > listLength) {
      throw new Error('k is larger than the length of the linked list: ' + k);
  }

  // STEP 2: walk to the target node
  // calculate how far to go, from the head,
  // to get to the kth to last node
  var howFarToGo = listLength - k;

  currentNode = head;
  for (var i = 0; i < howFarToGo; i++) {
      currentNode = currentNode.next;
  }

  return currentNode;
}

//another approach is to use a kth wide "stick" and iterate through the linkedlist normally

function kthToLastNode(k, head) {

    if (k < 1) {
        throw new Error('Impossible to find less than first to last node: ' + k);
    }

    var leftNode  = head;
    var rightNode = head;

    // move rightNode to the kth node
    for (var i = 0; i < k - 1; i++) {

        // but along the way, if a rightNode doesn't have a next,
        // then k is greater than the length of the list and there
        // can't be a kth-to-last node! we'll raise an error
        if (!rightNode.next) {
            throw new Error('k is larger than the length of the linked list: ' + k);
        }

        rightNode = rightNode.next;
    }

    // starting with leftNode on the head,
    // move leftNode and rightNode down the list,
    // maintaining a distance of k between them,
    // until rightNode hits the end of the list
    while (rightNode.next) {
        leftNode  = leftNode.next;
        rightNode = rightNode.next;
    }

    // since leftNode is k nodes behind rightNode,
    // leftNode is now the kth to last node!
    return leftNode;
}