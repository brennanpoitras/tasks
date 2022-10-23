import { isValid } from "./validpassword";

describe("Testing isValid function", () => {
    //Testing 2 valid passwords

    test("Testing Valid Passwords", () => {
        expect(isValid("password1234567$")).toEqual(true);
        expect(isValid("p123$456#word789")).toEqual(true);
    });

    //Testing invalid passwords
    test("Testing a password that is not 16 characters long", () => {
        expect(isValid("password12$")).toEqual(false);
    });

    test("Testing passwords that do not include all fields", () => {
        expect(isValid("passwordpasswor$")).toEqual(false);
        expect(isValid("passwordpasswor1")).toEqual(false);
        //No need to check a password that does not contain letters
        //because it will fail the test of not starting with a letter anwyay.
    });

    test("Testing passwords that do not start with a letter", () => {
        expect(isValid("1password234567$")).toEqual(false);
        expect(isValid("$p123456#word789")).toEqual(false);
    });
});
