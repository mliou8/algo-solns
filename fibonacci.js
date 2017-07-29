// O(N) Time N space
// Memo Approach + Recursion

function fibber() {
    this.memo = {}
}

fibber.prototype.fib = function (n) {
    if (n === 0 || n === 1) return n
  
    if (this.memo.hasOwnProperty(n)) {
      console.log("Found memo ", n)
      return this.memo[n]
    }
    var result = this.fib(n-1) + this.fib(n - 2)
    this.memo[n] = result
	  return  this.fib (n-1) + this.fib (n-2)
}

var fibbee = new fibber()
fibbee.fib(7)

// 0 1 1 2 3 5 8 13
//Bottom Up approach
// O(N) runtime O(1) space

function fib(n) {

  // edge cases:
  if (n < 0) {
      throw new Error('Index was negative. No such thing as a negative index in a series.');
  } else if (n === 0 || n === 1) {
      return n;
  }

  var prevPrev = 0;  // 0th fibonacci
  var prev = 1;      // 1st fibonacci
  var current;       // Declare current

  for (var i = 1; i < n; i++) {
      current = prev + prevPrev;
      prevPrev = prev;
      prev = current;
  }

  return current;
}