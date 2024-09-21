const twoSum = (nums, target) => {
  // Your solution
  return nums
    .map((e, i) => (e != target - e && nums.includes(target - e) ? i : "-1"))
    .filter((e) => e != "-1");
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
