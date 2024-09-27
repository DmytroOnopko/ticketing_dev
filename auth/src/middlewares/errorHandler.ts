import {Request, Response, NextFunction} from 'express';
import { CustomError } from "../errors/customError";

type ErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => void;

export const errorHandler: ErrorHandler = (err, req, res, next) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).send({errors: err.serializedErrors()})
    }

    res.status(400).send({
        errors: [{
            message: 'Something went wrong'
        }]
    })
}
