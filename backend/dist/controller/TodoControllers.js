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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTodo = exports.UpdateTodo = exports.AddTodo = exports.GetTodoSpecific = exports.GetTodo = void 0;
const Todo = require('../model/TodoModel');
//Method GET
const GetTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const toDo = yield Todo.find();
    res.send(toDo);
});
exports.GetTodo = GetTodo;
const GetTodoSpecific = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const toDo = yield Todo.findOne({ _id: "63bfcaa8a1d6bd65bb6f9c7b", title: "e" });
    res.send(toDo);
});
exports.GetTodoSpecific = GetTodoSpecific;
//Method POST
const AddTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title } = req.body;
    if (!title) {
        return res.status(400).send({ message: 'Title is required' });
    }
    Todo
        .create({ title })
        .then((data) => {
        console.log("Added Successfully");
        console.log(data);
        res.json(data);
    })
        .catch((error) => {
        res.status(500).send({ message: error.message });
    });
});
exports.AddTodo = AddTodo;
//Method PUT
const UpdateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id, title } = req.body;
    if (!_id) {
        return res.status(400).send({ message: 'ID is required' });
    }
    if (!title) {
        return res.status(400).send({ message: 'Title is required' });
    }
    Todo
        .findByIdAndUpdate(_id, { title })
        .then(() => res.send("Updated Successfully"))
        .catch((error) => res.status(400).send({ message: 'Error updating' }));
});
exports.UpdateTodo = UpdateTodo;
//Method DELETE
const DeleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.body;
    Todo
        .findByIdAndRemove(_id)
        .then(() => res.send("Deleted Successfully"))
        .catch((error) => res.status(500).send({ message: "Error deleting" }));
});
exports.DeleteTodo = DeleteTodo;
