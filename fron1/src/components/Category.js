import React, { Component } from 'react';


import product from '../images/item-16.jpg';
import product1 from '../images/item-17.jpg';
import product2 from '../images/item-08.jpg';
import product3 from '../images/item-03.jpg';
import product4 from '../images/item-05.jpg';

class Category extends React.Component{
    render(){
        return (
<React.Fragment>
<div className="col-md-4 col-lg-3 p-b-75">
          <div className="rightbar">
            {/* Search */}
            <div className="pos-relative bo11 of-hidden">
              <input className="s-text7 size16 p-l-23 p-r-50" type="text" name="search-product" placeholder="Search" />
              <button className="flex-c-m size5 ab-r-m color1 color0-hov trans-0-4">
                <i className="fs-13 fa fa-search" aria-hidden="true" />
              </button>
            </div>
            {/* Categories */}
            <h4 className="m-text23 p-t-56 p-b-34">
              Categories
            </h4>
            <ul>
              <li className="p-t-6 p-b-8 bo6">
                <a href="#" className="s-text13 p-t-5 p-b-5">
                  Fashion
                </a>
              </li>
              <li className="p-t-6 p-b-8 bo7">
                <a href="#" className="s-text13 p-t-5 p-b-5">
                  Beauty
                </a>
              </li>
              <li className="p-t-6 p-b-8 bo7">
                <a href="#" className="s-text13 p-t-5 p-b-5">
                  Street Style
                </a>
              </li>
              <li className="p-t-6 p-b-8 bo7">
                <a href="#" className="s-text13 p-t-5 p-b-5">
                  Life Style
                </a>
              </li>
              <li className="p-t-6 p-b-8 bo7">
                <a href="#" className="s-text13 p-t-5 p-b-5">
                  DIY &amp; Crafts
                </a>
              </li>
            </ul>
          </div>
        </div>
</React.Fragment>           
        );
    }
};

export default Category