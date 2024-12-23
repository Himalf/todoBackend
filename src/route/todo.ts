import mongoose from "mongoose";
import express from "express";
const router = express.Router();
import {
  createTodo,
  deleteTodo,
  getTodo,
  getTodoById,
  updateTodo,
} from "../controller/todo";
router.post("/", createTodo);
router.get("/", getTodo);
router.get("/:id", getTodoById);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);
export default router;
