const countBits = (n) => {
  // Your solution
  /* ------------------1st method-------------
  let ans = 0;
  while (n) {
    if (n & 1) ++ans;
    n = n >> 1;
  }
  return ans;
  */
  //---------------2nd method--------------
  return n
    .toString(2)
    .split("")
    .filter((e) => e == 1).length;
};

console.log(countBits(0)); // 0
console.log(countBits(4)); // 1
console.log(countBits(7)); // 3
console.log(countBits(9)); // 2
