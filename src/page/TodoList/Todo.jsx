import React, { useState } from 'react'
import './Todo.css';

export default function Todo() {
    const [list, SetList] = useState();

    const handleClick = {
                
    }


    return (
        <div className="todo-app">
            <h1>My To-Do List</h1>

            <div className="todo-input">
                <input type="text" placeholder="Add a new task..." />
                <button>Add</button>
            </div>

            <ul className="todo-list">
                <li className="todo-item">
                    <span>Sample Task 1</span>
                    <div className="todo-buttons">
                        <button>Complete</button>
                        <button>Delete</button>
                    </div>
                </li>
                <li className="todo-item">
                    <span>Sample Task 2</span>
                    <div className="todo-buttons">
                        <button>Complete</button>
                        <button>Delete</button>
                    </div>
                </li>
                {/* Добавь новые <li> элементы по необходимости */}
            </ul>
        </div>
    )
}
