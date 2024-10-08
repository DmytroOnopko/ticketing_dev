import jwt from 'jsonwebtoken';

type Payload<Data extends object = object> = Data;

export class JwtService {
    protected constructor() {};

    static generate<GenerateData extends object>(payload: Payload<GenerateData>) {
        return jwt.sign({
            ...payload
        }, process.env.JWT_KEY!)
    }

    static verify<VerifyPayload extends object>(token: string) {
        try {
            return jwt.verify(token, process.env.JWT_KEY!) as VerifyPayload;
        } catch (e) {
            return undefined;
        }
    }
}
