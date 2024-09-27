import express from "express";
import { notFound } from "../controllers/notFound";

export const notFoundRouter = express.Router();

notFoundRouter.all('*', notFound);
