const findShort = (str) => {
  return Math.min(...str.split(" ").map((e) => e.length));
};

console.log(findShort("Test where final word shortest see")); // 3
console.log(findShort("Lets all go on holiday somewhere very cold")); // 2
console.log(findShort("i want to travel the world writing code one day")); // 1
