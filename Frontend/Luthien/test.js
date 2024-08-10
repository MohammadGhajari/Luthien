const array = [
  { ratings: 4, quantity: 7 },
  { ratings: 10, quantity: 4 },
];
console.log(array);
array.sort((a, b) => b.ratings * b.quantity - a.ratings * a.quantity);
console.log(array);
