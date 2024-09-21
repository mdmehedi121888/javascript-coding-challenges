const isIsogram = (str) => {
  // Your solution
  newStr = str.toLowerCase();

  /* --------------------1st method---------------
  const mapStr = new Map();
  for (let i = 0; i < newStr.length; ++i) {
    if (mapStr.has(newStr[i])) return false;
    mapStr.set(newStr[i], 1);
  }
  return true;
  */
  // ----------------------2nd method--------------------
  return newStr.length === new Set(newStr).size;
};

console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("isIsogram")); // false
console.log(isIsogram("isogram")); // true
console.log(isIsogram("moOse")); // false
console.log(isIsogram("aba")); // false
console.log(isIsogram("")); // true
