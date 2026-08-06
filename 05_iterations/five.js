// forEach() Method

/*
The 'forEach()' method executes
a callback function once for
each element in an array.
*/

const languages = ["JavaScript", "Ruby", "Python", "C++", "Java"];

// Using an Anonymous Function

languages.forEach(function (language) {
  // console.log(language);
});

// Using an Arrow Function

languages.forEach((language) => {
  // console.log(language);
});

// Passing a Function Reference

function printLanguage(language) {
  console.log(language);
}

// languages.forEach(printLanguage);

/*
The callback function can also
access the current index and
the original array.
*/

/* 
languages.forEach((language, index, array) => {
    console.log(language, index, array);
}); 
*/

// Array of Objects

const programmingLanguages = [
  {
    languageName: "JavaScript",
    fileExtension: ".js",
  },
  {
    languageName: "Java",
    fileExtension: ".java",
  },
  {
    languageName: "Python",
    fileExtension: ".py",
  },
];

programmingLanguages.forEach((language) => {
  console.log(language.languageName);
});