import {Request, Response} from 'express';
import { JwtService } from "../services/jwt";
import { BadReqError } from "../errors/badReqError";
import { UserModel } from "../models/user";

export const signUp = async (req: Request, res: Response) => {
    const {email, password} = req.body;
    const existingUser = await UserModel.findOne({email});

    if (existingUser) {
        throw new BadReqError('User with this email already exists', 409)
    }

    const user = UserModel.build({email, password});
    await user.save()

    const userJwt = JwtService.generate({id: user.id, email: user.email});
    req.session = {
        jwt: userJwt
    }

    res.status(201).send(user);
};
