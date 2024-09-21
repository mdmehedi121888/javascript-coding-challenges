const getCount = (str) => {
  // Your solution
  let ans = 0,
    ar = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; ++i) {
    if (ar.includes(str[i])) ++ans;
  }
  return ans;
};

console.log(getCount("my pyx")); // 0
console.log(getCount("pear tree")); // 4
console.log(getCount("abracadabra")); // 5
console.log(getCount("o a kak ushakov lil vo kashu kakao")); // 13
