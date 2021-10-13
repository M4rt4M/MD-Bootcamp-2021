import { lowestIndex } from "./LowestIndex";

describe("Find Lowest Index", () => {
    it("Should return 2 if given [3, 2, 1]", () => {
        expect(lowestIndex([3, 2, 1])).toBe(2);
    })

    it("Should return 0 if given [1, 2, 7, 1]", () => {
        expect(lowestIndex([1, 2, 7, 1])).toBe(0);
    })
})