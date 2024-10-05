const solution = (str) => {
  // Your solution
  /*---------------1st  solution---------------

  let ans = "";
  for (let i = 0; i < str.length; ++i) {
    if (
      str[i] >= "A" &&
      str[i] <= "Z" &&
      str[i - 1] >= "a" &&
      str[i - 1] <= "z"
    ) {
      ans += " ";
    }
    ans += str[i];
  }
  return ans;
  */
  /*---------------2nd solution---------------*/
  return str.replace(/([a-z])([A-Z])/g, "$1 $2");
};

console.log(solution("camelCasingHere")); // camel Casing Here
console.log(solution("No Camels here")); // No Camels here
console.log(solution("ABC")); // ABC
console.log(solution("")); // ''
