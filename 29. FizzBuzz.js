const fizzBuzz = () => {
  // Your solution
  let output = "";
  for (let i = 1; i <= 100; ++i) {
    if (i % 15 == 0) {
      output += "FizzBuzz";
    } else if (i % 3 == 0) {
      output += "Fizz";
    } else if (i % 5 == 0) {
      output += "Buzz";
    } else output += i;
    if (i != 100) output += ", "; // Add a comma after each number except the last one
  }
  console.log(output);
};

fizzBuzz(); // 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, ...
