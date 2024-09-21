const uniqueInOrder = (iterable) => {
  // Your solution
  arr = Array.isArray(iterable) ? iterable : [...iterable];
  return arr.filter((e, i) => e != arr[i - 1]);
};

console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1, 2, 3]
console.log(uniqueInOrder("ABBCcAD")); // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder("AAAABBBCCDAABBB")); // ['A', 'B', 'C', 'D', 'A', 'B']
