import React, { useState, useEffect } from 'react'
import { db } from './firebase';
import './Orders.css';
import { useStateValue } from './StateProvider';
import Order from './Order'

function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();

    //this state is responsible for storing all orders, and giving its useState value initially to an empty array
    const [orders, setOrders] = useState([]);


    // when the order component loads the useEffect runs, we need to make sure the useEffect runs only one taht is possible when we have the empty array }, []); in useEffect
    useEffect(() => {
        // so we are going to protect th db with help of if condition if only the user exists. if there is no user we are going to setOrders to empty array.
        if (user) {
            //we need to import db from firebase in order to pull the orders from database
            // we are accessing the user collection
            db.collection('users')
                //then we are going to say to go into the document of the user.uid we are going to pull the user from react context API so we need to import user state from useStateValue from stateProvider
                // so we are getting the specic user who is logged in at that time 
                .doc(user?.uid)
                // then we are going to say to go into the orders to access the particular users orders
                .collection('orders')
                //then we are going to check the most order by created date and in descending order so most recent comes on top
                .orderBy('created', 'desc')
                //snapshot is the realtime database. what it does is if we create a value or delete a value it gives us the real time database
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))
        } else {
            setOrders([])
        }
    }, [user]);


    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders__order">
                {/* // what we are doing here is orders and map threw every single order and  then return an order element(order component), and then its takes a prop order and pass in entire order in. */}
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
