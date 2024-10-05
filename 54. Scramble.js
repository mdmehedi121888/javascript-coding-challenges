const scramble = (str1, str2) => {
  // Your solution
  let ob = {},
    ob2 = {};
  for (const element of str1) {
    if (ob[element]) {
      ++ob[element];
    } else {
      ob[element] = 1;
    }
  }
  for (const element of str2) {
    if (ob2[element]) {
      ++ob2[element];
    } else {
      ob2[element] = 1;
    }
  }
  for (const key in ob2) {
    if (ob2[key] > ob[key] || !ob[key]) return false;
  }
  return true;
};

console.log(scramble("scriptjava", "javascript")); // true
console.log(scramble("scriptingjava", "javascript")); // true
console.log(scramble("scriptsjava", "javascripts")); // true
console.log(scramble("jscripts", "javascript")); // false
console.log(scramble("javscripts", "javascript")); // false
