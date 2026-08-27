import express from "express";
import {nanoid} from "nanoid";
import connectDB from "./src/config/mongo.config.js";
import dotenv from "dotenv";

dotenv.config();

connectDB();

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post("/api/create", (req, res) => {
    const url = req.body;
    console.log(url);
    res.send(nanoid(10));
})

app.listen(5000, () => {
    connectDB();
    console.log("Server is running on http://localhost:5000");
})

// GET - redirection 
// POST - create short URL