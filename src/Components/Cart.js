import React, { useState } from 'react';

const Cart = () => {

    const [cart, setCart] = useState([]);

    const addItem = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    }

    const delItem = (product) => {
        editArr = cart.slice();
        editArr.splice(editArr.indexOf(product),1);
        setCart(editArr);
    }

}