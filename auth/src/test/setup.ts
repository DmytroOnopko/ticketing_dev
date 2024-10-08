import {MongoMemoryServer} from "mongodb-memory-server";
import mongoose from "mongoose";
import app from "../app";

let mongo: MongoMemoryServer;

beforeAll(async () => {
    process.env.JWT_KEY = 'JWT_KEY';

    mongo = await MongoMemoryServer.create();
    const mongoUri = mongo.getUri();

    await mongoose.connect(mongoUri, {})
})

beforeEach(async () => {
    if (mongoose.connection.db) {
        const collections = await mongoose.connection.db.collections();

        collections.forEach((item) => item.deleteMany({}));
    }
});

afterAll(async () => {
    if (mongo) {
        await mongo.stop();
    }
    await mongoose.connection.close();
});

