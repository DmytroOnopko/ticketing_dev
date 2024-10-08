import { Request, Response } from "express";

type CurrentUserType = (req: Request, res: Response) => void;

export const currentUser: CurrentUserType = ({currentUser}, res) =>
    res.status(200).send({ currentUser });
