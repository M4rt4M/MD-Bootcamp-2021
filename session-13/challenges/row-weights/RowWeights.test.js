import { rowWeights } from "./RowWeights";

describe("Row Weights", () => {
    
    it("Should return the input if only 2 args given", () => {
        expect(rowWeights([1, 2])).toEqual([1, 2]);
    })

    it("Should return [16, 20] input if given [1, 2, 3, 4, 5, 6, 7, 8]", () => {
        expect(rowWeights([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([16, 20]);
    })

    it("Should return [4, 20] input if given [1, 2, 1, 4, 1, 6, 1, 8]", () => {
        expect(rowWeights([1, 2, 1, 4, 1, 6, 1, 8])).toEqual([4, 20]);
    })
})