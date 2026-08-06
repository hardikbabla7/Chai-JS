// While Loop

let number = 0;

/*
while (number <= 10) {
  console.log(`Current Value: ${number}`);
  number += 2;
}
*/

// Iterating Over an Array

const superHeroes = ["Flash", "Batman", "Superman"];

let index = 0;

while (index < superHeroes.length) {
  // console.log(superHeroes[index]);
  index++;
}

// Do...While Loop

/*
The 'do...while' loop executes
the code block at least once,
even if the condition is false.
*/

let score = 11;

do {
  console.log(`Score: ${score}`);
  score++;
} while (score <= 10);