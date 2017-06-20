import React from 'react';
const NavLink = require('react-router-dom').NavLink;
import { Col, Navbar } from 'react-bootstrap';

const Nav = () => { 
  return(
   <div className="header">
      <Navbar>
        <div className="container nav-container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>
            <Navbar.Brand><NavLink to='/'>ELJ</NavLink></Navbar.Brand>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <NavLink exact activeClassName='active' data-toggle="collapse" data-target=".navbar-collapse.in" to='/'>
                  Home
                  <hr />
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' data-toggle="collapse" data-target=".navbar-collapse.in" to='/about'>
                  About
                  <hr />
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' data-toggle="collapse" data-target=".navbar-collapse.in" to='/portfolio'>
                  Portfolio
                  <hr />
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' data-toggle="collapse" data-target=".navbar-collapse.in" to='/blog'>
                  Blog
                  <hr />
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' data-toggle="collapse" data-target=".navbar-collapse.in" to='/contact'>
                  Contact
                  <hr />
                </NavLink>
              </li>   
            </ul>
          </div>
        </div>
      </Navbar>
    </div>
  )
}

export default Nav