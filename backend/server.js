import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://shiekabdullah.vercel.app/"
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Server Running Successfully");
});

app.listen(5000, () => {
  console.log("Server Started on Port 5000");
});