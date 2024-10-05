const reverse = (x) => {
  // Your solution
  return x.split("").reverse().join("").parseInt();
};
console.log(reverse(0)); // 0
console.log(reverse(120)); // 21
console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(1534236469)); // 0
