import { use, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){
    let [todos, setTodos] = useState([{key: "sample task", id: uuidv4() }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = ()=>{
        setTodos([...todos,{task: newTodo, id: uuidv4()}]);
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
                    <li key={todo.id}>{todo.task}</li>
                )
            }
        </ul>
        </div>
    );
}