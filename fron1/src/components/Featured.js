import React from 'react';
import product from '../images/item-16.jpg';
import product1 from '../images/item-17.jpg';
import product2 from '../images/item-08.jpg';
import product3 from '../images/item-03.jpg';
import product4 from '../images/item-05.jpg';

class Featured extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h4 className="m-text23 p-t-65 p-b-34">
              Featured Products
            </h4>
            <ul className="bgwhite">
              <li className="flex-w p-b-20">
                <a href="product-detail.html" className="dis-block wrap-pic-w w-size22 m-r-20 trans-0-4 hov4">
                  <img src={product} alt="IMG-PRODUCT" />
                </a>
                <div className="w-size23 p-t-5">
                  <a href="product-detail.html" className="s-text20">
                    White Shirt With Pleat Detail Back
                  </a>
                  <span className="dis-block s-text17 p-t-6">
                    $19.00
                  </span>
                </div>
              </li>
              <li className="flex-w p-b-20">
                <a href="product-detail.html" className="dis-block wrap-pic-w w-size22 m-r-20 trans-0-4 hov4">
                  <img src={product1} alt="IMG-PRODUCT" />
                </a>
                <div className="w-size23 p-t-5">
                  <a href="product-detail.html" className="s-text20">
                    Converse All Star Hi Black Canvas
                  </a>
                  <span className="dis-block s-text17 p-t-6">
                    $39.00
                  </span>
                </div>
              </li>
              <li className="flex-w p-b-20">
                <a href="product-detail.html" className="dis-block wrap-pic-w w-size22 m-r-20 trans-0-4 hov4">
                  <img src={product2} alt="IMG-PRODUCT" />
                </a>
                <div className="w-size23 p-t-5">
                  <a href="product-detail.html" className="s-text20">
                    Nixon Porter Leather Watch In Tan
                  </a>
                  <span className="dis-block s-text17 p-t-6">
                    $17.00
                  </span>
                </div>
              </li>
              <li className="flex-w p-b-20">
                <a href="product-detail.html" className="dis-block wrap-pic-w w-size22 m-r-20 trans-0-4 hov4">
                  <img src={product3} alt="IMG-PRODUCT" />
                </a>
                <div className="w-size23 p-t-5">
                  <a href="product-detail.html" className="s-text20">
                    Denim jacket blue
                  </a>
                  <span className="dis-block s-text17 p-t-6">
                    $39.00
                  </span>
                </div>
              </li>
              <li className="flex-w p-b-20">
                <a href="product-detail.html" className="dis-block wrap-pic-w w-size22 m-r-20 trans-0-4 hov4">
                  <img src={product4} alt="IMG-PRODUCT" />
                </a>
                <div className="w-size23 p-t-5">
                  <a href="product-detail.html" className="s-text20">
                    Nixon Porter Leather Watch In Tan
                  </a>
                  <span className="dis-block s-text17 p-t-6">
                    $17.00
                  </span>
                </div>
              </li>
            </ul>
            </React.Fragment>
        )
    }
}

export default Featured