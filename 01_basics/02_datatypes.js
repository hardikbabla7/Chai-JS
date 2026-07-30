"use strict"; // Treat all JavaScript code as the latest ECMAScript standard.

// alert(3 + 3); // ❌ Works only in browsers, not in Node.js.

// Always write clean and readable code.
console.log(3 + 3);
console.log("Welcome to JavaScript!");

// Variables
let userName = "Hardik";
let userAge = 20;
let isLoggedIn = false;
let userState; // Value not assigned yet

/*
JavaScript Data Types

Number    -> Integer and floating-point values
BigInt    -> Large integer values
String    -> Text enclosed in quotes
Boolean   -> true or false
Null      -> Represents an intentional empty value
Undefined -> Variable declared but not assigned
Symbol    -> Unique and immutable value
Object    -> Collection of key-value pairs
*/

// Checking Data Types
console.log(typeof "Hello");        // string
console.log(typeof userName);       // string
console.log(typeof userAge);        // number
console.log(typeof isLoggedIn);     // boolean
console.log(typeof userState);      // undefined
console.log(typeof undefined);      // undefined
console.log(typeof null);           // object (known JavaScript bug)