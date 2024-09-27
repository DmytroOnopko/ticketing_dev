import { Request, Response, NextFunction } from 'express';
import { validationResult } from "express-validator";
import { ReqValidationError } from "../errors/reqValidationError";

type ValidationReq = (req: Request, res: Response, next: NextFunction) => void;

export const validationReq: ValidationReq  = (req, _, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        throw new ReqValidationError(errors.array())
    }

    next();
}
