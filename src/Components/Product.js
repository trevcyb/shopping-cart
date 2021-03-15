const Product = ({ product, addItem }) => {


    return (
        <div className="col s6 l4">
            <img src={product.imagesrc} alt={product.productName} className="responsive-img" />
            <h5>{product.productName}</h5>
            <h5>${product.unitCost}</h5>
            <p>{product.description}</p>
            <button
                className="btn waves-effect waves-light"
                onClick={() => addItem(product.id)}
            >
                Add to Cart +
                </button>
        </div>
    );
};

export default Product;
