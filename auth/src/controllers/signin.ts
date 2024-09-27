import { Request, Response } from "express";
import { JwtService } from "../services/jwt";
import { PasswordService } from "../services/password";
import { BadReqError } from "../errors/badReqError";
import { User, UserModel } from "../models/user";

export const signIn = async (req: Request, res: Response) => {
    const {email, password} = req.body;

    const existingUser = await UserModel.findOne({email}) as User | null;

    if (!existingUser) {
        throw new BadReqError('Invalid credentials');
    }

    const passwordMatch = await PasswordService.compare(existingUser.password, password);

    if(!passwordMatch) {
        throw new BadReqError('Invalid credentials');
    }

    const userJwt = JwtService.generate({id: existingUser?.id, email: existingUser.email});

    req.session = {
        jwt: userJwt
    }

    res.status(201).send(existingUser);
};
