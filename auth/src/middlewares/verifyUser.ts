import { NextFunction, Request, Response } from "express";
import { CurrentUser } from "../types";
import { JwtService } from "../services/jwt";

type VerifyUserMid = (req: Request, res: Response, next: NextFunction) => void;

const MSG = 'JWT verification is failed';

export const verifyUserMid:VerifyUserMid = (req, res, next) => {
    if (!req.session?.jwt) {
        return next();
    }

    try {
        req.currentUser = JwtService.verify<CurrentUser>(req.session?.jwt);
    } catch (e) {
        console.error(MSG)
    } finally {
        next()
    }
}
