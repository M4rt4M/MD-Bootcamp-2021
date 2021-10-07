// this file is not connected with any html doc - but you can run it in the console using node

// add tweaks from Assad's solution
function customRegistration(reg = "") {
  if (reg.length != 8) {
    throw new Error('Sorry, this string is not valid');
  } 

  /* //If you want to check if a single space is included, you must conver the given string to an array
  let currentReg = Array.from(registration.toUpperCase());

  const hasSingleSpace = reg.filter((crValue) => crValue === " ").length === 1 ? true : false;

  if (!hasSingleSpace) {
    throw new Error('Registration must contain a single space');
  } */

  let lettersOfReg = reg.split("");
  let newReg = "";
  newReg += lettersOfReg[0];
  let space = lettersOfReg.indexOf(' ');
  if (space == -1) {lettersOfReg[4] = ' '}
  for (let i = 1; i < lettersOfReg.length; i++) {
    newReg += letterReplacer(lettersOfReg[i])
  }
  return newReg;
}
  
      // A 4, B 8, S 5, E 3
function letterReplacer(letter) {
  let newChar = letter;
  if (letter == "A") {
    newChar = "4";
  } else if (letter == "B") {
    newChar = "8";
  } else if (letter == "S") {
    newChar = "5";
  } else if (letter == "E") {
    newChar = "3";
  } 
    return newChar;
}
    
console.log(customRegistration("MC1 1A1B"));