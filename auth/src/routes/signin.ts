import express from 'express';
import { body } from 'express-validator';

import { validationReq } from "../middlewares/validationReq";
import { signIn } from "../controllers/signin";

export const signInRouter = express.Router();

const bodyValidator = [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().notEmpty().withMessage('Password must be provided'),
];

signInRouter.post('/api/users/signin', bodyValidator, validationReq, signIn);
