import React, { Component } from 'react';
import DeptosList from '../components/deptosList';
import Payment from '../components/payment';
import './Main.css';

class Main extends Component {
  componentDidMount() {
    this.props.fetchDeptos();
  }
  render() {
    const {
      deptos,
      selectDepto,
      submitAlquiler,
      deptoSelected,
      message
    } = this.props;

    return (
      <div className="wrapper">
        <div className="box content">
          <DeptosList deptos={deptos} onDeptoClick={selectDepto} />
        </div>
        <div className="box sidebar">
          <Payment
            onSubmit={submitAlquiler}
            message={message}
            deptoSelected={deptoSelected}
          />
        </div>
      </div>
    );
  }
}

export default Main;
