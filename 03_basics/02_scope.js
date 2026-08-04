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