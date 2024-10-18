import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import cors from 'cors';

import { notFoundRouter } from "./routes/notFound";
import { signInRouter } from "./routes/signin";
import { signOutRouter } from "./routes/signout";
import { signUpRouter } from "./routes/signup";
import { currentUserRouter } from './routes/currentUser';

import { errorMid } from "./middlewares/errorHandler";

import { CurrentUser } from "./types";

declare global {
    namespace Express {
        interface Request {
            currentUser?: CurrentUser;
        }
    }
}

const app = express();

app.set('trust proxy', true);

app.use(cors())
app.use(json());
app.use(cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',

}));

app.use(currentUserRouter)
app.use(signInRouter)
app.use(signOutRouter)
app.use(signUpRouter)

app.use(notFoundRouter)
app.use(errorMid)

export default app;
