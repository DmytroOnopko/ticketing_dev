import { PasswordService } from "../../services/password";

const password = '123456789';

describe('PasswordService', () => {
    it('toHash should return hashed password', async () => {
        const result = await PasswordService.toHash(password);

        const [hashedPass, salt] = result.split('.');

        expect(hashedPass).toBeDefined();
        expect(hashedPass.length).toBeGreaterThan(0);
        expect(salt).toBeDefined();
        expect(salt.length).toBe(16);
    });

    it('compare should return true if passwords are equal', async () => {
        const storedPass = await PasswordService.toHash(password);
        const result = await PasswordService.compare(storedPass, password);

        expect(result).toBeTruthy();
    });

    it('compare should return false if passwords are not equal', async () => {
        const storedPass = await PasswordService.toHash(password);
        const result = await PasswordService.compare(storedPass, `${password}not_equal`);

        expect(result).toBeFalsy();
    })
})
