import express from 'express';
import { currentUser } from "../controllers/currentUser";

export const currentUserRouter = express.Router();

currentUserRouter.get('/api/users/currentuser', currentUser);
