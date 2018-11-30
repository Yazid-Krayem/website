import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contact from './contact';



//images
import paypal from '../images/icons/paypal.png';
 import visa from '../images/icons/visa.png';
import mastercard from '../images/icons/mastercard.png';
import express from '../images/icons/express.png';
import discover from '../images/icons/discover.png';
import logo from '../images/icons/nada-zeineh.svg';
import iconHeader from '../images/icons/icon-header-01.png';
import iconHeader1 from '../images/icons/icon-header-02.png';
import itemCart from '../images/item-cart-01.jpg';
import itemCart1 from '../images/item-cart-02.jpg';
import itemCart2 from '../images/item-cart-03.jpg';
import logoMo from '../images/icons/nada-zeineh.svg';
import headerIcon from '../images/icons/icon-header-01.png';
import headerIcon1 from '../images/icons/icon-header-02.png';
import cartItem from '../images/item-cart-01.jpg';
import cartItem1 from '../images/item-cart-02.jpg';
import cartItem2 from '../images/item-cart-03.jpg';
import blog from '../images/corgi.jpeg';
import blog1 from '../images/blog-05.jpg';
import blog2 from '../images/blog-08.jpg';
import blog3 from '../images/blog-02.jpg';
import blog4 from '../images/blog-03.jpg';
import product from '../images/item-16.jpg';
import product1 from '../images/item-17.jpg';
import product2 from '../images/item-08.jpg';
import product3 from '../images/item-03.jpg';
import product4 from '../images/item-05.jpg';



class Header extends React.Component {
    render(){
        return(
<React.Fragment>
    <div className="container-menu-header">
        <div className="wrap_header">
            {/* Logo */}
            <a href="index.html" className="logo">
            <img src={logo} alt="IMG-LOGO" />
            </a>
            {/* Menu */}
            <Router>
            <div className="wrap_menu">
            <nav className="menu">
                <ul className="main_menu">
                <li>
                    <a href="/">Home</a>
                </li>
                
                <li>
                    <a href="blog">Blog</a>
                </li>
                
                <li>
                    <Link to="Contact">Contact</Link>
                </li>
                </ul>
            </nav>
            <Route path="./contact" component={Contact} />
            <Route path="./contact" component={Contact} />
            <Route path="./contact" component={Contact} />

            </div>
            </Router>
            {/* Header Icon */}
            <div className="header-icons">
            <a href="#" className="header-wrapicon1 dis-block">
                <img src={iconHeader} className="header-icon1" alt="ICON" />
            </a>
            <span className="linedivide1" />
            <div className="header-wrapicon2">
                <img src={iconHeader1} className="header-icon1 js-show-header-dropdown" alt="ICON" />
                <span className="header-icons-noti">0</span>
                {/* Header cart noti */}
                <div className="header-cart header-dropdown">
                <ul className="header-cart-wrapitem">
                    <li className="header-cart-item">
                    <div className="header-cart-item-img">
                        <img src={itemCart} alt="IMG" />
                    </div>
                    <div className="header-cart-item-txt">
                        <a href="#" className="header-cart-item-name">
                        White Shirt With Pleat Detail Back
                        </a>
                        <span className="header-cart-item-info">
                        1 x $19.00
                        </span>
                    </div>
                    </li>
                    <li className="header-cart-item">
                    <div className="header-cart-item-img">
                        <img src={itemCart1} alt="IMG" />
                    </div>
                    <div className="header-cart-item-txt">
                        <a href="#" className="header-cart-item-name">
                        Converse All Star Hi Black Canvas
                        </a>
                        <span className="header-cart-item-info">
                        1 x $39.00
                        </span>
                    </div>
                    </li>
                    <li className="header-cart-item">
                    <div className="header-cart-item-img">
                        <img src={itemCart2} alt="IMG" />
                    </div>
                    <div className="header-cart-item-txt">
                        <a href="#" className="header-cart-item-name">
                        Nixon Porter Leather Watch In Tan
                        </a>
                        <span className="header-cart-item-info">
                        1 x $17.00
                        </span>
                    </div>
                    </li>
                </ul>
                <div className="header-cart-total">
                    Total: $75.00
                </div>
                <div className="header-cart-buttons">
                    <div className="header-cart-wrapbtn">
                    {/* Button */}
                    <a href="cart.html" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                        View Cart
                    </a>
                    </div>
                    <div className="header-cart-wrapbtn">
                    {/* Button */}
                    <a href="#" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                        Check Out
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
</React.Fragment>
        );
    }
};

export default Header