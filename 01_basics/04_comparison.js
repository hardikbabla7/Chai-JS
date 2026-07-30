// Comparison Operators

// console.log(10 > 5);    // true
// console.log(10 >= 5);   // true
// console.log(10 < 5);    // false
// console.log(10 == 10);  // true
// console.log(10 != 5);   // true

// JavaScript automatically converts strings to numbers during comparison.

// console.log("10" > 5);   // true
// console.log("05" > 2);   // true

// Comparing null with numbers

console.log(null > 0);    // false
console.log(null == 0);   // false
console.log(null >= 0);   // true

/*
Why does this happen?

- Equality (==) and comparison operators (<, >, <=, >=)
  work differently in JavaScript.

- Comparison operators convert null to 0.
- Equality (==) does NOT convert null to 0.

That's why:
null > 0   -> false
null == 0  -> false
null >= 0  -> true
*/

// Comparing undefined with numbers

console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false

/*
undefined is not converted to a number
during these comparisons, so every
comparison returns false.
*/

// Strict Equality (===)

/*
=== checks both:
1. Value
2. Data Type
*/

console.log("10" === 10); // false (string !== number)