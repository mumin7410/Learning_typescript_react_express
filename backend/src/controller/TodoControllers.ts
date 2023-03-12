import { Request, Response } from "express"
const Todo = require('../model/TodoModel')

//Method GET
export const GetTodo = async (req:Request,res:Response) => {
    const toDo = await Todo.find()
    res.send(toDo)
} 

export const GetTodoSpecific = async (req:Request,res:Response) => {
  const toDo = await Todo.findOne({_id: "63bfcaa8a1d6bd65bb6f9c7b",title: "e"})
  res.send(toDo)
} 

//Method POST
export const AddTodo = async (req:Request,res:Response) => {
    const { title } = req.body;
    if (!title) {
      return res.status(400).send({ message: 'Title is required' });
    }
    Todo
      .create({ title })
      .then((data:any) => {
        console.log("Added Successfully");
        console.log(data);
        res.json(data);
      } )
      .catch((error:any) => {
        res.status(500).send({ message: error.message });
      });
  }

//Method PUT
export const UpdateTodo = async (req:Request, res:Response) => {
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
   .catch((error:any) => res.status(400).send({ message: 'Error updating'}));
}

//Method DELETE
export const DeleteTodo = async (req:Request, res:Response) => {
  const { _id } = req.body;
  Todo
  .findByIdAndRemove(_id)
  .then(() => res.send("Deleted Successfully"))
  .catch((error:any) => res.status(500).send({ message:"Error deleting"}));
}
