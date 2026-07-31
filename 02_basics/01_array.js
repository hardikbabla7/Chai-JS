// Arrays

const studentMarks = [85, 90, 78, 92, 88];
const programmingLanguages = ["JavaScript", "Python"];

const rollNumbers = new Array(101, 102, 103, 104);

// console.log(studentMarks[1]);

// Array Methods

// studentMarks.push(95); // Add an element at the end.
// studentMarks.push(99);
// studentMarks.pop();     // Remove the last element.

// studentMarks.unshift(80); // Add an element at the beginning.
// studentMarks.shift();     // Remove the first element.

console.log(studentMarks);

// console.log(studentMarks.includes(90)); // true
// console.log(studentMarks.indexOf(92));  // 3

// const marksInString = studentMarks.join();

// console.log(studentMarks);
// console.log(marksInString);
// console.log(typeof marksInString); // string

// slice() vs splice()

console.log("Original Array:", studentMarks);

const slicedMarks = studentMarks.slice(1, 3);
console.log("After slice():", slicedMarks);

console.log("Original Array After slice():", studentMarks);

const splicedMarks = studentMarks.splice(1, 3);
console.log("After splice():", splicedMarks);

console.log("Original Array After splice():", studentMarks);