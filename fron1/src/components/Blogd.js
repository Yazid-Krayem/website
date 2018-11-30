import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoMo from '../images/icons/nada-zeineh.svg';
import logo from '../images/icons/nada-zeineh.svg';
import iconHeader from '../images/icons/icon-header-01.png';
import iconHeader1 from '../images/icons/icon-header-02.png';
import itemCart1 from '../images/item-cart-01.jpg';
import itemCart2 from '../images/item-cart-02.jpg';
import itemCart3 from '../images/item-cart-03.jpg';
import Footer from './Footer';



class Blog extends Component {
  render() { 
    return ( 
   <div>
 <div className="wrap_header">
    {/* Logo */}
    <Link to="/"><img className="logo" src={logo} alt="IMG-LOGO" /></Link>
    
    {/* Menu */}
    <div className="wrap_menu">
      <nav className="menu">
        <ul className="main_menu">
          <li>
          <Link to="/">Home</Link>
          </li> 
          <li>
          <Link to="/blog">Blog</Link>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
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
                <img src={itemCart1} alt="IMG" />
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
                <img src={itemCart2} alt="IMG" />
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
                <img src={itemCart3} alt="IMG" />
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
  {/* Header Mobile */}
  <div className="wrap_header_mobile">
    {/* Logo moblie */}
    <a href="index.html" className="logo-mobile">
      <img src={logo} alt="IMG-LOGO" />
    </a>
    {/* Button show menu */}
    <div className="btn-show-menu">
      {/* Header Icon mobile */}
      <div className="header-icons-mobile">
        <a href="#" className="header-wrapicon1 dis-block">
          <img src={iconHeader} className="header-icon1" alt="ICON" />
        </a>
        <span className="linedivide2" />
        <div className="header-wrapicon2">
          <img src={iconHeader1} className="header-icon1 js-show-header-dropdown" alt="ICON" />
          <span className="header-icons-noti">0</span>
          {/* Header cart noti */}
          <div className="header-cart header-dropdown">
            <ul className="header-cart-wrapitem">
              <li className="header-cart-item">
                <div className="header-cart-item-img">
                  <img src={itemCart1} alt="IMG" />
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
                  <img src={itemCart2} alt="IMG" />
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
                  <img src={itemCart3} alt="IMG" />
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
      <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </div>
    </div>
  </div>
  {/* Menu Mobile */}
  <div className="wrap-side-menu">
    <nav className="side-menu">
      <ul className="main-menu">
        <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
          <span className="topbar-child1">
            Free shipping for standard order over $100
          </span>
        </li>
        <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
          <div className="topbar-child2-mobile">
            <span className="topbar-email">
              fashe@example.com
            </span>
            <div className="topbar-language rs1-select2">
              <select className="selection-1" name="time">
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>
          </div>
        </li>
        <li className="item-topbar-mobile p-l-10">
          <div className="topbar-social-mobile">
            <a href="#" className="topbar-social-item fa fa-facebook" />
            <a href="#" className="topbar-social-item fa fa-instagram" />
            <a href="#" className="topbar-social-item fa fa-pinterest-p" />
            <a href="#" className="topbar-social-item fa fa-snapchat-ghost" />
            <a href="#" className="topbar-social-item fa fa-youtube-play" />
          </div>
        </li>
        <li className="item-menu-mobile">
          <a href="index.html">Home</a>
          <ul className="sub-menu">
            <li><a href="index.html">Homepage V1</a></li>
            <li><a href="home-02.html">Homepage V2</a></li>
            <li><a href="home-03.html">Homepage V3</a></li>
          </ul>
          <i className="arrow-main-menu fa fa-angle-right" aria-hidden="true" />
        </li>
        <li className="item-menu-mobile">
          <a href="product.html">Shop</a>
        </li>
        <li className="item-menu-mobile">
          <a href="blog.html">Blog</a>
        </li>
       
      </ul>
    </nav>
  </div>
  {/* Slide1 */}
  
  <section className="bgwhite p-t-60">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-lg-9 p-b-75">
          <div className="p-r-50 p-r-0-lg">
            {/* item blog */}
            <div className="item-blog p-b-80">
              <a href="blog-detail.html" className="item-blog-img pos-relative dis-block hov-img-zoom">
                <img src="images/blog-04.jpg" alt="IMG-BLOG" />
                <span className="item-blog-date dis-block flex-c-m pos1 size17 bg4 s-text1">
                  28 Dec, 2018
                </span>
              </a>
              <div className="item-blog-txt p-t-33">
                <h4 className="p-b-11">
                  <a href="blog-detail.html" className="m-text24">
                    Amethyst Apatite
                  </a>
                </h4>
                <div className="s-text8 flex-w flex-m p-b-21">
                  <span>
                    By Earhtly Trinknets
                    <span className="m-l-3 m-r-6">|</span>
                  </span>
                  <span>
                    Cooking, Food
                    <span className="m-l-3 m-r-6">|</span>
                  </span>
                  <span>
                    8 Comments
                  </span>
                </div>
                <p className="p-b-12">
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius
                </p>
                <a href="blog-detail.html" className="s-text20">
                  Continue Reading
                  <i className="fa fa-long-arrow-right m-l-8" aria-hidden="true" />
                </a>
              </div>
            </div>
            {/* item blog */}
            <div className="item-blog p-b-80">
              <a href="blog-detail.html" className="item-blog-img pos-relative dis-block hov-img-zoom">
                <img src="images/blog-05.jpg" alt="IMG-BLOG" />
                <span className="item-blog-date dis-block flex-c-m pos1 size17 bg4 s-text1">
                  26 Dec, 2018
                </span>
              </a>
              <div className="item-blog-txt p-t-33">
                <h4 className="p-b-11">
                  <a href="blog-detail.html" className="m-text24">
                    The White Sneakers Nearly Every Fashion Girls Own
                  </a>
                </h4>
                <div className="s-text8 flex-w flex-m p-b-21">
                  <span>
                    By Admin
                    <span className="m-l-3 m-r-6">|</span>
                  </span>
                  <span>
                    Fashion, Life style
                    <span className="m-l-3 m-r-6">|</span>
                  </span>
                  <span>
                    8 Comments
                  </span>
                </div>
                <p className="p-b-12">
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius
                </p>
                <a href="blog-detail.html" className="s-text20">
                  Continue Reading
                  <i className="fa fa-long-arrow-right m-l-8" aria-hidden="true" />
                </a>
              </div>
            </div>
            {/* item blog */}
            <div className="item-blog p-b-80">
              <a href="blog-detail.html" className="item-blog-img pos-relative dis-block hov-img-zoom">
                <img src="images/blog-08.jpg" alt="IMG-BLOG" />
                <span className="item-blog-date dis-block flex-c-m pos1 size17 bg4 s-text1">
                  22 Dec, 2018
                </span>
              </a>
              <div className="item-blog-txt p-t-33">
                <h4 className="p-b-11">
                  <a href="blog-detail.html" className="m-text24">
                    Black Friday Guide: Best Sales &amp; Discount Codes
                  </a>
                </h4>
                <div className="s-text8 flex-w flex-m p-b-21">
                  <span>
                    By Admin
                    <span className="m-l-3 m-r-6">|</span>
                  </span>
                  <span>
                    Cooking, Food
                    <span className="m-l-3 m-r-6">|</span>
                  </span>
                  <span>
                    8 Comments
                  </span>
                </div>
                <p className="p-b-12">
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius
                </p>
                <a href="blog-detail.html" className="s-text20">
                  Continue Reading
                  <i className="fa fa-long-arrow-right m-l-8" aria-hidden="true" />
                </a>
              </div>
            </div>
            {/* item blog */}
            <div className="item-blog p-b-80">
              <a href="blog-detail.html" className="item-blog-img pos-relative dis-block hov-img-zoom">
                <img src="images/blog-02.jpg" alt="IMG-BLOG" />
                <span className="item-blog-date dis-block flex-c-m pos1 size17 bg4 s-text1">
                  18 Dec, 2018
                </span>
              </a>
              <div className="item-blog-txt p-t-33">
                <h4 className="p-b-11">
                  <a href="blog-detail.html" className="m-text24">
                    Black Friday Guide: Best Sales &amp; Discount Codes
                  </a>
                </h4>
                <div className="s-text8 flex-w flex-m p-b-21">
                  <span>
                    By Admin
                    <span className="m-l-3 m-r-6">|</span>
                  </span>
                  <span>
                    Cooking, Food
                    <span className="m-l-3 m-r-6">|</span>
                  </span>
                  <span>
                    8 Comments
                  </span>
                </div>
                <p className="p-b-12">
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius
                </p>
                <a href="blog-detail.html" className="s-text20">
                  Continue Reading
                  <i className="fa fa-long-arrow-right m-l-8" aria-hidden="true" />
                </a>
              </div>
            </div>
            {/* item blog */}
            <div className="item-blog p-b-80">
              <a href="blog-detail.html" className="item-blog-img pos-relative dis-block hov-img-zoom">
                <img src="images/blog-03.jpg" alt="IMG-BLOG" />
                <span className="item-blog-date dis-block flex-c-m pos1 size17 bg4 s-text1">
                  16 Dec, 2018
                </span>
              </a>
              <div className="item-blog-txt p-t-33">
                <h4 className="p-b-11">
                  <a href="blog-detail.html" className="m-text24">
                    Black Friday Guide: Best Sales &amp; Discount Codes
                  </a>
                </h4>
                <div className="s-text8 flex-w flex-m p-b-21">
                  <span>
                    By Admin
                    <span className="m-l-3 m-r-6">|</span>
                  </span>
                  <span>
                    Cooking, Food
                    <span className="m-l-3 m-r-6">|</span>
                  </span>
                  <span>
                    8 Comments
                  </span>
                </div>
                <p className="p-b-12">
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius
                </p>
                <a href="blog-detail.html" className="s-text20">
                  Continue Reading
                  <i className="fa fa-long-arrow-right m-l-8" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
  <Footer />
  {/* Back to top */}
  <div className="btn-back-to-top bg0-hov" id="myBtn">
    <span className="symbol-btn-back-to-top">
      <i className="fa fa-angle-double-up" aria-hidden="true" />
    </span>
  </div>
  {/* Container Selection */}
  <div id="dropDownSelect1" />
  <div id="dropDownSelect2" />
</div>

     );
  }
}
 
export default Blog;
