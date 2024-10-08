import { NextFunction, Request, Response } from "express";
import { NotAuthorizedError } from "../errors/notAuthorizedError";

type AuthMid = (req: Request, res: Response, next: NextFunction) => void;

export const authMid: AuthMid = (req, res, next) => {
    if (!req.currentUser) {
        throw new NotAuthorizedError();
    }

    next();
}
