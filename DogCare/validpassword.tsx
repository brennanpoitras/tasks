export function isValid(password: string): boolean {
    function checkLength(): boolean {
        //Checks the password length
        return password.length >= 16;
    }

    function includesAll(): boolean {
        //Checks that the string includes numbers, letters, and special chars
        //using a regex
        const hasNumbers = /[0-9]/.test(password);
        const hasLetters = /[a-zA-Z]/.test(password);
        const hasSpecial = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(
            password
        );
        return hasNumbers && hasLetters && hasSpecial;
    }

    function checkStart(): boolean {
        //Checks that the first char is a letter
        //using a regex
        const startsWithLetter = /[a-zA-Z]/.test(password[0]);
        return startsWithLetter;
    }

    return checkLength() && includesAll() && checkStart();
}
