import {scrambler} from './Scrambler';

describe("Scrambler", () => {
    it("Should return true when two strings are the same", () => {
        expect(scrambler("abc", "abc")).toBe(true);
    })

    it("Should return true when two strings are the same, disregarding the case", () => {
        expect(scrambler("AbC", "abc")).toBe(true);
    })

    it("Should return true for abc and bca", () => {
        expect(scrambler("abc", "bca")).toBe(true);
    })

    it("Should return false for strings of different length", () => {
        expect(scrambler("abc", "bcad")).toBe(false);
        expect(scrambler("abcsdfs", "bcad")).toBe(false);
    })

    it("Should return false for strings that contain different letters", () => {
        expect(scrambler("abc", "ccc")).toBe(false);
        expect(scrambler("ccc", "bac")).toBe(false);
    })
})