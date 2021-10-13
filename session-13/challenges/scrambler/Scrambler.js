/* Given two strings, when passed a scrambled string, if passed a 
second one the method will return true if the second word 
contains all letters in the rest. 
*/

export const scrambler = (string1, string2) => {
    let result = false;
    if (string1.toLowerCase() === string2.toLowerCase()) {
        result = true;
    } else if (string1.length === string2.length) {
      const array1 = string1.toLowerCase().split("");
      const array2 = string2.toLowerCase().split("");
      let temp1 = 0;
      let temp2 = 0;

      array1.forEach((element) => {
        if (array2.includes(element)) {
          temp1++
        } 
      })

      array2.forEach((element) => {
        if (array1.includes(element)) {
          temp2++
        } 
      })

      if (temp1==array1.length && temp1==temp2) {
        result=true;
      }
    }

    return result;
} 

/*
// Sam's - no control of case

export const scrambler = (a, b) => {
  return a.split("").sort().join("") === b.split("").sort().join("");
} */