import React, { useEffect, useState } from "react";
import { CardBox, Container, TaskBar, ButtonCustom, ButtonBox, InputText } from "./Card.styled";
import { DeletedTodo, getAllTodo } from "./HandleApi";
import SeacrhBar from "./SearchBar";

const Card:React.FC<{}> = () => {
    const [todo, setTodo] = useState([]); 
    const [Text, setText] = useState("");
    const [TodoId, setTodoId] = useState("");
    const [isUpdating, setisUpdating ] = useState(false);
    useEffect(() => {
       getAllTodo(setTodo)
    },[])

    return(
        <>
        <SeacrhBar text = {Text} setText = {setText} setTodo={setTodo} isUpdating = {isUpdating} setisUpdating={setisUpdating} TodoId={TodoId}/>
        <Container>
            <CardBox>
                {todo.map((item:any) => {
                    return(
                        <TaskBar>
                            <InputText type ="text" key={item._id} value={item.title} disabled={true}/>
                            <ButtonBox>
                                <ButtonCustom  onClick={() => {setText(item.title); setisUpdating(!isUpdating); setTodoId(item._id)}}>Edit</ButtonCustom>
                                <ButtonCustom onClick={() => {DeletedTodo(item._id,setTodo)}}>Delete</ButtonCustom>
                            </ButtonBox>
                        </TaskBar>
                    )}
                )}
            </CardBox>
        </Container>
        </>
    )
}

export default Card;