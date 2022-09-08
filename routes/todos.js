"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos = [];
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post("/", (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(200).json({ success: true, data: newTodo });
});
router.put("/", (req, res, next) => {
    let updateTodo = req.body.todo;
    let idFound = false;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === updateTodo.id) {
            todos[i].text = updateTodo.text;
            idFound = true;
            break;
        }
    }
    if (!idFound) {
        res.json(404).json({ success: false, msg: "Item Not Found!" });
    }
    res.status(200).json({ success: true, updatedTodo: updateTodo });
});
router.delete("/", (req, res, next) => {
    let todoId = req.body.todoId;
    let idFound = false;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === todoId) {
            todos.splice(i, 1);
            idFound = true;
            break;
        }
    }
    if (!idFound) {
        res.json(404).json({ success: false, msg: "Item Not Found!" });
    }
    res.status(200).json({ success: true });
});
exports.default = router;
