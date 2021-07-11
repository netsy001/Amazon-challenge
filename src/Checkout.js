import React from 'react'
import Offer from '../src/assets/offer1.jpg';
import './Checkout.css';

const Checkout = () => {
    return (
        <div className="checkout">
            <div>
                <div className="checkout__left">
                    <img className="checkout__banner" src={Offer} alt="exclusive-offer" />
                    <div>
                        <h2 className="checkout__title">
                            Your Shopping Basket
                        </h2>
                    </div>
                </div>
            </div>

            <div className="checkout__right">
                <h2>Checkout checkout</h2>
            </div>
        </div>
    )
}

export default Checkout
