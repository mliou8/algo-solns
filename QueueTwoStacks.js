// First implementation is basically everytime you enqueue, you enqueue in stack A
// Anytime there's a dequeue operation, then you move everything to stack B, and pop up the top one on stack B
// If dequeue is not empty just pop off the top one. If it is empty then move everything from instack to outstack.

// Run time for enqueue is O(1)
//Run time for dequeues is O(1) as well
// Worst case for a single item is enqueue and then dequeue. One push into instack, and outstack is 1 pop, and 1 push, and 1 pop.
// Total cost per item is O(1) and total run time is O(m) for m items

function queueStacks() {
  this.inStack = [];
  this.outStack = [];
}

queueStacks.prototype.enqueue = function(item) {
  this.inStack.push(item);
}

queueStacks.prototype.dequeue = function() {
  if (this.outStack.length === 0) {
    while (this.inStack.length > 0) {
      var newest = this.inStack.pop();
      this.outStack.push(newest)
    }
    if (this.outStack.length === 0) {
      return undefined;
    }
  }
  return this.outStack.pop()
}
