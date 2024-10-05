const moveZeroes = (nums) => {
  // Your solution
  let len = nums.length;
  return nums
    .filter((num) => num !== 0)
    .concat(Array(len - nums.filter((num) => num !== 0).length).fill(0));
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
console.log(moveZeroes([0, 0, 1])); // [1, 0, 0]
console.log(moveZeroes([0])); // [0]
