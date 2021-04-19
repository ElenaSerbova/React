import React from 'react';
//import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'


const Nav = () => (
  <nav>
    <NavLink exact to="/" className="btn btn-primary" activeClassName="btn-dark">Home</NavLink>
    <NavLink to="/Article/List/" className="btn btn-primary" activeClassName="btn-dark">Article list</NavLink>
    <NavLink to="/Article/Create/" className="btn btn-primary" activeClassName="btn-dark">Create article</NavLink>
  </nav>
);

// Nav.propTypes = {};

// Nav.defaultProps = {};

export default Nav;
