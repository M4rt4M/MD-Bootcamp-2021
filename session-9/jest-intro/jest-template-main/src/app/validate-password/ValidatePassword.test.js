/* Password requirements:

- at least 8 chars
- at least 1 letter
- at least 1 number  */

import {validatePassword} from "./ValidatePassword";
describe("Validate Password", () => {
    // AAA or (given) when then
    it ("Returns false when password is empty", () => {
        //expect(validatePassword("")).toBeFalsy();
        expect(validatePassword("")).toBe(false); // bestter to be specific
    });

    it ("Returns false when only numbers are in password", () => {
        const password = "12345678"
        expect(validatePassword(password)).toBe(false);
    });

    it ("Returns false when only letters are in password", () => {
        const password = "asdfghjk"
        expect(validatePassword(password)).toBe(false);
    }); 
    
    it ("Returns false when only capitalletters are in password", () => {
        const password = "AAAAAAAA"
        expect(validatePassword(password)).toBe(false);
    });

    it ("Returns false when password is less than 8 in length", () => {
        const password = "123aa"
        expect(validatePassword(password)).toBe(false);
    });

    it ("Returns true when password is at least 8 in length", () => {
        const password = "1234567a"
        expect(validatePassword(password)).toBe(true);
    });
})