const getMiddle = (str) => {
  // Your solution
  let x = str.length;
  return x % 2 == 0 ? str.substr(x / 2 - 1, 2) : str.substr(x / 2, 1);
};

console.log(getMiddle("test")); // 'es'
console.log(getMiddle("testing")); // 't'
console.log(getMiddle("middle")); // 'dd'
console.log(getMiddle("A")); // 'A'
