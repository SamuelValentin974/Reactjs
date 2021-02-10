import Home from './home.js';
import Contact from './contact.js';
import Menu from './menu.js';
import LogoPizza from './img/logoPizza.png';
import React from "react";
import {Link, Router, Route} from "react-router-dom";

function Hello() {
    return (
        <nav>
        <div class="nav-wrapper">
        <Link to="/" activeClassName= "active"> <img src={LogoPizza} width="70" height="60"></img></Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <Link to="/" activeClassName= "active"> Home </Link>
            </li>
            <li>
              <Link to="/contact" activeClassName= "active"> Contact </Link>
            </li>
            <li>
              <Link to="/menu" activeClassName= "active"> Menu </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}   

export default Hello;