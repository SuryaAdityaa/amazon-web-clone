import React from 'react'
import '../style/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../provider/StateProvider';
import { auth } from '../firebase';

function Header() {
    const [{basket, user}, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo"/>
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__smallText">
                            Hello, {user ? user.email : 'Guest'}
                        </span>
                        <span className="header__boldText">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__smallText">
                        Returns
                    </span>
                    <span className="header__boldText">
                        & Orders
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__smallText">
                        Your
                    </span>
                    <span className="header__boldText">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionCart">
                        <ShoppingBasketIcon/>
                        <span className="header__smallText header_cartCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
