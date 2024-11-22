import React, { useEffect, useState } from 'react'

export default function Practice() {

    const [cart, setCart] = useState([
        { id: 1, name: 'Laptop', price: 1000 },
        { id: 2, name: 'Phone', price: 500 },
        { id: 3, name: 'Tablet', price: 300 },
    ]);

    const cartId = 2;

    const handleClick = () => {
        setCart(cart.map(cart => {
            if (cart.id === cartId) {
                return { ...cart, price: cart.price * 10 }
            }
            else {
                return cart;
            }
        }))
    }


    useEffect(() => { console.log(cart.map(cart => cart.price)) }, [cart])

    return (
        <div>
            <button onClick={handleClick}>press</button>
        </div>
    )
}
