import { error } from "console";
import TodoSchema from "../model/todo";
import { Request, Response } from "express";
export const createTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { task, isCompleted } = req.body;
    const newTodo = new TodoSchema({
      task,
      isCompleted,
    });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
export const getTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const todo = await TodoSchema.find();
    if (!todo) {
      res.status(404).json("Todo data not found");
    }
    res.json(todo);
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

//get todo by ID
export const getTodoById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const todo = await TodoSchema.findById(req.params.id);
    if (!todo) {
      res
        .status(400)
        .json(`Todo data for given id: ${req.params.id} is not found`);
    }
    res.json(todo);
  } catch (err) {
    res.status(500).json("Internal server error");
  }
};
