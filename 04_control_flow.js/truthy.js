// Truthy & Falsy Values

// const userEmail = "hardik@gmail.com";
const userEmail = "";

if (userEmail) {
  console.log("Email Found");
} else {
  console.log("Email Not Found");
}

/*
Falsy Values

false
0
-0
0n (BigInt)
""
null
undefined
NaN
*/

/*
Truthy Values

"0"
"false"
" "
[]
{}
function() {}
*/

// Checking if an Array is Empty

const students = [];

if (students.length === 0) {
  console.log("Array is Empty");
}

// Checking if an Object is Empty

const user = {};

if (Object.keys(user).length === 0) {
  console.log("Object is Empty");
}

/*
Loose Equality (==)

false == 0   // true
false == ""  // true
0 == ""      // true
*/

// Nullish Coalescing Operator (??)

/*
Returns the first value that is
NOT null or undefined.
*/

let result;

// result = 10 ?? 20;
// result = null ?? 20;
// result = undefined ?? 20;

result = null ?? 10 ?? 20;

console.log(result);

// Ternary Operator

const teaPrice = 80;

teaPrice >= 80
  ? console.log("Price is 80 or More")
  : console.log("Price is Less than 80");