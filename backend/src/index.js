import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import { dbConnection } from "./database/dbConnection.js"
import authRouter from "./routes/auth.route.js"
import noteRouter from "./routes/note.route.js"

const app = express();


dotenv.config()


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

app.use("/api/auth", authRouter)
app.use("/api/note", noteRouter)


// error handling
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal Serer Error"
  
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    })
})