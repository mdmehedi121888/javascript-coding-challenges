const spinWords = (str) => {
  // Your solution

  return str
    .split(" ")
    .map((e) => (e.length < 5 ? e : e.split("").reverse().join("")))
    .join(" ");
};

console.log(spinWords("This is a test")); // 'This is a test'
console.log(spinWords("Hey fellow warriors")); // 'Hey wollef sroirraw'
console.log(spinWords("This is another test")); // 'This is rehtona test'
