import mongoose from "mongoose";
import express from "express";
const router = express.Router();
import { createTodo, getTodo, getTodoById } from "../controller/todo";
router.post("/", createTodo);
router.get("/", getTodo);
router.get("/:id", getTodoById);
export default router;
