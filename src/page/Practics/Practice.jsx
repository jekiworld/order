import React, { useState } from 'react'

export default function Practice() {

    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleClick = () =>{
        alert(`Hello ${name}`)
    }
   
    return (
        <div>
            <input type="text" value = {name} onChange={handleChange} placeholder='enter name' />
            <button onClick={handleClick}>click</button>
        </div>
    )
}
