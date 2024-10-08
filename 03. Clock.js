const past = (h, m, s) => {
  // Your solution
  return (s + m * 60 + h * 60 * 60) * 1000;
};

console.log(past(0, 0, 0)); // 0
console.log(past(0, 1, 1)); // 61000
console.log(past(1, 0, 0)); // 3600000
console.log(past(1, 0, 1)); // 3601000
console.log(past(1, 1, 1)); // 3661000
