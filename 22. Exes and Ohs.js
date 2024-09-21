const XO = (str) => {
  // Your solution
  /* ---------------- 1st solution ----------------
  return (
    str.split("").filter((e) => e.toLowerCase() === "o").length ===
    str.split("").filter((e) => e.toLowerCase() === "x").length
  );

  */

  // ------------------------2nd  solution---------------------------

  let result = 0;
  const lowerCaseStr = str.toLowerCase();
  for (const letter of lowerCaseStr) {
    if (letter === "o") {
      ++result;
    } else if (letter === "x") --result;
  }
  return result === 0;
};

console.log(XO("xo")); // true
console.log(XO("Oo")); // false
console.log(XO("xxOo")); // true
console.log(XO("xxxm")); // false
console.log(XO("ooom")); // false
console.log(XO("ty")); // true (when no 'x' and 'o' is present should return true)
