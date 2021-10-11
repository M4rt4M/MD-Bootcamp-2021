// REGEX

// conventianally declared/initialised as const
const messageRE = /hello/;
const actualMessage = "hello";

//verifies if there is a match to a re and teturns a Boolean
if (messageRE.test(actualMessage)) {
    console.log("this matched", actualMessage)
};

const atRE = /at/g; //global tag
const phrase = `
The fat cat ran down the street.
It was searching for a mouse to eat.
`;

console.log(atRE.exec(phrase)); //search globally for the match

//https://regexr.com/

const phone = "123-999"
const arRE = /[0-9]{3}/g;

//console.log("Matches", phone.matches(areRE));
