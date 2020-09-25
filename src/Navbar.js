import React, { Component } from 'react';
import logo from "./img/logo.png";
import $ from "jquery";
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
      
      componentDidMount() {

          // click event
          $(".PREMIUM_l").on("click", function() { 
            $(".PREMIUM_l").addClass('active');
            $(".BASIC_l").removeClass('active');
            $(".METAL_l").removeClass('active');
            $(".PREMIUM").show();
            $(".BASIC").hide();
            $(".METAL").hide();
          });
  
          $(".BASIC_l").on("click", function() { 
            $(".BASIC_l").addClass('active');
            $(".PREMIUM_l").removeClass('active');
            $(".METAL_l").removeClass('active');
            $(".BASIC").show();
            $(".PREMIUM").hide();
            $(".METAL").hide();
          });
  
          $(".METAL_l").on("click", function() { 
            $(".METAL_l").addClass('active');
            $(".PREMIUM_l").removeClass('active');
            $(".BASIC_l").removeClass('active');
            $(".METAL").show();
            $(".BASIC").hide();
            $(".PREMIUM").hide();
          });
  
  
        
      }

  render(){
  return (
    <div>
      <div className=" navigation">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mx-xl-5 mx-lg-5">
          <NavLink exact className="navbar-brand" to="/"><img alt="OnJuno Logo" src={logo} className="h-11 cursor-pointer" /></NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse text-center font-weight-bold ml-lg-5" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item p-3">
                <NavLink className="nav-link" exact activeClassName="active_nav" to="/">Home</NavLink>
              </li>
              <li className="nav-item dropdown p-3">
                <a className="nav-link drop-color" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Company<i className="fa fa-angle-down ml-1" aria-hidden="true"></i>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/">About</a>
                  <a className="dropdown-item" href="/">Newsroom</a>
                  <a className="dropdown-item" href="/">Careers</a>
                  <a className="dropdown-item" href="/">Partners</a>
                </div>
              </li>
              <li className="nav-item dropdown p-3">
                <a className="nav-link drop-color" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Learn<i className="fa fa-angle-down ml-1" aria-hidden="true"></i>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/">Blog</a>
                  <a className="dropdown-item" href="/">Guides</a>
                  <a className="dropdown-item" href="/">Help Center</a>
                </div>
              </li>
              <li className="nav-item dropdown p-3">
                <a className="nav-link drop-color" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Legal<i className="fa fa-angle-down ml-1" aria-hidden="true"></i>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/">Privacy Policy</a>
                  <a className="dropdown-item" href="/">Terms of use</a>
                  <a className="dropdown-item" href="/">Trademarks</a>
                </div>
              </li>
            </ul>
            <span className="nav-item text-center">
              <div className="flex justify-end mr-auto w-1/2 items-center">
                <a href="/login" className=""><button className="h-10 w-30 secondary-btn secondary-btn-animation-small"><span>
                  Login
                </span></button></a>
                <a href="/get-started" className=""><button className="ml-3 h-10 w-30 primary-btn primary-btn-animation-small primary-btn-animation-small:hover"><span>
                  Signup
                </span></button></a></div>
            </span>

          </div>
        </nav>
      </div>

    </div>
  );
}

}


export default Navbar;