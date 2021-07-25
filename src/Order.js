import moment from 'moment';
import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Order.css';


// here we are destructuring and pass in prop and say give me the order
function Order({ order }) {
    return (
        <div classNmae="order">
            <h2>Order</h2>
            {/* // using moment to pass in timestamp. as in order we got data.created we are using moment unix */}
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {/* // map threw every single item in the order */}
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating} />
            ))}
        </div>
    )
}

export default Order
