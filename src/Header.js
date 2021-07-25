import React from 'react';
import './Header.css';
import myshopLogo from './assets/My-shop.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        // If there is a user it will pull the authentication from firebase and if we licked on signout then it will signout.
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to="/">
                <img className='header__logo' src={myshopLogo} alt="myshopLogo" />
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" /><SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                {/* //if redirect to login page if there is no user only then push to login page */}
                <Link to={!user && "/login"} >
                    <div onClick={handleAuthentication} className="header__option">
                        <span className='header__optionLineOne'>Hello, {!user ? 'Guest' : user.email}</span>
                        {/* // or  we can also code as {user?.email || 'Guest'} */}
                        <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to="/orders">
                    <div className="header__option">
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Shop</span>

                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        {/* //optional chaining ?. if the basket becomes undefined or for any reason  doesnt have any value thos optional chaining ?. helps to gracefully handle the error */}
                        <span className="header__optionLineTwo  header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
