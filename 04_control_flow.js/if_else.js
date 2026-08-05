// Conditional Statements

const isLoggedIn = true;
const temperature = 41;

/*
if (temperature < 50) {
  console.log("Temperature is less than 50.");
} else {
  console.log("Temperature is greater than or equal to 50.");
}
*/

// Comparison Operators

// <, >, <=, >=, ==, !=, ===, !==

const userScore = 200;

if (userScore > 100) {
  // var userPower = "Fly";
  let userPower = "Fly";

  // console.log(`Power: ${userPower}`);
}

// console.log(userPower); // ❌ Not Accessible Outside the Block

const accountBalance = 1000;

// Single-line if statement

// if (accountBalance > 500) console.log("Test 1"), console.log("Test 2");

/*
if (accountBalance < 500) {
  console.log("Balance is less than 500.");
} else if (accountBalance < 750) {
  console.log("Balance is less than 750.");
} else if (accountBalance < 900) {
  console.log("Balance is less than 900.");
} else {
  console.log("Balance is greater than or equal to 900.");
}
*/

// Logical AND (&&)

const hasDebitCard = true;
const isPremiumUser = true;

if (isLoggedIn && hasDebitCard && isPremiumUser) {
  console.log("Eligible to purchase the course.");
}

// Logical OR (||)

const loggedInWithGoogle = false;
const loggedInWithEmail = true;

if (loggedInWithGoogle || loggedInWithEmail) {
  console.log("User is logged in.");
}