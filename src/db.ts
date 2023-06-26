import mongoose from "mongoose";
import { MONGODB_URI } from "./config";

export const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        const conn = await mongoose.connect(MONGODB_URI);
        console.log(`Mongodb connected: ${conn.connection.name}`)
    } catch (error: any) {
        console.error(`Error: ${error.message}`);
        process.exit(1)
    }
}