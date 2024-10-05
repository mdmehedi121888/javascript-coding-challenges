const wave = (str) => {
  // Your solution
  const ar = [];
  for (let i = 0; i < str.length; ++i) {
    if (str[i] == " ") continue;
    let res = "";
    res += str.substr(0, i).toLowerCase();
    res += str[i].toUpperCase();
    res += str.substr(i + 1).toLowerCase();
    ar.push(res);
  }
  return ar;
};

console.log(wave("hello")); // ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO'];
console.log(wave(" gap ")); // [' Gap ', ' gAp ', ' gaP '];
console.log(wave("Two words")); // ['Two words', 'tWo words', 'twO words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS'];
