console.log("hello world!");
console.error("This went wrong!");
console.warn("This may go wrong");

document.getElementById("dateNow").innerHTML = new Date();  //refers to the webpage (Document Object Model)
document.getElementById("info").innerHTML = "Here is where some info can go and you can dynamically edit it using js";

// Variables

// ES5
var number; // declared
var myNumber = 6; // initialised
// var has global/function scope

// ES6
let firstName = "Jill";
console.log(firstName);

firstName = "Bob"; // vars declared with let have block scope
console.log(firstName); // and can be changed

const piePrice = 2.80; // also block-scoped
// piePrice = 1.99; // BUT throws error - cannot be edited

// Naming conventions
let lastName; // camel-case

// make sure the names are informative

// variable names can start with letter, $, or underscore

// ------ DATA TYPES ------

// Number (whole numbers, positive and negative)

let noOfSubs = 100_000_000; // easy to write big numbers with underscore in between
console.log(noOfSubs);

// String
let note = "This is a string";
let anotherNote = `Backticks are the ES6 feature.
It copies the string structure as it is.
You can also reference variables easily using this method: ${note}`;

console.log(anotherNote);

// Array

let names = ['John', 'Lauren', 'Art'];
let mixedArray = [13, 'hello', 0.76];