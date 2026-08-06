// For Loop

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    // console.log("5 is the best i.");
  }
  // console.log(i);
}

// Nested For Loop

for (let i = 1; i <= 10; i++) {
  // console.log(`Multiplication i of ${i}`);

  for (let j = 1; j <= 10; j++) {
    // console.log(`${i} × ${j} = ${i * j}`);
  }
}

// Iterating Over an Array

const superHeroes = ["Flash", "Iron Man", "Thor"];
// console.log(superHeroes.length);

for (let index = 0; index < superHeroes.length; index++) {
  const hero = superHeroes[index];
  // console.log(hero);
}

// Break Statement

/*
The 'break' statement immediately
exits the loop when the specified
condition is met.
*/


for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Detected 3");
    break;
  }

  console.log(`Current Value: ${i}`);
}


// Continue Statement

/*
The 'continue' statement skips the
current iteration and moves to
the next iteration.
*/

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Detected 3");
    continue;
  }

  console.log(`Current Value: ${i}`);
}