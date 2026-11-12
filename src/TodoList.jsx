import { use, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function TodoList(){
    let [todos, setTodos] = useState([{task: "Sample-task", id: uuidv4(), isCompleted: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = ()=>{
        setTodos((prevTodos) =>{
            return [...prevTodos,{task: newTodo, id: uuidv4()}];
        });
        setNewTodo("");
    }

    let updateTodoValue = (event) =>{
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
    setTodos((prevTodos) =>
        prevTodos.filter((todo) => todo.id !== id)
    );
    };

    let completeTodo = (id) => {
    setTodos((prevTasks) => {
        return prevTasks.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isCompleted: true
                };
            } else {
                return todo;
            }
        });
    });
    };
    

    // let UpperCaseAll = () =>{
    //     setTodos((prevTasks) =>
    //     prevTasks.map((todo) =>{
    //         return{
    //             ...todo,
    //             task: todo.task.toUpperCase(),
    //         };
    //     })
    //     );
    // };

    // let upperCaseOne = (id) =>{
    //     setTodos((prevTasks) =>
    //         prevTasks.map((todo) =>{
    //             if(todo.id === id){
    //                 return{
    //                     ...todo,
    //                     task: todo.task.toUpperCase(),
    //                 };
    //             }else{
    //                 return todo;
    //             }
    //         })
    //     );
    // };
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
                todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={{
                            textDecoration: todo.isCompleted ? "line-through" : "none"
                        }}>
                            {todo.task}
                        </span>

                        &nbsp;&nbsp;

                        <button onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </button>

                        &nbsp;&nbsp;&nbsp;&nbsp;

                        <button onClick={() => completeTodo(todo.id)}>
                            Completed
                        </button>
                    </li>
                ))
            }
        </ul>
        <span style={{
            textDecoration: todo.isCompleted ? "line-through" : "none"
        }}>
            {todo.task}
        </span>
        {/* <button onClick={UpperCaseAll}>Mark All as Done</button> */}
        </div>
    );
}