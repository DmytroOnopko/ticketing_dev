import { agent as request } from "supertest";

import { Paths } from "../../shell/paths";
import app from "../../app";

const validCreds = {
    email: 'test123@test.com',
    password: '123456789'
}

const notValidCreds = {
    email: 'test@test',
    password: '12'
}

const emptyCreds = {
    email: '',
    password: ''
}

const signUp = async (creds: {email: string, password: string}) => await request(app)
    .post(Paths.SIGN_UP)
    .send(creds)


describe('POST /signup', () => {
    describe('Successful cases', () => {
        it('return 201 and user on save', async () => {
            const res = await signUp(validCreds);

            expect(res.status).toEqual(201)
            expect(res.body.email).toEqual(validCreds.email);
        });

        it('sets a cookie after successful signup', async () => {
            const res = await signUp(validCreds);
            const jwt = res.get('Set-Cookie')?.[0]?.split(';')?.[0]?.split('=')?.[1];

            expect(jwt).toBeDefined();
        });
    })

    describe('Conflict cases', () => {
        it('returns 409 if user already exists', async () => {
            await signUp(validCreds);
            const res = await signUp(validCreds);

            expect(res.status).toEqual(409);
            expect(res.body.errors[0].message).toEqual('User with this email already exists');
        });

        it('returns 409 if same credentials are sent twice', async () => {
            const res1 = await signUp(validCreds);
            expect(res1.status).toEqual(201);

            const res2 = await signUp(validCreds);
            expect(res2.status).toEqual(409);
        })
    })

    describe('Validations errors', () => {
        const expectedErrors = [
            { field: 'email', message: 'Email must be valid' },
            { field: 'password', message: 'Password must be valid' }
        ];

        const testCases = [
            {
                description: 'returns 400 with invalid credentials',
                creds: notValidCreds,
                expectedErrors
            },
            {
                description: 'returns 400 with empty credentials',
                creds: emptyCreds,
                expectedErrors
            }
        ];

        it.each(testCases)(
            '$description',
            async ({ creds, expectedErrors }) => {
                const res = await signUp(creds);

                expectedErrors.forEach((error, index) => {
                    expect(res.body.errors[index].field).toEqual(error.field);
                    expect(res.body.errors[index].message).toEqual(error.message);
                });

                expect(res.status).toEqual(400);
            }
        );
    });
});
