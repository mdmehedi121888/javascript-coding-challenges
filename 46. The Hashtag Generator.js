const generateHashtag = (str) => {
  // Your solution
  let newStr =
    "#" +
    str
      .split(" ")
      .filter((e) => e != "")
      .map((e) => e[0].toUpperCase() + e.substr(1))
      .join("");
  return newStr.length == 1 || newStr.length > 140 ? "false" : newStr;
};

console.log(generateHashtag("JavaScript")); // #JavaScript
console.log(generateHashtag("Do we have a Hashtag")); // #DoWeHaveAHashtag
console.log(generateHashtag("    Hello     World   ")); // #HelloWorld
console.log(generateHashtag("coding" + " ".repeat(140) + "for life")); // #CodingForLife
console.log(generateHashtag("")); // false
console.log(generateHashtag(" ")); // false
console.log(generateHashtag("a".repeat(140))); // false
console.log(generateHashtag(" ".repeat(200))); // false
