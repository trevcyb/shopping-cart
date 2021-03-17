import { useEffect, useState } from "react";

const Cart = ({ cart, delItem, addQty, remQty }) => {

    const [total, setTotal] = useState(0);
    const [totaldiv, settotaldiv] = useState(false);

    useEffect(() => {
        if (cart.length > 0) {
            setTotal(cart.map((cartitem) => (cartitem.quantity * cartitem.unitCost)).reduce((a, b) => a + b));
            settotaldiv(true);
        } else {
            settotaldiv(false);
        }
    }, [cart])

    return (
        <ul id="slide-out" className="sidenav right">
            <h2 className="center">Cart</h2>
            {cart.map((cartitem) => (
                <li className="cartlistitem" key={cartitem.id}>
                    <img className="left-align" src={cartitem.imagesrc} alt={cartitem.name} />
                    <h6 className="right">{cartitem.productName} x {cartitem.quantity} 
                    <br /> <br />
                    <button onClick={() => addQty(cartitem.id)}>+</button> 
                    <button onClick={() => remQty(cartitem.id, cartitem.quantity)}>-</button>
                    <button className="right" onClick={() => delItem(cartitem.id)}><i className="material-icons">delete</i></button> 
                    ${cartitem.quantity * cartitem.unitCost}</h6>
                </li>
            ))}
            {!totaldiv && (
                <h3 className="center">Your cart is empty!</h3>
            )}
            {totaldiv && (
                <div className="checkout">
                    <h4>Total Cost: ${total}</h4>
                    <button className="btn waves-effect waves-light">Proceed to Checkout</button>
                </div>
            )}
        </ul>
    )

}

export default Cart