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
