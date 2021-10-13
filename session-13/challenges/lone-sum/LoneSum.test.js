import { loneSum } from "./LoneSum";

describe("Lone Sum", () => {
    it("Should throw an error if any value given is not a number", () => {
        expect(()=>loneSum(1, 2, "abc")).toThrow("This function only accepts numbers");
    })
    
    it("Should return sum of the numbers if they're all different", () => {
        expect(loneSum(1, 2, 3)).toBe(6);
        expect(loneSum(1, 7, 9)).toBe(17);
    })

    it("Should return 5 if given (1, 5, 1)", () => {
        expect(loneSum(1, 5, 1)).toBe(5);
    })

    it("Should return 0 if given (1, 1, 1)", () => {
        expect(loneSum(1, 1, 1)).toBe(0);
    })
})