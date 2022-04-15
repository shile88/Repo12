function sumFibonacci(num) {
  var sum = 2;

  var prev = 1;
  var curr = 1;
  var next = 2;

  while (next <= num) {
    prev = curr;
    curr = next;
    next = prev + curr;

    if (curr % 2 !== 0) {
      sum += curr;
    }
  }
  if (Number.isInteger(num) && num < 0) {
    return 0;
  }
  if (num == 1) {
    return num;
  }

  return sum;
}

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));

module.exports = sumFibonacci;
