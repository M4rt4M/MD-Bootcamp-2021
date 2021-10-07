/*

    Write a program which 
    
    - return "fizz" if the number is a multiple of 3
    
    - return "buzz" if its multiple of 5
    
    - return "fizzbuzz" if the number is divisible by both 3 and 5
    
    - If the number is not divisible by either 3 or 5 then it should just return the number itself

    Bonus: 

    Enhance your program to print out the outcome if provided a range of numbers 1 to 20. For example it should print: 
    1 2 fizz 4 buzz fizz ...

*/

import {fizzBuzz, fizzBuzzRange} from "./fizzBuzz"

describe("fizzBuzz", () => {
    // is it a number
    it("should throw an error if input is not a number", () => {
        let input = 'a';
        expect(() => fizzBuzz(input)).toThrow("The input must be a number")
    })

    // multiple of 3
    it("should return 'fizz' if it's a multiple of 3", () => {
        expect(fizzBuzz(3)).toBe("fizz");
        expect(fizzBuzz(6)).toBe("fizz");
        expect(fizzBuzz(9)).toBe("fizz");
    })


    // multiple of 5
    it("should return 'buzz' if it's a multiple of 5", () => {
        let input = 5;
        let result = fizzBuzz(input);
        expect(fizzBuzz(5)).toBe("buzz");
        expect(fizzBuzz(25)).toBe("buzz");
        expect(fizzBuzz(35)).toBe("buzz");
    })

    // multiple of 3 and 5
    it("should return 'fizzbuzz' if it's a multiple of 3 and 5", () => {
        expect(fizzBuzz(15)).toBe("fizzbuzz");
        expect(fizzBuzz(60)).toBe("fizzbuzz");
    })
    
    // every other number returns itself
    it("should return the number itself if not divisible by either 3 or 5", () => {
        expect(fizzBuzz(1)).toBe(1);
        expect(fizzBuzz(7)).toBe(7);
    })
})

describe("fizzBuzzRange", () => {
    /*it("should throw an error if input is not array", () => {
        let input = 'a';
        expect(() => fizzBuzz(input)).toThrow("The input must be array")
    })*/
})