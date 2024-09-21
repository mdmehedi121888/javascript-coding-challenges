const fib = (steps) => {
  // Your solution
  if (steps < 2) return steps;

  /* --------------------1st method------------------------
  let a = 0,
    b = 1,
    result = 0;
  for (let i = 2; i <= steps; ++i) {
    result = a + b;
    a = b;
    b = result;
  }
  return result;
  */
  // ----------------------2nd method----------------------
  return fib(steps - 2) + fib(steps - 1);
};

console.log(fib(0)); // 0
console.log(fib(4)); // 3
console.log(fib(17)); // 1597
console.log(fib(20)); // 6765
