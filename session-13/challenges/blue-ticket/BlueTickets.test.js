import { blueTicket } from "./BlueTicket";

describe("Blue Ticket", () => {
    it("Should throw an error if any value given is not a number", () => {
        expect(()=>blueTicket(1, 2, "abc")).toThrow("This function only accepts numbers");
    })

    it("Should return 10 if any pair sums to exactly 10", () => {
        expect(blueTicket(3, 7, 4)).toBe(10);
        expect(blueTicket(13, 7, 3)).toBe(10);
    }) 

    it("Should return 5 if ab = bc+10 or ab = ac+10", () => {
        expect(blueTicket(13, 2, 3)).toBe(5);
        expect(blueTicket(2, 13, 3)).toBe(5);
    })

    it("Should return 0 in any other combination", () => {
        expect(blueTicket(3, 8, 4)).toBe(0);
    }) 

    
})