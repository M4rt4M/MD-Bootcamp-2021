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

export const fizzBuzzRange = (num1, num2) => {

    let result = [];

    for (let i = num1; i <= num2; i++) {
        result.push(fizzBuzz(i));
    }

    console.log(result);
    return result;
}

console.log(fizzBuzzRange(0, 20));