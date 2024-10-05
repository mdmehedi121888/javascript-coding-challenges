const toCamel = (obj) => {
  // Your solution
  return Object.keys(obj).map((e) =>
    e.replace(/_([a-z])/gi, ($1) => $1.replace("_", "").toUpperCase())
  );
};

console.log(
  toCamel({
    first_name: "John",
    last_name: "Rambo",
    favorite_movie: "First Blood",
  })
); // {'firstName': 'John', 'lastName': 'Rambo', 'favoriteMovie': 'First Blood'}
