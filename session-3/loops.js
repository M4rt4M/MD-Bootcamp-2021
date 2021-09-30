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

// Ternary:
const amount = 100;
const shouldChargeTax = amount > 50 ? true : false;

// Switch Statements:
const coinInserted = 140;

switch (coinInserted) {
  case 20:
  case 50:
  case 100:
    console.log(`Inserted ${coinInserted}`);
    break;
  default:
    console.log("This machine only accepts 20p, 50p and £1");
    break;
};

const num = 2;
const classSize = 5;

switch (classSize) {
  case num < 3:
    console.log("Works");
    break;
};

// while loop

// array function forEach

// chaining higher order functions
