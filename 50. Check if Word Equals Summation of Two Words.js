const isSumEqual = (firstWord, secondWord, targetWord) => {
  // Your solution
  let first = "",
    second = "",
    third = "";
  for (const object of firstWord) {
    first += object.charCodeAt(0) - 97;
  }
  for (const object of secondWord) {
    second += object.charCodeAt(0) - 97;
  }
  for (const object of targetWord) {
    third += object.charCodeAt(0) - 97;
  }
  return parseInt(first) + parseInt(second) == parseInt(third);
};

console.log(isSumEqual("acb", "cba", "cdb")); // true
// The numerical value of firstWord 'acb' is '021' -> 21
// The numerical value of secondWord 'cba' is '210' -> 210
// The numerical value of targetWord 'cdb' is '231' -> 231
// So we return true because 21 + 210 == 231

console.log(isSumEqual("aaa", "a", "aab")); // false
// The numerical value of firstWord 'aaa' is '000' -> 0
// The numerical value of secondWord 'a' is '0' -> 0
// The numerical value of targetWord 'aab' is '001' -> 1
// So we return false because 0 + 0 != 1

console.log(isSumEqual("aaa", "a", "aaaa")); // true
// The numerical value of firstWord 'aaa' is '000' -> 0
// The numerical value of secondWord 'a' is '0' -> 0
// The numerical value of targetWord 'aaaa' is '0000' -> 0
// So we return true because 0 + 0 == 0
