// for...in Loop

/*
The 'for...in' loop is used to
iterate over the keys of an
Object or the indexes of an Array.
*/

// Iterating Over an Object

const programmingLanguages = {
  js: "JavaScript",
  cpp: "C++",
  py: "Python",
  rb: "Ruby",
};

for (const shortName in programmingLanguages) {
  // console.log(`${shortName} stands for ${programmingLanguages[shortName]}`);
}

// Iterating Over an Array

const languages = ["JavaScript", "Python", "C++", "Java", "Ruby"];

for (const index in languages) {
  // console.log(languages[index]);
}

/*
Maps are not iterable using
'for...in' because they do not
have enumerable properties.
*/

/* 
const countries = new Map();

countries.set("IN", "India");
countries.set("US", "United States");
countries.set("FR", "France");

for (const key in countries) {
  console.log(key);
}
*/