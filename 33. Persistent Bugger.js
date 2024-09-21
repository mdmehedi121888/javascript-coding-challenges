const persistence = (num, count) => {
  // Your solution
  if (num < 10) return count;
  let temp = 1;
  while (num != 0) {
    temp *= Math.floor(num) % 10;
    num = Math.floor(num / 10);
    // console.log(temp);
  }
  return persistence(temp, count + 1);
};

console.log(persistence(999, 0)); // 4
// because 9*9*9=729, 7*2*9=126, 1*2*6=12, and finally 1*2=2

console.log(persistence(93, 0)); // 3
// because 9*3=27, 2*7=14, 1*4=4 and 4 has only one digit

console.log(persistence(5, 0)); // 0
// because 5 is already a single-digit number
