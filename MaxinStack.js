//runtime for push pop and peek is O(1)


function MaxStack() {
  this.stack = new Stack();
  this.maxesStack = new Stack();
}

// Add a new item to the top of our stack. If the item is greater
// than or equal to the last item in maxesStack, it's
// the new max! So we'll add it to maxesStack.
MaxStack.prototype.push = function(item) {
  this.stack.push(item);
  if (!this.maxesStack.peek() || item >= this.maxesStack.peek()) {
      this.maxesStack.push(item);
  }
};

// Remove and return the top item from our stack. If it equals
// the top item in maxesStack, they must have been pushed in together.
// So we'll pop it out of maxesStack too.
MaxStack.prototype.pop = function() {
  var item = this.stack.pop();
  if (item === this.maxesStack.peek()) {
      this.maxesStack.pop();
  }
  return item;
};

// The last item in maxesStack is the max item in our stack.
MaxStack.prototype.getMax = function() {
  return this.maxesStack.peek();
};