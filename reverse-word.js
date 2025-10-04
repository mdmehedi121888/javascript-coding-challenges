let str = "I love Bangladesh";

let reverseStr = str
  .split(" ")
  .map((s) => s.split("").reverse().join(""))
  .join(" ");

console.log(reverseStr);
