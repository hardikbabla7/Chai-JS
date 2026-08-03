// Functions

function printName() {
  console.log("H");
  console.log("A");
  console.log("R");
  console.log("D");
  console.log("I");
  console.log("K");
}

// printName();

// Function with Parameters

// function addNumbers(firstNum, secondNum) {
//   console.log(firstNum + secondNum);
// }

// addNumbers(10, 20);
// addNumbers(10, "20");
// addNumbers(10, "A");
// addNumbers(10, null);

/*
Arguments  -> Values passed while calling a function.

Parameters -> Variables declared in the function definition.
*/

function addNumbers(firstNum, secondNum) {
  // const sum = firstNum + secondNum;
  // return sum;

  return firstNum + secondNum;
}

const total = addNumbers(50, 30);

// console.log("Total:", total);

// Default Parameters

function loginUser(userName = "Guest") {
  if (!userName) {
    console.log("Please enter a username.");
    return;
  }

  return `${userName} has logged in.`;
}

// console.log(loginUser("Hardik"));

console.log(loginUser());