// ------- RECAP -------

const album = {
    title: '21',
    artist: 'Adele',
    year: 2011,
    songs: [
        {
            name: 'Rolling in the Deep',
        },
        {
            name: 'Rumour has it',
        },
        {
            namme: 'Turning Tables',
        }
    ],
    info() {
       return `${this.title} was created by ${this.artist}`; 
    }
};

// accessing properties using dot notation
console.log(album.info());

delete album.info;

// object to JSON
let albumAsString = JSON.stringify(album);
console.log(albumAsString);

// JSON to object

let albumAsObject = JSON.parse(albumAsString);
console.log(albumAsObject);

// ------- S3 -------

// Strings

const nameExample = 'John Smith';

console.log(nameExample.length);
console.log(nameExample.toUpperCase());
console.log(nameExample.toLowerCase());

const john = nameExample.substr(0, 4);
console.log(john);

const phoneNo = "123 456 789";
const phoneParts = phoneNo.split(" ");
console.log(phoneNo, " => ", phoneParts);

const emailAddress = "foo@bar.com";
console.log("@ symbol is at index ", emailAddress.indexOf("@"));
console.log("If the symbol is not present the function returns ", emailAddress.indexOf("%"));

// Arrays

/* Dictionary:
    higher order function - takes another function as an argument, 
    or returns a function as it's result */

const countries = [
    "England",
    "France",
    "Italy",
    "Poland",
    "Egypt",
    "Brazil"
];

// ES5
/*const zCountries = countries.filter(function(country) {
    return country.startsWith("P");
}); */

// ES6
const zCountries = countries.filter(country => country.startsWith("P"));

console.log("Countries starting with P: ", zCountries);

// MAP

const people = [
    {
        name: 'jon snow', property: 'knows nothing',
    },
    {
        name: 'the lannister', property: 'pays their debts',
    }
];

const peopleArray = people.map(person => { 
    return {
        name: person.name.toUpperCase(),
        property: person.property,
        dateCreated: new Date(),
    }       
});

console.log(peopleArray);

// SOME

const fruit = ["apple", "banana", "cherry"];

/* const fruitResult = fruit.some(function(fruit) {
    return fruit == "apple";
}); */

const fruitResult = fruit.some(fruit => fruit == "apple");

console.log(fruitResult);

// SOME with objects

const footballTeams = [
    {
        name: 'Manchester United',
        nationality: ['English', 'French']
    },
    {
        name: 'Liverpool',
        nationality: ['Brazilian', 'Irish']
    }
];

const hasEngPlayer = footballTeams.some(team => team.nationality.includes('English'));
console.log('hasEngPlayer: ', hasEngPlayer);

// SORT
let words = ['numbers', 'letters', 'alphabet'];
console.log(words.sort()); // natural siorting - like strings

let numbers = [234, 45, 12, 87, 9];
const sortNumbers = [...numbers].sort(function(a, b) {
    return a== b 
            ? 0 : a > b 
            ? 1 : -1; // should work with return a-b
});
console.log('Unsorted: ', numbers, ', Sorted: ', sortNumbers);

let animals = ['lion', 'Zebra', 'turtle'];
console.log(animals.sort());

const sortedCaseInsensitiveAnimals = [...animals].sort((a, b) => {
    let firstAsUpper = a.toUpperCase();
    let secondAsUpper = b.toUpperCase();
  
    if (firstAsUpper === secondAsUpper) {
      return 0;
    } else if (firstAsUpper > secondAsUpper) {
      return 1;
    } 
    
    return -1;
  });
  
  console.log("sorted Animals ignoring case", sortedCaseInsensitiveAnimals);
  
// Push
const places = [];

places.push(
    {
    name: 'Barcelona',
    population: 100_000_000
    },
    {
    name: 'Manchester',
    population: 50_000_000
    }
);

console.log(places);

// Pop
let pets = ['dog', 'cat', 'rabbit'];
const myPet = pets.pop();
//console.log('What is left in the array: ', pets);

// Unshift
pets.unshift('hamster');
console.log('What is left in the array: ', pets);

// Object destructuring

const person = {
    name: 'John',
    address: {
        street: '1st Street',
        city: 'Manchester',
        postcode: 'M1'
    },
    hobbies: ['sports', 'music', 'gardening']
}

const {
    name, 
    address: {
        city
    }, 
    hobbies}= person
console.log('Name', name);
console.log('Hobbies', hobbies);
console.log('City', city);

// Array destructuring - use square brackets

const myList = ['a', 'b', 'c', 'd'];
const [letter1, letter2,,letter4] = myList;
console.log('My chosen letters are ', letter1, letter2, letter4);

// Operators
let a = 1;

a++; //increment by 1 (post)
++a; //(pre)

a += 3; //increment by a number different from 0
a -=2;

let modulus = a % 2; //remainder from division

// Equality (forces change of the data type)
let classSize = '14';

console.log((classSize == 14) ? true : false); // same with !=

// Strict equality (includes data type check)
console.log((classSize === 14) ? true : false); 
// same with !== for strict negation
