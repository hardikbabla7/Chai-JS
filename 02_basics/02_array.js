// Combining Arrays

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express.js", "MongoDB"];

// frontend.push(backend);
// console.log(frontend);
// console.log(frontend[3][0]);

// concat() returns a new array.
const techStack = frontend.concat(backend);

// console.log(techStack);

// Spread Operator (...)

const allTech = [...frontend, ...backend];

// console.log(allTech);

// Flattening Nested Arrays

const nestedArr = [1, 2, 3, [4, 5], [6, 7, [8, 9, 10], 11], 12];

const flatArr = nestedArr.flat(Infinity);

// console.log(flatArr);

// Array Utility Methods

console.log(Array.isArray("JavaScript")); // false

console.log(Array.from("JavaScript"));
// ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

console.log(
  Array.from({
    name: "Hardik",
    age: 20,
  })
);

/*
Interesting Case:
    Returns an empty array because Array.from()
    doesn't know whether to use the object's
    keys or values.
*/

// Creating an Array from Individual Values

const mathMarks = 95;
const scienceMarks = 90;
const englishMarks = 98;

console.log(Array.of(mathMarks, scienceMarks, englishMarks));