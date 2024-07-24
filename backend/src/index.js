import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import { dbConnection } from "./database/dbConnection.js"

const app = express();


dotenv.config({
    path: './.env'
})
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true,limit: "16kb"}))
app.use(cookieParser())
app.use(
    cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET','POST','DELETE','PUT'],
    credentials: true
}))



dbConnection();
app.listen(3000, () => {
    console.log("Server is running on port 3000")
  })