const count = (string) => {
  // Your solution
  let ans = {};
  for (const char of string) {
    if (ans[char]) {
      ans[char]++;
    } else ans[char] = 1;
  }
  return ans;
};

console.log(count("")); // {}
console.log(count("aba")); // { a: 2, b: 1 }
