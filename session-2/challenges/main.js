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

names.push('Bob');
console.log(names);

// Object

const productInfo = {
    name: "heater",
    manufacturer: "Toshiba",
    price: 99.99,
    reviews: [], // the comma at the end is okay for some reason
};

console.log(productInfo);

const review = {
    date: new Date(),
    comment: "It was hot",
    stars: 3,
}

productInfo.reviews.push(review);

console.log(productInfo);

let name = "Wheelie The Bike"
let bike = {
    name, // in ES6 there is no need to do name: name
};

console.log(bike);

// Boolean

let isItRaining = false;

// null

let response = null; // empty value

// undeined - var declared but not initialised (value not assigned)

// Checking variable type
console.log(typeof productInfo);

// Multidimensional array

let shoppingBasket = [
    ["Appple", 3, 0,22],
    ["Pears", 1, 0.45],
];

console.log(`this should be apple: ${shoppingBasket[0][0]}`);

// JSON - js object notation

const person = { // not JSON
    name: "Mary",
    age: 23,
    address: {
        street: "Some Drive",
        number: 12,
        postcode: "AB1 0CD"
    }
};

console.log("Person object", person);
console.log("Person as JSON", JSON.stringify(person));

const car = {
    make: "Ford",
    model: "Fiesta",
    describe () {
        return `${this.make} ${this.model}`
    }
};

console.log(car.describe());

const personAsStr = JSON.stringify(person); // to JSON
console.log(personAsStr);

const personAsObj = JSON.parse(personAsStr); // back to object
console.log(personAsObj);

// NB. If you add a function to an object, you won't be able to turn it back to JSON

// Date

const dateNow = new Date();

console.log(dateNow);