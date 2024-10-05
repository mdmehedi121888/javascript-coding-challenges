const cakes = (recipe, available) => {
  // Your solution
  let ans = Number.MAX_SAFE_INTEGER;
  for (const key in recipe) {
    if (recipe[key] && available[key]) {
      ans = Math.min(ans, Math.floor(available[key] / recipe[key]));
    } else return 0;
  }
  return ans;
};

let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
console.log(cakes(recipe, available)); // 2

recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
available = { sugar: 500, flour: 2000, milk: 2000 };
console.log(cakes(recipe, available)); // 0
