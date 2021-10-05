// for loop
/* for (start value - best to init with let; 
        do loop while this is true for start var;
        change to start value) */

for (let i = 0; i <10; i+=2) {
    console.log('i = ', i);
};

const numbers = [1, 3, 7, 12];

for (let i = 0; i <numbers.length; i++) {
    const doubled = numbers[i]*2;
    console.log(doubled);
};

// i no longer exists

// DO NOT DO THIS - INFINITE LOOP:
/*for (;;){
    console.log('Nooooooooo!!!!!')
}
*/

// While Loop:

let i = 0;
while (i < 10) {
  console.log("while i =>", i);
  i++;
}

// This is also a way of using while loops:
let ovenOn = true;

while (true) {
  if (ovenOn) {
    ovenOn = false;
    // take cake out...
    console.log("Exiting while");
    break;
  }
}

// For Loop
const films = ["Thriller", "Green Mile", "Saw"];

for (let i = 0; i < films.length; i++) {
  console.log("Films ==>", films[i]);
}

let counter = 0;
for (let film of films) {
  console.log("Films ==>", counter, film);
  counter++;
}

// Array Function forEach:
films.forEach(function (film, index) {
  console.log(index, film);
});

// ES6:
films.forEach((film, idx) => {
  console.log("ES6 ForEach", idx, film);
});

films // chaining higher order functions
  .sort()
  //.filter(film => film.startsWith('T'))
  .map((film) => film.toUpperCase())
  .forEach((filmAsUpper) => console.log(filmAsUpper));

console.log(films);
