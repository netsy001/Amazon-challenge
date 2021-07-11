import React from 'react'
import Offer from '../src/assets/offer1.jpg';
import './Checkout.css';
import Subtotal from './Subtotal';

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
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
