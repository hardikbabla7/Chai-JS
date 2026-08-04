// Block Scope vs Global Scope

/*
'let' and 'const' are block-scoped,so they can only be accessed inside the block ({}) where they are declared.

'var' is function-scoped, which means it ignores block scope and can cause unexpected behavior. That's why 'let' and 'const' are preferred.
*/

var totalUsers = 300;
let maxStudents = 50;

if (true) {
  let maxStudents = 10;
  const totalCourses = 20;
  // var totalUsers = 30;

  console.log("Inside Block:", maxStudents);
}

console.log("Outside Block:", maxStudents);

// console.log(totalCourses); // ❌ Not Accessible Outside the Block
// console.log(totalUsers);   // Accessible because 'var' is function-scoped

// ################################################################

// Nested Functions

/*
A nested function can access variables
from its parent function.

However, the parent function cannot
access variables declared inside the
nested function.
*/

function displayUser() {
  const userName = "Hardik";

  function displayWebsite() {
    const websiteName = "GitHub";

    console.log(userName);
  }

  // console.log(websiteName); // ❌ Not Accessible Here

  displayWebsite();
}

displayUser();

// Block Scope

if (true) {
  const userName = "Hardik";

  if (userName === "Hardik") {
    const websiteName = "GitHub";

    console.log(userName + " " + websiteName);
  }

  // console.log(websiteName); // ❌ Not Accessible Here
}

// console.log(userName); // ❌ Not Accessible Here


// Function Hoisting

/*
Function declarations are hoisted,
so they can be called before they
are defined.

Function expressions are NOT hoisted
in the same way because the variable
is initialized later.
*/

console.log(addOne(2));

function addOne(number) {
  return number + 1;
}

// console.log(addOne(2));

console.log(addTwo(5));

const addTwo = function (number) {
  return number + 2;
};

// console.log(addTwo(5));