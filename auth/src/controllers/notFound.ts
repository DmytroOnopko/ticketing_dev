import { NextFunction, Request, Response } from "express";

import { NotFoundError } from "../errors/notFoundError";

export const notFound = async (req: Request, res: Response, next: NextFunction) => {
    throw new NotFoundError();
};
