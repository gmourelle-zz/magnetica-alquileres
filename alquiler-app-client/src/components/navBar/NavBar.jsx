import React, { Fragment } from 'react';
import './NavBar.css';
import logo from './logo.svg';
const NavBar = () => {
  return (
    <Fragment>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Alquileres Magnetica</h1>
      </header>
    </Fragment>
  );
};

export default NavBar;
