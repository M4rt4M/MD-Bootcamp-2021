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
            ? 1 : -1;
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
  