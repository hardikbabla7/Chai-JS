// 'this' Keyword

const user = {
  userName: "Hardik",
  age: 20,

  welcomeUser() {
    console.log(`${this.userName}, welcome to the website!`);
    // console.log(this);
  },
};

// user.welcomeUser();
// user.userName = "Rahul";
// user.welcomeUser();
// console.log(this); // {} in Node.js

/*
Inside a regular function:

- 'this' refers to the global object
  (or undefined in strict mode).
- It does NOT refer to the function itself.
*/

/*
function printUser() {
  const userName = "Hardik";
  console.log(this.userName);
}

printUser();
*/

/*
const printUser = function () {
  const userName = "Hardik";
  console.log(this.userName);
};

printUser();
*/

// Arrow Function

const printThis = () => {
  console.log(this);
};

// printThis();

/*
Arrow Function with Explicit Return

const addNumbers = (firstNum, secondNum) => {
  return firstNum + secondNum;
};

console.log(addNumbers(10, 20));
*/

/*
Arrow Function with Implicit Return

const addNumbers = (firstNum, secondNum) => firstNum + secondNum;

const addNumbers = (firstNum, secondNum) => (
  firstNum + secondNum
);
*/

/*
Returning an Object from an Arrow Function
*/

const getUser = () => ({
  userName: "Hardik",
});

console.log(getUser());

/*
Arrow functions are commonly used with:

- map()
- filter()
- forEach()
*/

/*
const numbers = [4, 5, 6, 2, 9, 14];

numbers.forEach((number) => {
  console.log(number);
});
*/