let userScore = "33";

// console.log(typeof userScore);
// console.log(typeof(userScore));

let scoreInNumber = Number(userScore);

// console.log(typeof scoreInNumber);
// console.log(scoreInNumber);

/*
Number Conversion

"33"        -> 33
"33abc"     -> NaN
"Hardik"    -> NaN
undefined   -> NaN
null        -> 0
true        -> 1
false       -> 0
*/

let userName = "Hardik";
let isUserLoggedIn = Boolean(userName);

// console.log(isUserLoggedIn);

/*
Boolean Conversion

1          -> true
0          -> false
""         -> false
"Hardik"   -> true
*/

let totalMarks = 95;

let marksInString = String(totalMarks);

// console.log(marksInString);
// console.log(typeof marksInString);

// Basic Arithmetic Operations

let price = 500;
let discountPrice = -price;

// console.log(discountPrice);

// console.log(10 + 5);   // 15
// console.log(10 - 5);   // 5
// console.log(10 * 5);   // 50
// console.log(10 / 5);   // 2
// console.log(10 ** 2);  // 100
// console.log(10 % 3);   // 1

// String Concatenation

let firstName = "Hardik";
let lastName = " Babla";

let fullName = firstName + lastName;

// console.log(fullName);

// String and Number Operations

// console.log("1" + 2);      // "12"
// console.log(1 + "2");      // "12"
// console.log("1" + 2 + 2);  // "122"
// console.log(1 + 2 + "2");  // "32"

// console.log((3 + 4) * 5 % 3);

// Unary Plus Operator

// console.log(true);   // true
// console.log(+true);  // 1
// console.log(+"");    // 0

let firstValue, secondValue, finalValue;

firstValue = secondValue = finalValue = 2 + 2;

// Increment Operator

let visitorCount = 100;

++visitorCount;

console.log(visitorCount);