import { isValidPass } from "./validpassword";

describe("Testing isValidPass function", () => {
    //Testing 2 valid passwords

    test("Testing Valid Passwords", () => {
        expect(isValidPass("password1234567$")).toEqual(true);
        expect(isValidPass("p123$456#word789")).toEqual(true);
    });

    //Testing invalid passwords
    test("Testing a password that is not 16 characters long", () => {
        expect(isValidPass("password12$")).toEqual(false);
        expect(isValidPass("passwordpasswordpassword")).toEqual(false);
    });

    test("Testing passwords that do not include all fields", () => {
        expect(isValidPass("passwordpasswor$")).toEqual(false);
        expect(isValidPass("passwordpasswor1")).toEqual(false);
        //No need to check a password that does not contain letters
        //because it will fail the test of not starting with a letter anwyay.
    });

    test("Testing passwords that do not start with a letter", () => {
        expect(isValidPass("1password234567$")).toEqual(false);
        expect(isValidPass("$p123456#word789")).toEqual(false);
    });
});
