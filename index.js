


// Ex 1

const array = [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];

console.log(array.sort());

// EX 2

const arrayOfNames = ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];

console.log(arrayOfNames.sort());

// Bonuses

console.log(arrayOfNames.sort((a, b) => {

  if (a.length > b.length) return -1
  if (b.length > a.length) return 1

  return 0

}));