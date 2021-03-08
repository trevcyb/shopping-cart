import React from 'react';

const Product = (props) => {

    const {
        product: { productName, description, unitCost, imagesrc }
    } = props;

    return (
        <div className="col s6 m4">
            <img src={imagesrc} alt={productName} className="responsive-img"/>
            <h5>{productName}</h5>
            <h5>${unitCost}</h5>
            <p>{description}</p>
            <a className="btn-floating btn-small waves-effect waves-light teal"><i className="material-icons">add</i></a> 
        </div>
    )

}

export default Product