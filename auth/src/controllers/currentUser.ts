import { Request, Response } from "express";
import { JwtService } from "../services/jwt";

export const currentUser = (req: Request, res: Response) => {
    const payload = JwtService.verify(req.session?.jwt);

    res.status(201).send({
        currentUser: !req.session?.jwt ? null : payload
    });
};
