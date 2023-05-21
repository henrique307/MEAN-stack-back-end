import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

mongoose
    .connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.meyckoc.mongodb.net/?retryWrites=true&w=majority`)

const db = mongoose.connection;

db.on("error", (error) => {
    console.error(`Erro: ${error}`);
})

export {db}