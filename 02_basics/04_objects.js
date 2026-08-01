// Singleton Object

// const employee = new Object();

const employee = {};

employee.id = "EMP101";
employee.name = "Hardik";
employee.isLoggedIn = false;

// console.log(employee);

// Nested Objects

const student = {
  email: "hardik@gmail.com",
  fullName: {
    userName: {
      firstName: "Hardik",
      lastName: "Babla",
    },
  },
};

// console.log(student.fullName.userName.firstName);

// Combining Objects

const personalInfo = {
  firstName: "Hardik",
  age: 20,
};

const contactInfo = {
  email: "hardik@gmail.com",
  city: "Dehradun",
};

const accountInfo = {
  isLoggedIn: true,
  role: "Student",
};

// const userProfile = Object.assign(personalInfo, contactInfo, accountInfo);
// console.log(userProfile);

// const userProfile = Object.assign({}, personalInfo, contactInfo, accountInfo);
// console.log(userProfile);

const userProfile = {
  ...personalInfo,
  ...contactInfo,
  ...accountInfo,
};

// console.log(userProfile);

// Array of Objects

const users = [
  {
    id: "USR101",
    email: "hardik@gmail.com",
  },
  {
    id: "USR102",
    email: "rahul@gmail.com",
  },
  {
    id: "USR103",
    email: "aman@gmail.com",
  },
];

console.log(users[1].email);

// Object Methods

console.log(employee);
console.log(Object.keys(employee));
console.log(Object.values(employee));
console.log(Object.entries(employee));
console.log(employee.hasOwnProperty("isLoggedIn"));