import axios from "axios";

const baseUrl = "http://localhost:5000";

const getAllTodo = (setTodo:any) => {
    axios.get(`${baseUrl}`)
    .then(({data}) => {
        console.log(`data-->${data}`)
        setTodo(data)
    });
}

const addTodo = (title:string, setText:any, setTodo:any) => {
    axios.post(`http://localhost:5000/save`, {title})
    .then(({data}) => {
        setText("")
        getAllTodo(setTodo)
    })
    .catch(() => console.log("Failed to"))
}

const updateTodo = (title:string, todoId:String , setText:any, setTodo:any,setIsupdating:any) => {
    axios.put(`${baseUrl}/update`, {_id: todoId, title})
    .then((data) => {
        setText("");
        setIsupdating(false);
        getAllTodo(setTodo)
    })
    .catch((error) => console.log(error));
}  

const DeletedTodo = (_id:any,setTodo:any) => {
    axios
    .delete(`${baseUrl}/delete`,{data:{_id}})
    .then(() => {
        getAllTodo(setTodo)
        console.log({_id});
    })
    .catch((error) => {console.log(error);
    })
}

export { getAllTodo, addTodo,updateTodo, DeletedTodo};