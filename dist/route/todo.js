"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const todo_1 = require("../controller/todo");
router.post("/", todo_1.createTodo);
router.get("/", todo_1.getTodo);
router.get("/:id", todo_1.getTodoById);
router.put("/:id", todo_1.updateTodo);
router.delete("/:id", todo_1.deleteTodo);
exports.default = router;
