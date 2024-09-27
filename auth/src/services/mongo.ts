import { Express } from "express";
import mongoose from "mongoose";

const port = 3300;
const uri = 'mongodb://auth-mongo-srv:27017/auth';

export class MongoService {
    protected constructor() {};

    static async start(app: Express) {
        if (!process.env.JWT_KEY) {
            throw new Error('[ERROR]: JWT_KEY must be defined');
        }

        try {
            await mongoose.connect(uri);
            console.log('[SUCCESS]: Connected to MongoDB')
        } catch (e) {
            console.error('[ERROR]: Failed to connect', `${e}`)
        }

        app.listen(port, () => console.log(`[LISTENING]: port ${port}`));
    }
}
