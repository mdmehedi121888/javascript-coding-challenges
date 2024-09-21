const duplicateEncode = (word) => {
  // Your solution
  const str = word.toLowerCase();
  let output = "";

  /*-----------------1st method------------------------
  let charCount = {};
  for (let char of str) {
    if (charCount[char]) {
      ++charCount[char];
    } else charCount[char] = 1;
  }
  for (let char of str) {
    if (charCount[char] > 1) output += ")";
    else output += "(";
  }
  return output;
  */

  // -------------------------------2nd method----------------------------
  for (let char of str) {
    if (str.indexOf(char) != str.lastIndexOf(char)) output += ")";
    else output += "(";
  }
  return output;
};

console.log(duplicateEncode("din")); // '((('
console.log(duplicateEncode("(( @")); // '))(('
console.log(duplicateEncode("recede")); // '()()()'
console.log(duplicateEncode("Success")); // ')())())'
