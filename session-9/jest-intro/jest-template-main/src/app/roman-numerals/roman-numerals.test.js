import {romanNumerals} from "./roman-numerals"

describe("", () => {
    it("should return I when given 1", () => {
        expect(romanNumerals(1)).toBe("I")
    })

    it("should return II when given 2", () => {
        expect(romanNumerals(2)).toBe("II")
    })

    it("should return IV when given 4", () => {
        expect(romanNumerals(4)).toBe("IV")
    })

    it("should return V when given 5", () => {
        expect(romanNumerals(5)).toBe("V")
    })

    it("should return X when given 10", () => {
        expect(romanNumerals(10)).toBe("X")
    })
})