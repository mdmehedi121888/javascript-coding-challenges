const reverseString = (strr) => {
  // Your solution
  //---------------------1st method--------------------
  //   return str.split("").reverse().join("");
  //---------------------2nd method--------------------
  //   let str = [...strr];
  //   let n = str.length;
  //   for (let i = 0; i < n / 2; ++i) {
  //     [str[i], str[n - i - 1]] = [str[n - i - 1], str[i]];
  //     // console.log(str[i], " ", str[n - i - 1]);
  //   }
  //   return str.join("");
  //---------------------3rd method--------------------
  let result = "";
  for (let char of strr) {
    result = char + result;
  }
  return result;
};

console.log(reverseString("hello")); // 'olleh'
console.log(reverseString("world")); // 'dlrow'
console.log(reverseString("")); // ''
console.log(reverseString("h")); // 'h'
