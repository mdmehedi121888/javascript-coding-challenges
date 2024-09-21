const duplicateCount = (text) => {
  // Your solution
  const str = text.toLowerCase();
  const charCount = {};
  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  let count = 0;
  for (let char in charCount) {
    if (charCount[char] > 1) {
      ++count;
    }
  }
  return count;
};

console.log(duplicateCount("")); // 0
console.log(duplicateCount("abcde")); // 0
console.log(duplicateCount("abA11")); // 2
console.log(duplicateCount("aabbcde")); // 2
console.log(duplicateCount("aabBcde")); // 2
console.log(duplicateCount("Indivisibility")); // 1
console.log(duplicateCount("Indivisibilities")); // 2
