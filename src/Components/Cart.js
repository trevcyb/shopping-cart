import React, { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const addItem = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const delItem = (product) => {
    let editArr = cart.slice();
    editArr.splice(editArr.indexOf(product), 1);
    setCart(editArr);
  };

  return (
    <div>
      {cartVis && (
        <ul>
          {cart.map((cartitem) => (
            <li>
              <img src={cartitem.imagesrc} alt={cartitem.name} />
              <h6>{cartitem.name}</h6>
              <h5>
                Total: ${cartitem.unitCost}*{cartitem.quantity}
              </h5>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
