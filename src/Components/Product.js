import React, { useState } from "react";

const Product = (props) => {
  const {
    product: { productName, description, unitCost, imagesrc, quantity }
  } = props;

  const [showInput, setshowInput] = useState(false);
  const [showAddbtn, setshowAddBtn] = useState(true);

  const handleshowInput = () => {
    setshowAddBtn(false);
    setshowInput(true);
  };

  const handleCancel = () => {
    setshowAddBtn(true);
    setshowInput(false);
  };

  return (
    <div className="col s6 m4">
      <img src={imagesrc} alt={productName} className="responsive-img" />
      <h5>{productName}</h5>
      <h5>${unitCost}</h5>
      <p>{description}</p>
      {showAddbtn && (
        <button
          className="btn waves-effect waves-light"
          onClick={handleshowInput.bind(this)}
        >
          Add to Cart +
        </button>
      )}
      {showInput && (
        <>
          <input
            type="number"
            value={quantity}
            placeholder="Enter Quantity Desired"
          />
          <a class="waves-effect waves-light btn">
            <i class="material-icons left">thumb_up</i>confirm
          </a>
          <a
            class="btn-floating red btn-small"
            onClick={handleCancel.bind(this)}
          >
            <i class="material-icons">close</i>
          </a>
        </>
      )}
    </div>
  );
};

export default Product;
