const getConcatenation = (nums) => {
  // Your solution
  return [...nums, ...nums];
};

console.log(getConcatenation([1, 2, 3])); // [1, 2, 3, 1, 2, 3]
console.log(getConcatenation([4, 3, 2, 1])); // [4, 3, 2, 1, 4, 3, 2, 1]
