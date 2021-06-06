import React from 'react';
//import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'


const Nav = () => (
  <nav className="navbar navbar-expand-md navbar-light fixed-top" id="mainNav">
    <div className="container">
      <NavLink exact to="/" className="navbar-brand">My Blog</NavLink>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Article/List/" className="nav-link">Article list</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Article/Create/" className="nav-link">Create article</NavLink>
            </li>        
          </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
