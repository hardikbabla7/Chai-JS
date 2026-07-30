// Dates

const currentDate = new Date();

// console.log(currentDate);
// console.log(currentDate.toString());
// console.log(currentDate.toDateString());
// console.log(currentDate.toLocaleString());
// console.log(typeof currentDate);

// Creating Date Objects

// const courseStartDate = new Date(2026, 7, 1);
// const courseStartDate = new Date(2026, 7, 1, 10, 30);
// const courseStartDate = new Date("2026-08-01");

const courseStartDate = new Date("08-01-2026");

// console.log(courseStartDate.toLocaleString());

// Current Timestamp

const currentTimeStamp = Date.now();

// console.log(currentTimeStamp);
// console.log(courseStartDate.getTime());
// console.log(Math.floor(Date.now() / 1000)); // Convert milliseconds to seconds

// Date Methods

const today = new Date();

console.log(today);

console.log(today.getMonth() + 1); // Months start from 0
console.log(today.getDay());       // Sunday = 0, Monday = 1 ...

// Formatting Date

console.log(
  today.toLocaleString("default", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })
);