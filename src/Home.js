import React from 'react'
import './Home.css';
import banner from './assets/banner.jpg';
import Product from './Product.js';


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src={banner} alt="Banner" />

                <div className="home__row">
                    <Product />
                </div>
                <div className="home__row">
                    <Product />
                </div>
                <div className="home__row">
                    <Product />
                </div>
            </div>
        </div>


    )
}

export default Home;
