import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { notFoundRouter } from "./routes/notFound";
import { signInRouter } from "./routes/signin";
import { signOutRouter } from "./routes/signout";
import { signUpRouter } from "./routes/signup";
import { currentUserRouter } from './routes/currentUser';

import { MongoService } from "./services/mongo";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.set('trust proxy', true);

app.use(json());
app.use(cookieSession({
    signed: false,
    secure: true,

}));

app.use(currentUserRouter)
app.use(signInRouter)
app.use(signOutRouter)
app.use(signUpRouter)

app.use(notFoundRouter)
app.use(errorHandler)

MongoService.start(app)

