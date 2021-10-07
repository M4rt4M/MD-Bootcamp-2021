import {cToF, fToC, convert} from "./Conversions"

/*
    0C => 32F
    1C => 33.8F
    10C => 50F
*/

describe("Conversions", () => {

    describe("Celsius to Fahren:", () => {

        it("should return 32 with input of 0", () => {
            const result = cToF(0);
            expect(result).toBe(32);
        });
    
        it("should return 33.8 with input of 1", () => {
            const result = cToF(1);
            expect(result).toBe(33.8);
        });

        it("should return 50 with input of 10", () => {
            const result = cToF(10);
            expect(result).toBe(50);
        });

        it("should return false with non-number inputs", () => {
            const result = cToF("helloWorld");
            expect(result).toBe(false);
        });

        it("should throw error with input of -273.15", () => {
            const result = cToF(-300);
            expect(result).toThrow("Temperature too low");
        })
    });

    describe("Fahren to Celsius:", () => {

        it("should return -15C with input of 5F", () => {
            const result = fToC(5);
            expect(result).toBe(-15);
        });

        it("should return -10C with input of 14F", () => {
            const result = fToC(14);
            expect(result).toBe(-10);
        });

        it("should return -5C with input of 23F", () => {
            const result = fToC(23);
            expect(result).toBe(-5);
        });

        it("should return false with non-number inputs", () => {
            const result = fToC("helloWorld");
            expect(result).toBe(false);
        });
    });

    describe("Dynamic temperature conversion:", () => {
        it("should return 32 with input (0, 'F')", () => {
            const result = convert(0, "F"); // 0C into F
            expect(result).toBe(32);
        });
        
        it("should return -15 with input (5, 'C')", () => {
            const result = convert(5, "C"); // 0C into F
            expect(result).toBe(-15);
        });
    });
    
});