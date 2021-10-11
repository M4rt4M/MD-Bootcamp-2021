import { calculator } from "./StringCalc.js";

describe("StringCalculator", () => {

    it("should return 0 if given empty string", () => {
        const result = calculator("");
        expect(result).toBe(0);
    });

});