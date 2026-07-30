const userName = "Hardik";
const userAge = 20;

// Traditional String Concatenation
// console.log(userName + " is " + userAge + " years old.");

// String Interpolation (Template Literals)
// console.log(`${userName} is ${userAge} years old.`);

const fullName = new String("Hardik Babla");

// Accessing Characters
// console.log(fullName[0]);
// console.log(fullName.__proto__);

// String Properties & Methods
// console.log(fullName.length);
// console.log(fullName.toUpperCase());

// Finding Characters
// console.log(fullName.charAt(4));      // i
// console.log(fullName.indexOf("B"));   // 7

// substring() - Negative values are NOT allowed.
const firstName = fullName.substring(0, 6);
console.log(firstName);

// slice() - Negative values are allowed.
const lastName = fullName.slice(-5);
console.log(lastName);

// Removing Extra Spaces
const userInput = "   Hardik   ";

console.log(userInput);
console.log(userInput.trim());

// URL Methods
const portfolioURL = "https://hardik.dev/full%20stack";

console.log(portfolioURL.replace("%20", "-"));
console.log(portfolioURL.includes("hardik"));

// Splitting a String
const technologyStack = "HTML-CSS-JavaScript-React";

console.log(technologyStack.split("-"));