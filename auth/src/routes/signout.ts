import express from 'express';

import { Paths } from "../shell/paths";
import { signOut } from "../controllers/signout";

export const signOutRouter = express.Router();

signOutRouter.post(Paths.SIGN_OUT, signOut);
