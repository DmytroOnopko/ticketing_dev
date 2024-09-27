import express from 'express';
import {body} from 'express-validator';

import { validationReq } from "../middlewares/validationReq";
import { signUp } from "../controllers/signup";

export const signUpRouter = express.Router();


const bodyValidator = [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().isLength({min: 4, max: 20}).withMessage('Password must be valid'),
];

signUpRouter.post('/api/users/signup', bodyValidator, validationReq, signUp);
