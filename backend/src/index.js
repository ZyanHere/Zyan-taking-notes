import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"

const app = express();
const PORT = 8080;

dotenv.config()
app.use(cors());
app.use(bodyParser.json());


try {
    mongoose.connect(process.env.MONGO_url)
    console.log("MongoDB connected");
} catch (error) {
    console.log(error);
}


app.get("/", (req,res) => {
    res.send("APP is running");
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));