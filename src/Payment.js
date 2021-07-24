import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './Reducer';
import { axios } from 'axios';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);

    //wheenevr we have any payment we need to tell stripe that we have payment for 50 transaction that i want to send to you. So, plz give us a  clientSecret to run by card. without clientSecret we cant charge cx. So, without clientSecret we cant tell  stripe to charge this $50 from this card. SO, for that we need to make a state for it.
    const [clientSecret, setClientSecret] = useState(true);

    // useEffect will run when payment component load or whenever the variables inside the array changes. Here we have that dependencie or we call variable that is basket.

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer.

        // But whenever the basket changes we need to get a new secret bcz its not always $50 or always same customer, it will be diff cx and different value so we need new scret for every transaction..... thats the code for useEffect
        const getClientSecret = async () => {
            const response = await axios({
                // we use axios. Axios is very popular fetching library, fetch post requests, allows us to interact with APIs very easily
                method: "post",
                // ?total(questionmark total which is called - query param)
                // Stripe expects the total in a currencies subunits. i.e if u r using the dollars stripe expects the currency to be passed in cents. if rupees in paise.... so we are multiplying by 100.... as $1 = 100 cents
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log('The secret is', clientSecret)

    const handleSubmit = async (event) => {
        // all the stripe <stuff className=""></stuff>
        event.preventDefault();
        // stop from refreshing
        // setProcessing(true);  this will help prevent hiting the enter button more than once.
        //  Bcz in below we have a button disabed to processsing, disabled and successeeded. 
        //  Once hit enter it will be blocked from hitting again.
        setProcessing(true);


        // confirmCardPayment takes in two arguments 1). clientSecret and 2). an object which is payment_method
        // 1). clientSecret this is how stripe exactly know how much to charge the customer
        // 2). payment_method takes in an object which is the card and get CArdElement using the code elements.getElement(CardElement) 
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
            // as its a promise we say .then...somthing will comeback which is (response comes back).
            // here we are getting back paymentIntent .. we are destructuring it {paymentIntent}
        }).then(({ paymentIntent }) => {
            // paymentIntent = nothing but payment Confirmation
            // then we are going to say if everything is good we are going to say as below
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            // we dont want cx to comeback to payment page after we they press back.
            // we are not using history.push bcz we dont want cx to comeback to payment page if they git back instead we are replacing the page we are swaping the page using replace
            history.replace('/orders')

        })

    }

    const handleChange = event => {
        //Listen for changes in the CardElement
        //and Dispaly any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 Street Road</p>
                        <p>Adelaide, SA</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* //using stripe library */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {/* Error if there is any error show the div with error*/}
                            {error && <div>{error}</div>}

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
