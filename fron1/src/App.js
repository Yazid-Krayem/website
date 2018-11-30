import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Blog from './components/Blogd';
import Header from './components/Header';
import Footer from './components/Footer'
import ItemBlog1 from './components/ItemBlog1';
import Category from './components/Category';
import Featured from './components/Featured';
import Contact from './components/contact';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


// CSS
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/animate/animate.css';
import './vendor/css-hamburgers/hamburgers.min.css';
import './vendor/animsition/css/animsition.min.css';
import './vendor/select2/select2.min.css';
import './vendor/slick/slick.css';
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './fonts/themify/themify-icons.css';
import './fonts/elegant-font/html-css/style.css';
import './fonts/themify/themify-icons.css';
import './css/util.css';
import './css/main.css';
// from moudles
import $ from "jquery";
import { MapContainer } from './components/Gmapsapi';
//////////////////////


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <ItemBlog1 />
        <Category />
        <Featured />
        <Footer />
      </React.Fragment>
    );
  }
};


export default  App;
