import React, { useEffect, useState } from 'react';
import './Todo.css';

export default function Todo() {

    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    // Функция для добавления новой задачи
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

    useEffect(() => {
        console.log(todos);
    }, [todos]); // Обновляем только при изменении todos

    // Функция для удаления задачи по id
    const handleDelete = (id) => {
        setTodos(todos.filter(task => task.id !== id));
    };

    // Функция для переключения состояния задачи (выполнена/не выполнена)
    const handleCompleted = (id) => {
        setTodos(todos.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

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
                {todos.map(task => (
                    <li 
                        className={`todo-item ${task.completed ? "completed" : ""}`} 
                        key={task.id}
                    >
                        <span>{task.text}</span>
                        <div className="todo-buttons">
                            <button onClick={() => handleCompleted(task.id)}>
                                {task.completed ? "Undo" : "Complete"}
                            </button>
                            <button onClick={() => handleDelete(task.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
