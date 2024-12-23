"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({ origin: "*" }));
const port = process.env.PORT || 4000;
const DB_URLs = process.env.DB_URL;
if (!DB_URLs) {
    throw new Error("Database URL is not defined. Please set the DB_URL environment variable.");
}
mongoose_1.default
    .connect(DB_URLs)
    .then(() => {
    console.log("Connected to MongoDB");
})
    .catch((err) => {
    console.error("Error while connecting to MongoDB:", err);
});
const todo_1 = __importDefault(require("./route/todo"));
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.use("/todo", todo_1.default);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
