"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodoById = exports.getTodo = exports.createTodo = void 0;
const todo_1 = __importDefault(require("../model/todo"));
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { task, isCompleted } = req.body;
        const newTodo = new todo_1.default({
            task,
            isCompleted,
        });
        const savedTodo = yield newTodo.save();
        res.status(201).json(savedTodo);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
exports.createTodo = createTodo;
const getTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = yield todo_1.default.find();
        if (!todo) {
            res.status(404).json("Todo data not found");
        }
        res.json(todo);
    }
    catch (error) {
        res.status(500).json("internal server error");
    }
});
exports.getTodo = getTodo;
//get todo by ID
const getTodoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = yield todo_1.default.findById(req.params.id);
        if (!todo) {
            res
                .status(400)
                .json(`Todo data for given id: ${req.params.id} is not found`);
        }
        res.json(todo);
    }
    catch (err) {
        res.status(500).json("Internal server error");
    }
});
exports.getTodoById = getTodoById;
//update the todo
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { task, isCompleted } = req.body;
        console.log(task + "  : " + isCompleted);
        const updateTodos = yield todo_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(updateTodos);
        console.log(id, "id");
    }
    catch (error) { }
});
exports.updateTodo = updateTodo;
//delete the todo app
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteTodos = yield todo_1.default.findByIdAndDelete(req.params.id);
    res.status(200).json(`The data deleted for the given id: ${deleteTodos}`);
});
exports.deleteTodo = deleteTodo;
