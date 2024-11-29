import React from 'react'
import '../Cube.css';

export default function Cube1({ isActive, setActive }) {

    const handleClick = () => {
        setActive(!isActive)
    }

    return (
        <div>
            <div onClick={handleClick} className='cube1'>Cube1</div>
        </div>
    )
}
