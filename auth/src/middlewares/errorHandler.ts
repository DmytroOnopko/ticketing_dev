import {Request, Response, NextFunction} from 'express';
import { CustomError } from "../errors/customError";

type ErrorMid = (err: Error, req: Request, res: Response, next: NextFunction) => void;

const MSG = 'Something went wrong';

export const errorMid: ErrorMid = (err, req, res, next) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).send({errors: err.serializedErrors()})
    }

    res.status(400).send({
        errors: [{
            message: MSG
        }]
    })
}
