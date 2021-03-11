import { useState } from 'react';

const Cart = ({cart}) => {

    return (
        <ul id="slide-out" className="sidenav right">
            <li>IF I HADNT MADE MEEEEE </li>
            {cart.map((cartitem) => {
                <li>
                    <img src={cartitem.imagesrc} alt={cartitem.name}/>
                    <h5>{cartitem.name}</h5>
                    <h4>{cartitem.quantity * cartitem.unitCost}</h4>
                </li>
            })}
        </ul>
    )

}

export default Cart