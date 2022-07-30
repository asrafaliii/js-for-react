/*The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object. */

const numbersOne = [1, 2, 3, 4];
const numbersTwo = [5, 6, 7, 8];
const numberCombined = [...numbersOne, ...numbersTwo];

// console.log(numberCombined);

/*Assign the first and second items from numbers to variables and put the rest in an array:*/

const numbers = [1, 2, 3, 4, 5, 6, 7];
const [one, two, ...rest] = numbers;
// console.log(numbers);

// Combine these two objects:

const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
console.log(myUpdatedVehicle);
