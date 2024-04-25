import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv()

export class dbConnection{
    async connectDb(){
        
        if (!process.env.MONGO_URL) {
            throw new Error('MONGO_URL environment variable is not defined');
        }
        
        mongoose.connect(process.env.MONGO_URL).then(() => {
            console.log(`Db connected successfully`);
        }).catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        });
    }
}