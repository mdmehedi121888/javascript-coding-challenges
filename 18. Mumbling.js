const accum = (str) => {
  // Your solution
  /*----------------1st method---------------
  let result = "";
  for (let i = 0; i < str.length; ++i) {
    let ch = str[i];
    result += ch.toUpperCase();
    for (let j = 0; j < i; ++j) {
      result += ch.toLowerCase();
    }
    if (i != str.length - 1) {
      result += "-";
    }
  }
  return result;
  */
  //----------------2nd method-----------------------

  return str
    .split("")
    .map((e, ind) => e.toUpperCase() + e.toLowerCase().repeat(ind))
    .join("-");
};

console.log(accum("abcd")); // 'A-Bb-Ccc-Dddd'
console.log(accum("cwAt")); // 'C-Ww-Aaa-Tttt'
console.log(accum("RqaEzty")); // 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'
