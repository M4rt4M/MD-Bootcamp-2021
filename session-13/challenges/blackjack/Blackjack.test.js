import {blackjack} from './Blackjack';

describe("Blackjack", () => {
    it ("Should throw an error if any of two numbers is <=0", () => {
        expect(()=>blackjack(-5, 0)).toThrow("Both numbers must be greater than 0");
    });
    
    it ("Should return 0 if both numbers are over 21", () => {
        expect(blackjack(23, 99)).toBe(0);
        expect(blackjack(101, 72)).toBe(0);
    })
    
    it ("Should return 19 if given (2, 19).", () => {
        expect(blackjack(19, 2)).toBe(19);
    });

    it ("Should return 19 if given (2, 19).", () => {
        expect(blackjack(19, 2)).toBe(19);
    })

    it ("Should return 20 if given (22, 20).", () => {
        expect(blackjack(22, 20)).toBe(20);
    })

    it ("Should return 15 if given (15, 30).", () => {
        expect(blackjack(15, 30)).toBe(15);
    })

    it ("Should return 21 if given (21, 21).", () => {
        expect(blackjack(21, 21)).toBe(21);
    })
});