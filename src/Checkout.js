import React from 'react'
import Offer from '../src/assets/offer1.jpg';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

const Checkout = () => {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div>
                <div className="checkout__left">
                    <img className="checkout__banner" src={Offer} alt="exclusive-offer" />
                    <div>
                        {/* //option chaining ?. if we get any type error email of null. Optional chaining  adding ? will help to fix the error */}
                        <h3>Hello, {user?.email}</h3>
                        <h2 className="checkout__title">
                            {basket.map(item => <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />)}

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
