import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';


const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
    const [{ basket }, dispatch] = useStateValue(); // this is the we use to pull info or remove info with dispatch. here basket is state where it conatins items.

    const removeFromBasket = () => {
        //Remove the items from basket on onClick 
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                {/* // Array takes in an input basically it takes in an empty input of what ever the value we give to its parameter or call as prop tahn maps threw the loop and fills it  . IF u dont care about whats in the first parameter put an underscore, i is the index*/}
                <div className="checkoutProduct__rating">{Array(rating).fill().map((_, i) => (<p>⭐</p>))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>

    )
}

export default CheckoutProduct
