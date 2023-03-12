import React, { useState } from "react";
import {AddButton, BG, InputBar} from "./Search.styled" ;
import { Container } from "./Card.styled";
import { addTodo, updateTodo } from "./HandleApi";
type Props = {
    text: string;
    setText: any;
    setTodo: any;
    TodoId: string;
    isUpdating: boolean;
    setisUpdating: any;
  };
const SeacrhBar:React.FC<Props> = ({text,setText,setTodo,isUpdating,TodoId,setisUpdating}) => {
    return(
        <BG>
            <InputBar value =  {text} onChange={(e) => setText(e.target.value)}/>
            <AddButton onClick={() => isUpdating ? updateTodo(text,TodoId,setText,setTodo,setisUpdating) : addTodo(text,setText,setTodo)}>{isUpdating ? 'Update' : 'Add Task'}</AddButton>
        </BG>
    )
}

export default SeacrhBar;