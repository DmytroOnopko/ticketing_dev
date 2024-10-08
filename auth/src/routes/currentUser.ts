import express from 'express';
import { Paths } from "../shell/paths";

import { authMid } from "../middlewares/auth";
import { verifyUserMid } from "../middlewares/verifyUser";
import { currentUser } from "../controllers/currentUser";

export const currentUserRouter = express.Router();

currentUserRouter.get(Paths.CURRENT_USER, verifyUserMid, authMid, currentUser);
