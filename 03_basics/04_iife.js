// Immediately Invoked Function Expression (IIFE)

/*
An IIFE is a function that executes
immediately after it is defined.
*/

// Named IIFE

(function greetUser() {
  console.log("Welcome to JavaScript!");
})();

// Anonymous IIFE

((userName) => {
  console.log(`Welcome, ${userName}!`);
})("Hardik");