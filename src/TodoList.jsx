import { use, useState } from "react";

export default function TodoList(){
    let [todos, setTodos] = useState(["Sample Task"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = ()=>{
        setTodos([...todos,newTodo]);
        setNewTodo("");
    }

    let updateTodoValue = (event) =>{
        setNewTodo(event.target.value);
    }
    return(
        <div>
        <h1>To-Do List</h1>
        <br /><br />
        <input type="text" placeholder="Add a Task here!" value={newTodo} onChange={updateTodoValue}/>
        <br /><br /><br />
        <button onClick={addNewTask}>Add Task</button>
        <br /><br /><br /><br />
        <hr />
        <h3>Tasks to Do:</h3>
        <br /><br />
        <ul>
            {
                todos.map((todo) =>
                    <li>{todo}</li>
                )
            }
        </ul>
        </div>
    );
}