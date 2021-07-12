import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, price, rating, image }) {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into data layer

        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image,
            },
        });
    };
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
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product;
