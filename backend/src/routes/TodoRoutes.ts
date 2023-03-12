import { Router } from "express";
import { GetTodo, AddTodo,DeleteTodo,UpdateTodo, GetTodoSpecific } from '../controller/TodoControllers';
import { Request, Response } from "express"

const router = Router();  

router.get('/',GetTodo)
router.get('/1',GetTodoSpecific)
router.post('/save',AddTodo)
router.put('/update',UpdateTodo)
router.delete('/delete',DeleteTodo)

 
module.exports = router;