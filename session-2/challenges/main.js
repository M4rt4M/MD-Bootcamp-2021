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
piePrice = 1.99; // BUT throws error - cannot be edited

// Naming conventions
let lastName; // camel-case

// make sure the names are informative

// variables can start with letter, $, or underscore