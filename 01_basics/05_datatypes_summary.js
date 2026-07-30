// Primitive Data Types

// 7 Types:
// String, Number, Boolean, BigInt, Undefined, Null, Symbol

const studentMarks = 95;
const productPrice = 1499.99;
const studentName = "Hardik";

const isStudentLoggedIn = true;
const userLocation = null;
let studentEmail;

const uniqueId = Symbol("123");
const anotherUniqueId = Symbol("123");

console.log(uniqueId === anotherUniqueId); // false

const worldPopulation = 8200000000n;

// Reference (Non-Primitive) Data Types

// Array, Object, Function

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
];

const studentDetails = {
  name: "Hardik",
  age: 20,
  city: "Dehradun",
};

const greetUser = function () {
  console.log("Welcome to JavaScript!");
};

console.log(typeof studentDetails);

// Stack & Heap Memory

/*
Stack Memory
- Used by Primitive Data Types.
- A copy of the value is created.
- Changing the copied value does not affect the original value.
*/

let originalStudentName = "Hardik";
let copiedStudentName = originalStudentName;

copiedStudentName = "Rahul";

console.log(originalStudentName); // Hardik
console.log(copiedStudentName);   // Rahul

/*
Heap Memory
- Used by Non-Primitive Data Types.
- Variables store a reference to the same object.
- Changes made through one reference affect the original object.
*/

let firstUser = {
  email: "hardik@gmail.com",
  paymentId: "hardik@upi",
};

let secondUser = firstUser;

secondUser.email = "rahul@gmail.com";

console.log(firstUser.email);   // rahul@gmail.com
console.log(secondUser.email);  // rahul@gmail.com