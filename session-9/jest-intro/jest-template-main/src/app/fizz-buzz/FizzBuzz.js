export const fizzBuzz = (num) => {

    let result = num;

    if (typeof num !== "number"){
        throw new Error("The input must be a number");
    }

    if ((num % 15) === 0) {
        result = "fizzbuzz";
    } else if ((num % 3) === 0) {
        result = "fizz";
    } else if ((num % 5) === 0) {
        result = "buzz";
    }

    return result;
    
}

export const fizzBuzzRange = (num1, num2 = num1 + 5) => {

    let result = [];

    if (typeof num1 !== "number" || num2 !== "number"){
        throw new Error("The input must be a number");
    }

    for (let i = num1; i <= num2; i++) {
        result.push(fizzBuzz(i));
    }

    
    return result;
}


const result = document.getElementById("result-text");
const submitBtn = document.querySelector(".submit-btn");

const getSequence = (event) => {
    event.preventDefault();

    const startNum = document.getElementById("startNumber");
    const endNum = document.getElementById("endNumber");

    result.innerText = fizzBuzzRange(startNum, endNum);

}

submitBtn.addEventListener("click", getSequence);

