// lib

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// routes

import post from "./routers/post.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 4444;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/post", post);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.get("/", (req, res) => {
  res.send("hello worled");
});

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    app.listen(port, () => {
      console.log(`app listening at http://localhost:${port}`);
    });
    console.log("Connect");
  })
  .catch((err) => {
    console.log(`Filde` + err);
  });
