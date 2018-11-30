import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Blog from './Blogd';
import Footer from './Footer';


// CSS
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../vendor/animate/animate.css';
import '../vendor/css-hamburgers/hamburgers.min.css';
import '../vendor/animsition/css/animsition.min.css';
import '../vendor/select2/select2.min.css';
import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../fonts/themify/themify-icons.css';
import '../fonts/elegant-font/html-css/style.css';
import '../fonts/themify/themify-icons.css';
import '../css/util.css';
import '../css/main.css';
import '../vendor/lightbox2/css/lightbox.min.css';
import '../vendor/daterangepicker/daterangepicker.css';
import '../vendor/animate/animate.css';
import '../fonts/Linearicons-Free-v1.0.0/icon-font.min.css';
/////
// slick slider 
import '../vendor/slick/slick.css';

// from moudles
import $ from "jquery";
//////////////////////




//images for LOGO and the Header
import logo from '../images/icons/nada-zeineh.svg';
import iconHeader from '../images/icons/icon-header-01.png';
import iconHeader1 from '../images/icons/icon-header-02.png';
////////////////////////////////////////////////////////
//images for itemCART section
import itemCart1 from '../images/item-cart-01.jpg';
import itemCart2 from '../images/item-cart-02.jpg';
import itemCart3 from '../images/item-cart-03.jpg';
////////////////////////////////////////////////////////
//images for the banner section
import banner from '../images/boho-necklace-starfish-21.jpg';
import banner1 from '../images/earrings-amethyst-apatite.jpg';
import banner2 from '../images/necklace-owl-4-r.jpg';
import banner3 from '../images/bracelet-turquoise-leather-12-r.jpg';
/////////////////////////////////////////////////

//images for the Features section
import feature1 from '../images/item-02.jpg';
import feature2 from '../images/item-03.jpg';
import feature3 from '../images/item-05.jpg';
import feature4 from '../images/item-07.jpg';
/////////////////////////////////////////////////////
// images for the blog section
import blog4 from '../images/blog-03.jpg';
import blog3 from '../images/blog-02.jpg';
import blog5 from '../images/earrings-amethyst-appatite-31-r.jpg';
///////////////////////////////////////////////////////



class Home extends Component {
  
