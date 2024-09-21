const capitalize = function (str) {
  // Your solution
  return str
    .split(" ")
    .map((e) => e.charAt(0).toUpperCase() + e.substr(1, e.length - 1))
    .join(" ");
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(capitalize(str)); // 'How Can Mirrors Be Real If Our Eyes Aren't Real'
