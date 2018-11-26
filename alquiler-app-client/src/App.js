import React, { Component, Fragment } from 'react';

import './App.css';
import NavBar from './components/navBar';
import Main from './containers/Container';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Main />
      </Fragment>
    );
  }
}

export default App;