  render(){
    
    return (
 
<div >
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
                <option>EUR</option>blog5
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
          <a href="product.html">Sale</a>
        </li>
        <li className="item-menu-mobile">
          <a href="cart.html">Features</a>
        </li>
        <li className="item-menu-mobile">
          <a href="blog.html">Blog</a>
        </li>
        <li className="item-menu-mobile">
          <a href="about.html">About</a>
        </li>
        <li className="item-menu-mobile">
          <a href="contact.html">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
  {/* Slide1 */}
  
  {/* Banner */}
  <section className="banner bgwhite p-t-40 p-b-40">
    <div className="container">
      <div className="row">
        <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
          {/* block1 */}
          <div className="block1 hov-img-zoom pos-relative m-b-30">
            <img src={banner} alt="IMG-BENNER" />
            <div className="block1-wrapbtn w-size2">
              {/* Button */}
              <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                Dresses
              </a>
            </div>
          </div>
          {/* block1 */}
          <div className="block1 hov-img-zoom pos-relative m-b-30">
            <img src={banner} alt="IMG-BENNER" />
            <div className="block1-wrapbtn w-size2">
              {/* Button */}
              <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                Sunglasses
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
          {/* block1 */}
          <div className="block1 hov-img-zoom pos-relative m-b-30">
            <img src={banner1} alt="IMG-BENNER" />
            <div className="block1-wrapbtn w-size2">
              {/* Button */}
              <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                Earrings
              </a>
            </div>
          </div>
          {/* block1 */}
          <div className="block1 hov-img-zoom pos-relative m-b-30">
            <img src={banner2} alt="IMG-BENNER" />
            <div className="block1-wrapbtn w-size2">
              {/* Button */}
              <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                Necklace
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
          {/* block1 */}
          <div className="block1 hov-img-zoom pos-relative m-b-30">
            <img src={banner3} alt="IMG-BENNER" />
            <div className="block1-wrapbtn w-size2">
              {/* Button */}
              <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                Bracelet
              </a>
            </div>
          </div>
          {/* block2 */}
        </div>
      </div>
    </div>
  </section>
  {/* New Product */}
  
  {/* Blog */}
  <section className="blog bgwhite p-t-94 p-b-65">
    <div className="container">
      <div className="sec-title p-b-52">
        <h3 className="m-text5 t-center">
          Our Blog
        </h3>
      </div>
      <div className="row">
        <div className="col-sm-10 col-md-4 p-b-30 m-l-r-auto">
          {/* Block3 */}
          <div className="block3">
            <a href="blog-detail.html" className="block3-img dis-block hov-img-zoom">
              <img src={blog5} alt="IMG-BWardLOG" />
            </a>
            <div clblog5assName="block3-txt p-t-14">
              <h4 className="p-b-7">
                <a href="blog-detail.html" className="m-text11">
                Amethyst Apatite earrings
                </a>
              </h4>
              <span className="s-text6">By</span> <span className="s-text7">Nada Zeineh</span>
              <span className="s-text6">on</span> <span className="s-text7">July 22, 2017</span>
              <p className="s-text8 p-t-16">
                Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et malesuada fames
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-10 col-md-4 p-b-30 m-l-r-auto">
          {/* Block3 */}
          <div className="block3">
            <a href="blog-detail.html" className="block3-img dis-block hov-img-zoom">
              <img src={blog3} alt="IMG-BLOG" />
            </a>
            <div className="block3-txt p-t-14">
              <h4 className="p-b-7">
                <a href="blog-detail.html" className="m-text11">
                  The White Sneakers Nearly Every Fashion Girls Own
                </a>
              </h4>
              <span className="s-text6">By</span> <span className="s-text7">Nada Zeineh</span>
              <span className="s-text6">on</span> <span className="s-text7">July 18, 2017</span>
              <p className="s-text8 p-t-16">
                Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit ame
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-10 col-md-4 p-b-30 m-l-r-auto">
          {/* Block3 */}
          <div className="block3">
            <a href="blog-detail.html" className="block3-img dis-block hov-img-zoom">
              <img src={blog4} alt="IMG-BLOG" />
            </a>
            <div className="block3-txt p-t-14">
              <h4 className="p-b-7">
                <a href="blog-detail.html" className="m-text11">
                  New York SS 2018 Street Style: Annina Mislin
                </a>
              </h4>
              <span className="s-text6">By</span> <span className="s-text7">Nada Zeineh</span>
              <span className="s-text6">on</span> <span className="s-text7">July 2, 2017</span>
              <p className="s-text8 p-t-16">
                Proin nec vehicula lorem, a efficitur ex. Nam vehicula nulla vel erat tincidunt, sed hendrerit ligula porttitor. Fusce sit amet maximus nunc
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Instagram */}

  {/* Shipping */}
  
  {/* Footer */}
  <Footer />
  {/* Back to top */}
  <div className="btn-back-to-top bg0-hov" id="myBtn">
    <span className="symbol-btn-back-to-top">
      <i className="fa fa-angle-double-up" aria-hidden="true" />
    </span>
  </div>
  {/* Container Selection1 */}
  <div id="dropDownSelect1" />

  {/* javascript */}

	<script  src="../vendor/jquery/jquery-3.2.1.min.js"></script>
	<script  src="../vendor/animsition/js/animsition.min.js"></script>
	<script  src="../vendor/bootstrap/js/popper.js"></script>
	<script  src="../vendor/bootstrap/js/bootstrap.min.js"></script>
	<script  src="../vendor/select2/select2.min.js"></script>
	{/* <script type="text/javascript">
		$(".selection-1").select2({
			minimumResultsForSearch: 20,
			dropdownParent: $('#dropDownSelect1')
		});
	</script> */}

	<script  src="../vendor/slick/slick.min.js"></script>
	<script  src="../js/slick-custom.js"></script>

	<script  src="../vendor/countdowntime/countdowntime.js"></script>
	<script  src="../vendor/lightbox2/js/lightbox.min.js"></script>
	<script  src="../vendor/sweetalert/sweetalert.min.js"></script>
	{/* <script >
		$('.block2-btn-addcart').each(function(){
			var nameProduct = $(this).parent().parent().parent().find('.block2-name').html();
			$(this).on('click', function(){
				swal(nameProduct, "is added to cart !", "success");
			});
		});

		$('.block2-btn-addwishlist').each(function(){
			var nameProduct = $(this).parent().parent().parent().find('.block2-name').html();
			$(this).on('click', function(){
				swal(nameProduct, "is added to wishlist !", "success");
			});
		});
	</script> */}
<script  src="../js/main.js"></script>

</div>


    );
  }
}

export default Home;
