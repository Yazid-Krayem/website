import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Footer extends React.Component {
    render() { 
        return ( 
            <div>
                {/* Footer */}
  <footer className="bg6 p-t-45 p-b-43 p-l-45 p-r-45">
    <div className="flex-w p-b-90 toEditContain">
      <div className="w-size6 p-t-30 p-l-15 p-r-15 respon3 toEditN">
        <h4 className="s-text12 p-b-30">
          GET IN TOUCH
        </h4>
        <div>
          <p className="s-text7 w-size27">
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
          </p>
          <div className="flex-m p-t-30">
            <a href="#" className="fs-18 color1 p-r-20 fa fa-facebook" />
            <a href="#" className="fs-18 color1 p-r-20 fa fa-instagram" />
          </div>
        </div>
      </div>
      <div className="w-size8 p-t-30 p-l-15 p-r-15 respon3 toEditToo">
        <h4 className="s-text12 p-b-30">
          Newsletter
        </h4>
        <form>
          <div className="effect1 w-size9">
            <input className="s-text7 bg6 w-full p-b-5" type="text" name="email" placeholder="email@example.com" />
            <span className="effect1-line" />
          </div>
          <div className="w-size2 p-t-20">
            {/* Button */}
            <button className="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
    
      <div className="t-center s-text8 p-t-20">
        Copyright © 2018 All rights reserved. | This template was made by Codfish 
      </div>
  </footer>
            </div>
         );
    }
}
 
export default Footer;