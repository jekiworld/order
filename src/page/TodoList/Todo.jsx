import React, { useEffect, useState } from 'react'
import './Todo.css';

export default function Todo() {

    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [done, setDone] = useState([]);

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            setTodos([
                ...todos,
                { id: Date.now(), text: newTodo, completed: false },
            ]);
            setNewTodo('');
        }
    }

    const handleChangeInput = (event) => {
        setNewTodo(event.target.value);
    }

    useEffect(() => {
        console.log(todos);
        console.log(done);
    })

    const handleDelete = (id) => {
        setTodos(todos.filter(task => task.id !== id));
    };

    const handleCompleted = (id) => {
        setDone(todos.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    completed: !task.completed
                }
            }
        },

            setTodos(todos.filter(function (task) {
                return task.completed !== task.completed;
            }))

        ));
    }


    return (
        <div className="todo-app">
            <h1>My To-Do List</h1>

            <div className="todo-input">
                <input type="text" onChange={handleChangeInput} value={newTodo} placeholder="Add a new task..." />
                <button onClick={handleAddTodo}>Add</button>
            </div>

            <ul className="todo-list">
                {todos.map(task => (
                    <li className="todo-item" key={task.id}>
                        <span>{task.text}</span>
                        <div className="todo-buttons">
                            <button onClick={() => handleCompleted(task.id, task.com)}>Complete</button>
                            <button onClick={() => handleDelete(task.id)}>Delete</button>
                        </div>
                    </li>
                ))}

            </ul>

            <div>
                Done
                <ul>
                    {done.map(done => (
                        <li
                            className={`todo-item ${done.completed ? "completed" : ""}`}
                            key={done.id}
                        >
                            <span>{done.text}</span>
                            <div className="todo-buttons">
                                <button onClick={() => handleCompleted(done.id)}>
                                    {done.completed ? "Undo" : "Complete"}
                                </button>
                                <button onClick={() => handleDelete(done.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
