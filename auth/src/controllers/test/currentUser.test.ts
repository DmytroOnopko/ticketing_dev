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

const currentUser = async(cookie?: string[]) =>
    await request(app)
        .get(Paths.CURRENT_USER)
        .set('Cookie', cookie ?? [])
        .send();

describe('GET /currentUser', () => {
    it('Successful return 200 and current user', async () => {
        const signUpRes = await signUp();

        const cookie = signUpRes.get('Set-Cookie');
        const res = await currentUser(cookie);

        expect(res.status).toEqual(200);
        expect(res.body.currentUser.email).toEqual(validCreds.email);
    });

    it('Error return 401 if not authorized', async () => {
        const res = await currentUser();

        expect(res.status).toEqual(401);
        expect(res.body.currentUser).toBeUndefined();
    })
})
