import jwt from 'jsonwebtoken';

type Payload<Data extends object = object> = Data;

export class JwtService {
    protected constructor() {};

    static generate<Data extends object>(payload: Payload<Data>) {
        return jwt.sign({
            ...payload
        }, process.env.JWT_KEY!)
    }

    static verify(token: string) {
        try {
            return jwt.verify(token, process.env.JWT_KEY!)
        } catch (e) {
            return null;
        }
    }
}
