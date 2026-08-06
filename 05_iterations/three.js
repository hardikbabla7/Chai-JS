// for...of Loop

/*
The 'for...of' loop is used to
iterate over iterable objects
such as Arrays, Strings, and Maps.
*/

// Iterating Over an Array

const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  // console.log(number);
}

// Iterating Over a String

const message = "Hello World!";

for (const character of message) {
  // console.log(character);
}

// Iterating Over a Map

const countries = new Map();

countries.set("IN", "India");
countries.set("US", "United States of America");
countries.set("FR", "France");
countries.set("IN", "India"); // Duplicate keys are ignored

// console.log(countries);

for (const [countryCode, countryName] of countries) {
  // console.log(`${countryCode} : ${countryName}`);
}

// Object Example

const games = {
  game1: "Need for Speed",
  game2: "Spider-Man",
};

/*
Objects are NOT iterable,
so 'for...of' cannot be used
directly with objects.

for (const [key, value] of games) {
  console.log(key, value);
}
*/