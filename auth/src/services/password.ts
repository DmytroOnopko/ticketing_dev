import {scrypt, randomBytes} from 'crypto';
import {promisify} from 'util'

const scryptAsync = promisify(scrypt);

export class PasswordService {
    protected constructor() {};

    static async toHash(pass: string) {
        const salt = randomBytes(8).toString('hex');
        const hashedPass = (await scryptAsync(pass, salt, 64) as Buffer).toString('hex');

        return `${hashedPass}.${salt}`;
    };

    static async compare(storedPass: string, suppliedPass: string) {
        const [hashedPass, salt] = storedPass.split('.');
        const suppliedHashedPass = (await scryptAsync(suppliedPass, salt, 64) as Buffer).toString('hex');

        return hashedPass === suppliedHashedPass;
    };
}

