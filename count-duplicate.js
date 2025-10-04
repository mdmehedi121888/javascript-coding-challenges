let fruits = ["apple", "mango", "jack_fruit", "apple", "mango", "mango"];

let obj = {};

fruits.forEach((fruit) => {
  if (obj[fruit]) obj[fruit] += 1;
  else obj[fruit] = 1;
});

console.log(obj);
