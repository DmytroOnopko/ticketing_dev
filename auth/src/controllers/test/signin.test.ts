import { agent as request } from "supertest";

import app from "../../app";
import { Paths } from "../../shell/paths";

const validCreds = {
    email: 'test123@test.com',
    password: '123456789'
}

const notExistingValidCreds = {
    email: 'test1234@test.com',
    password: '123456789'
}

const signIn = async(creds: {email: string, password: string}) =>
    await request(app)
        .post(Paths.SIGN_IN)
        .send(creds);

const signUp = async (creds: {email: string, password: string}) => await request(app)
    .post(Paths.SIGN_UP)
    .send(creds)

describe('POST /signin', () => {
    beforeEach(async () => await signUp(validCreds));

    describe('Successful cases', () => {
        it('return 201 and exiting user on submit', async () => {
            const res = await signIn(validCreds);

            expect(res.status).toEqual(201);
            expect(res.body.email).toEqual(validCreds.email)

        });

        it('sets a cookie after successful signin', async () => {
            const res = await signIn(validCreds);

            expect(res.status).toEqual(201);
            expect(res.get('Set-Cookie')).toBeDefined();

        });
    })


    describe('Errors cases', () => {
        it('return 400 if user didnt exist by provided email', async () => {
            const res = await signIn(notExistingValidCreds);

            expect(res.status).toEqual(400);
            expect(res.body.errors[0].message).toEqual('Invalid email');
        });

        it('return 400 if user exist by provided email but password not valid', async () => {
            const res = await signIn({
                email: validCreds.email,
                password: `${validCreds.password}notValid`
            });

            expect(res.status).toEqual(400);
            expect(res.body.errors[0].message).toEqual('Invalid password');
        });
    })
})
