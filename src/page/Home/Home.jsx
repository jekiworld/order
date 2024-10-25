import React, { useState } from 'react'
import './Home.css';
import { ReactComponent as GoogleLogo } from './icons/googl_logo.svg';
import { useNavigate } from 'react-router-dom';
import Sign_up from '../Sign_up/Sign_up';

export default function Home() {
    const [openModal, setOpenModal] = useState(false);


    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/sign_up")
    }

    const handleOpenModal = () => {
        setOpenModal(!openModal);
        console.log(openModal);
    }




    return (
        <div>
            <div>
            <h3>Шаблоны</h3>
            <p onClick={handleOpenModal}>1. Регистрация</p>
            </div>
            <div className='Modal'>
                {openModal && (
                    <div>
                        <Sign_up />
                    </div>
                )}
            </div>
        </div>

    )
}
//