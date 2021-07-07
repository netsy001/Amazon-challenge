import React from 'react'
import './Home.css';
import banner from './assets/banner.jpg';
import Product from './Product.js';
import book from '../src/assets/book.jpg';
import Phone from '../src/assets/iphone.png';
import Lenovo from '../src/assets/lenovo.webp';
import WM from '../src/assets/washing machine.jpg';
import Fridge from '../src/assets/Fridge.jpg';
import TV from '../src/assets/tv.webp';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src={banner} alt="Banner" />

                <div className="home__row">
                    <Product
                        id="12345"
                        title="The Intelligent Investor - The Giver, a powerful and provocative novel, is sure to keep older children reading and thinking"
                        price={20.00}
                        rating={5}
                        image={book}
                    />
                    <Product
                        id="12344"
                        title="Superfast 5G. A14 Bionic, the fastest chip in a smartphone. Pro camera system for next-level low-light photography. It’s a beautiful leap forward."
                        price={1699.99}
                        rating={5}
                        image={Phone}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="12343"
                        title="The ThinkPad L390 is business-ready right out of the box. Equipped with the latest processing, memory, and storage, this 13.3” laptop has an impressive 14-hour battery life."
                        price={899.10}
                        rating={5}
                        image={Lenovo}
                    />
                    <Product id="12342"
                        title="LG Series 9 12kg Front Load Washing Machine with Turbo Clean 360."
                        price={1399.00}
                        rating={5}
                        image={WM}
                    />
                    <Product id="12341"
                        title="This LG specialty kimchi fridge is the ideal addition to any Korean food lover’s kitchen. It comes with custom chill sections and convertible ..."
                        price={2000.00}
                        rating={5}
                        image={Fridge}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="12340"
                        title="This Hitachi TV has a 58-inch screen, so you can relish a lush panoramic viewing area. It features a QLED display. Also, the Hitachi 58QLEDSM20's smart TV capabilities"
                        price={1899.00}
                        rating={5}
                        image={TV}
                    />
                </div>
            </div>
        </div>


    )
}

export default Home;
