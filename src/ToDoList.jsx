import React, {useState} from "react";
import "./ToDoList.css";

function ToDoList(){
    const[tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Swim"]);
    const[newTask, setNewTask] = useState("");

    function handleInputChange(event){

        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ""){
        setTasks(t => [...t, newTask]);
        setNewTask("");
        }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }


    return(
        <div className="Todo-list">
            <h1 className="Todo-list__header">Todo list</h1>
        <div className="todo-list__task-block">
            <input type="text"
            placeholder="Add your task"
            value={newTask}
            onChange={handleInputChange} />
            <button className="add-btn btn btn-success" onClick={addTask}>
                Add
            </button>

            <ol>
            {tasks.map((task, index) =>
            <li kay={index}>
                <span className="task-text">{task}</span>
                <button className="delete-btn btn btn-danger" onClick={() => deleteTask(index)}>Delete</button>
                <button className="move-btn btn btn-primary" onClick={() => moveTaskUp(index)}>Up</button>
                <button className="move-btn btn btn-primary" onClick={() => moveTaskDown(index)}>Down</button>
           
            </li>)}

            </ol>
</div>


        </div>
    )
}

export default ToDoList;