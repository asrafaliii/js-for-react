const userNames = [
  "Asraf",
  "Nafeza",
  "Dina",
  "Ali",
  "Mobarok",
  "Habiba",
  "Kulsum",
];

// console.log(userNames[0]);
// console.log(userNames[1]);
// console.log(userNames[2]);
// console.log(userNames[3]);
// console.log(userNames[4]);
// console.log(userNames[5]);
// console.log(userNames[6]);

// for loop

for (let i = 0; i < userNames.length; i++) {
  const element = userNames[i];
  //   console.log(element);
}

// for of

for (const element of userNames) {
  //   console.log(element);
}

// for in (object)

const object = { a: 1, b: 2, C: 3 };

for (const property in object) {
  //   console.log(property);
  //   console.log(object);
  console.log(`${property}: ${object[property]}`);
}
