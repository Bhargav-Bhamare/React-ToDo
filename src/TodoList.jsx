import { useState } from "react";

export default function TodoList(){
    let [todos, setTodos] = useState(["Sample Task"]);
    return(
        <div>
        <h1>To-Do List</h1>
        <br /><br />
        <input type="text" placeholder="Add a Task here!" />
        <br /><br /><br />
        <button>Add Task</button>
        <br /><br /><br /><br />
        <hr />
        <h3>Tasks to Do:</h3>
        <br /><br />
        <ul>
            {
                todos.map((todo) =>{
                    <li>{todo}</li>
                })
            }
        </ul>
        </div>
    );
}