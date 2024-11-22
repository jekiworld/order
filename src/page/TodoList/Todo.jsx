import React, { useEffect, useState } from 'react';
import './Todo.css';

export default function Todo() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            setTodos([
                ...todos,
                { id: Date.now(), text: newTodo, completed: false },
            ]);
            setNewTodo('');
        }
    };

    const handleChangeInput = (event) => {
        setNewTodo(event.target.value);
    };

    const handleDelete = (id) => {
        setTodos(todos.filter(task => task.id !== id));
    };

    const handleCompleted = (id) => {
        setTodos(
            todos.map(task => 
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    useEffect(() => {
        console.log("Todos:", todos);
        console.log("Done:", todos.filter(task => task.completed));
    }, [todos]);

    return (
        <div className="todo-app">
            <h1>My To-Do List</h1>

            <div className="todo-input">
                <input
                    type="text"
                    onChange={handleChangeInput}
                    value={newTodo}
                    placeholder="Add a new task..."
                />
                <button onClick={handleAddTodo}>Add</button>
            </div>

            <ul className="todo-list">
                {todos.filter(task => !task.completed).map(task => (
                    <li className="todo-item" key={task.id}>
                        <span>{task.text}</span>
                        <div className="todo-buttons">
                            <button onClick={() => handleCompleted(task.id)}>
                                Complete
                            </button>
                            <button onClick={() => handleDelete(task.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>

            <div>
                <h2>Done</h2>
                <ul>
                    {todos.filter(task => task.completed).map(task => (
                        <li className="todo-item completed" key={task.id}>
                            <span>{task.text}</span>
                            <div className="todo-buttons">
                                <button onClick={() => handleCompleted(task.id)}>
                                    Undo
                                </button>
                                <button onClick={() => handleDelete(task.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
