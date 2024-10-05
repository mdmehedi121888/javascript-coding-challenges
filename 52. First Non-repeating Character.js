const firstNonRepeatingLetter = (str) => {
  // Your solution
  let ob = {};
  for (const element of str) {
    const lowerCase = element.toLowerCase();
    if (ob[lowerCase]) ++ob[lowerCase];
    else ob[lowerCase] = 1;
  }
  for (const element of str) {
    const lowerCase = element.toLowerCase();

    if (ob[lowerCase] == 1) return element;
  }
  return "";
};

console.log(firstNonRepeatingLetter("a")); // 'a'
console.log(firstNonRepeatingLetter("stress")); // 't'
console.log(firstNonRepeatingLetter("sTreSS")); // 'T'
console.log(firstNonRepeatingLetter("abba")); // ''
console.log(firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!")); // ','
