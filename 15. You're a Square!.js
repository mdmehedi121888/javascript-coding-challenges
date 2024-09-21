const isSquare = (n) => {
  // Your solution
  return n >= 0 && Math.sqrt(n) % 1 === 0;
};

console.log(isSquare(0)); // true
console.log(isSquare(4)); // true
console.log(isSquare(25)); // true
console.log(isSquare(3)); // false
console.log(isSquare(93)); // false
console.log(isSquare(-1)); // false
