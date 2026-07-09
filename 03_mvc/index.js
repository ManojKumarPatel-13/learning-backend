import express from "express";
import mongoose from "mongoose";
import { router as userRouter } from "./routes/user.js";
import fs from "fs";
import { connectMongoDb } from "./connection.js"
import { logReqRes } from "./middlewares/index.js"

const app = express(); // creating a instance of express
const PORT = 3000;

// connection
connectMongoDb("mongodb://127.0.0.1:27017/practiceDB")
    .then(() => console.log("MongoDB Connected"))


// Middleware 
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"))

// Routes
app.use("/api/users", userRouter)

app.listen(PORT, () => {
    console.log(`Server Started at PORT: ${PORT}`);
})