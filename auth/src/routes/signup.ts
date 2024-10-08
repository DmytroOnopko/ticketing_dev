import express from 'express';
import {body} from 'express-validator';

import { Paths } from "../shell/paths";
import { validationReqMid } from "../middlewares/validationReq";
import { signUp } from "../controllers/signup";

export const signUpRouter = express.Router();


const bodyValidator = [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().isLength({min: 4, max: 20}).withMessage('Password must be valid'),
];

signUpRouter.post(Paths.SIGN_UP, bodyValidator, validationReqMid, signUp);
