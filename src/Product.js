import React from 'react'
import './Product.css';
import book from '../src/assets/book.jpg';

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>The Intelligent Investor</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <p>star</p>
                </div>
            </div>
            <img className="product__img" src={book} alt="Book" />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product;
