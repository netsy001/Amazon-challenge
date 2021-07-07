import React from 'react'
import './Product.css';
// import StarRateIcon from '@material-ui/icons/StarRate';

function Product({ Id, title, price, rating, image }) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {/* <span>{StarRateIcon}</span> */}
                    {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
                </div>
            </div>
            <img className="product__img" src={image} alt="Book" />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product;
