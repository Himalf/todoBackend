// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
const port = process.env.PORT || 4000;
const DB_URLs = process.env.DB_URL;

if (!DB_URLs) {
  throw new Error(
    "Database URL is not defined. Please set the DB_URL environment variable."
  );
}

mongoose
  .connect(DB_URLs)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error while connecting to MongoDB:", err);
  });
import Todo from "./route/todo";

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use("/todo", Todo);
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
