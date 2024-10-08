import { agent as request } from "supertest";

import app from "../../app";
import { Paths } from "../../shell/paths";

const validCreds = {
    email: 'test123@test.com',
    password: '123456789'
}

const signUp = async () => await request(app)
    .post(Paths.SIGN_UP)
    .send(validCreds)
    .expect(201);

const signIn = async() =>
    await request(app)
        .post(Paths.SIGN_IN)
        .send(validCreds)
        .expect(201);

const signOut = async() =>
    await request(app)
        .post(Paths.SIGN_OUT)
        .send({})
        .expect(200);

describe('POST /signout', () => {
    it('clear a cookie after signout', async () => {
        await signUp();
        await signIn();

        const res = await signOut();
        const jwt = res.get('Set-Cookie')?.[0]?.split(';')?.[0]?.split('=')?.[1];

        expect(jwt).toEqual('')
    })
})
