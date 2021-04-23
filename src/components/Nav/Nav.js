import React from 'react';
//import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'


const Nav = () => (
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <NavLink exact to="/" className="navbar-brand">My Blog</NavLink>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fa fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <NavLink exact to="/" className="nav-link">Home</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/Article/List/" className="nav-link">Article list</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/Article/Create/" className="nav-link">Create article</NavLink>
            </li>        
          </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
