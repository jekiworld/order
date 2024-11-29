import React, { useEffect, useState } from 'react'
import './Cube.css';
import Cube1 from './components/Cube1';
import Cube2 from './components/Cube2';

export default function Cube() {

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }

    useEffect(() => {
        console.log(active);
    })

    // let content;
    // if (active) {
    //     content = <Cube1 />
    // } else {
    //     content = <Cube2 />
    // }


    return (
        <div>
            <button onClick={handleClick}>switch</button>
            {active ? <Cube2 isActive={active} setActive = {setActive} /> : <Cube1 isActive={active} setActive={setActive}/>}
        </div>
    )
}
