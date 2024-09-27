import express from 'express';
import { signOut } from "../controllers/signout";

export const signOutRouter = express.Router();

signOutRouter.post('/api/users/signin', signOut);
