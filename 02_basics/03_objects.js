// Singleton
// Object.create()

// Object Literals

const userId = Symbol("userId");

const user = {
  name: "Hardik",
  "full name": "Hardik Babla",
  age: 20,
  [userId]: "HDK101",
  city: "Dehradun",
  email: "hardik@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// Accessing Object Properties

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(typeof user[userId]);

// Updating Object Properties

user.email = "hardik@outlook.com";

// Object.freeze(user);

user.email = "hardik@gmail.com";

// console.log(user);

// Adding Methods to an Object

user.greet = function () {
  console.log("Hello, User!");
};

user.greetUser = function () {
  console.log(`Hello, ${this.name}!`);
};

user.greet();
user.greetUser();