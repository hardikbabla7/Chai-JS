// Number Examples

const studentMarks = 400;
// console.log(studentMarks);

const accountBalance = new Number(12500);
// console.log(accountBalance);

// Number Methods

// console.log(accountBalance.toString().length);
// console.log(accountBalance.toFixed(2));

const productPrice = 1299.899;

// console.log(productPrice.toPrecision(5));

const annualSalary = 1500000;

// console.log(annualSalary.toLocaleString("en-IN")); // 15,00,000

// Math Object

// console.log(Math);
// console.log(Math.abs(-25));      // 25
// console.log(Math.round(4.6));    // 5
// console.log(Math.ceil(4.2));     // 5
// console.log(Math.floor(4.9));    // 4

// Random Number Generation

console.log(Math.random()); // Generates a random number between 0 (inclusive) and 1 (exclusive).

console.log(Math.random() * 10 + 1); // Random decimal between 1 and 11.

console.log(Math.floor(Math.random() * 10) + 1); // Random integer between 1 and 10.

// Random Integer Between a Minimum and Maximum Value

const minimumNumber = 10;
const maximumNumber = 20;

const randomNumber =
  Math.floor(Math.random() * (maximumNumber - minimumNumber + 1)) +
  minimumNumber;

console.log(randomNumber); // Random integer between 10 and 20 (inclusive)