import {addAllNumbers, divide} from "./Calculator";
// ^best parctice to use relative path

// Group multiple individual tests into describe() block
describe("Calculator: ", () => {
    it("Should add all numbers", () => {
    /* AAA:
    Arrange (optional - example data, omit if function does not take any args)
    Act
    Assert*/

    // Arrange
        const arr = [1, 2, 3];

    // Act
        const result = addAllNumbers(arr);
    
    // Assert
        expect(result).toBe(6);

})
// ^anonymous function is used here becuase it's only needed for this one test

    it("Should divide two numbers", () => {
        const num1 = 10;
        const num2 = 2;

        const result = divide(num1, num2);

        expect(result).toBe(5);
    });

    // You can organise tests further into smaller blocks
    describe("Invalid Inputs:", () => {
        // organising tests is useful e.g. when you need to skip certain category of tests
        // convention: test() for a single one, describe() + it()
        it("Should not add text when adding numbers", () => {
            // Arrange
            const arr = [1, 2, 3, "hello", "5"];

            // Act
            const result = addAllNumbers(arr);
        
            // Assert
            expect(result).toBe(6);
        })

        it.skip("Should throw error when dividing by zero", () => {
            // expect(() => divide(2, 0)) //finish this block
        })
    });
});

