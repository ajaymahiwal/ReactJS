
import { useState } from "react";
import "./Todos.css";
import { v4 as uuidv4 } from 'uuid';


export default function Todos(){

    const[todos,setTodos] = useState([{task:"This is Sample Task",id:uuidv4(),isDone:false}]);
    const[newTodo,setNewTodo] = useState("");



    function saveTask(){
        // todos.push(currTask);
        setTodos((prevTodos) =>{
            return [...prevTodos,{task:newTodo, id:uuidv4(),isDone:false}];
        });
        setNewTodo("");
        console.log(todos);
    }
    function saveTaskChange(event){
        setNewTodo(event.target.value);
        console.log(newTodo);
    }

    let deleteTask = (id) =>{
        console.log("deleted");
        setTodos((prevTodos)=>(
            prevTodos.filter((task)=> task.id != id)
        ));
    }

    let deleteAll = () =>{
        console.log("All Deleted !");
        setTodos([]);
    }

    let markALL = () =>{
        console.log("All Updated");
        setTodos((prevTodos)=>(
            prevTodos.map((todo)=> (
                {...todo, isDone:true}
            ))
        ))
    }

    let markOne = (id) =>{
        console.log(id,",This Id task is updated !");
        setTodos((prevTodos)=>(
            prevTodos.map((todo)=> {
                if(todo.id === id){
                    return {...todo, isDone:true}
                }
                else{
                    return todo;
                }
            })
        ))
    }

    return(
        <div className="Todos">
            <div>
                <h1>To-Do List Project</h1>
                <input type="text" placeholder="Add a Task" value={newTodo} onChange={saveTaskChange}/>
                <br />
                <button onClick={saveTask}> Add </button>
            </div>
            <div>
                <ul>
                {   todos.map((todo)=>(
                        <li key={todo.id}>
                            <span style={todo.isDone ? {textDecorationLine:"line-through"} : {}}>{todo.task}</span> &nbsp; &nbsp; 
                            <button onClick={()=>deleteTask(todo.id)}>Delete</button> &nbsp; &nbsp; 
                            <button onClick={()=>markOne(todo.id)}>Mark As Done</button>
                        </li>
                    ))
                }
                </ul>

                <button onClick={deleteAll}>Delete All</button> &nbsp; &nbsp; 
                <button onClick={markALL}>Mark All As Done</button>
            </div>
        </div>
    )
}