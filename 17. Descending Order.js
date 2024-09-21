const descendingOrder = (n) => {
  // Your solution
  return n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
};

console.log(descendingOrder(0)); // 0
console.log(descendingOrder(1)); // 1
console.log(descendingOrder(1021)); // 2110
console.log(descendingOrder(42145)); // 54421
console.log(descendingOrder(145263)); // 654321
console.log(descendingOrder(123456789)); // 987654321
