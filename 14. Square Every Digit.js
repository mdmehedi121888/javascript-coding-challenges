const squareDigits = (num) => {
  /* 1st method
  let str = "";
  while (num > 0) {
    let temp = Math.floor(num % 10);
    str += (temp * temp).toString();
    num = Math.floor(num / 10);
  }
  return str;
  */

  // 2nd method
  return num
    .toString()
    .split("")
    .map((e) => e * e)
    .join("");
};

console.log(squareDigits(2112)); // 4114
console.log(squareDigits(3212)); // 9414
console.log(squareDigits(9159)); // 8112581
