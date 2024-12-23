import mongoose from "mongoose";
import express from "express";
const router = express.Router();
import { createTodo, getTodo } from "../controller/todo";
router.post("/", createTodo);
router.get("/", getTodo);
export default router;
