import dotenv from "dotenv"
import connectDB from "./db/mongoose.js";

dotenv.config({
    path: './env'
})

connectDB();