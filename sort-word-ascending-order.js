let str = "java is a programming language but javascript now most popular";

let sorted = str
  .split(" ")
  .sort((a, b) => a.length - b.length)
  .join(" ");

console.log(sorted);
