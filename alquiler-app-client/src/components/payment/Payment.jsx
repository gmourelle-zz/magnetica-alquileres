import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cond, T, gte, complement, equals } from 'ramda';
import DeptoSelected from '../deptoSelected';
import {
  DESC_4_DIAS,
  DESC_15_DIAS,
  DESC_CLIENTE_EXISTENTE
} from '../../constants';
import './Payment.css';
class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      days: '',
      dni: '',
      total: 0,
      disableBtnAplicar: true
    };
  }

  handleInputChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  handleDayChange = ({ target }) => {
    this.setState(
      {
        [target.name]: target.value
      },
      () => {
        if (
          this.state.days ||
          this.state.days === '' ||
          parseInt(this.state.days) === 0
        )
          this.setState({ total: 0, disableBtnAplicar: false });

        const subTotal = this.calcularSubTotal(
          this.state.days,
          this.props.deptoSelected
        );
        const total = this.aplicarDescCliente(
          subTotal,
          this.state.dni,
          this.props.deptoSelected
        );

        this.setState({ total: total, disableBtnAplicar: false });
      }
    );
  };

  aplicarDescCliente = (subTotal, dni, deptoSelected) => {
    const esCliente = deptoSelected.inquilinos.find(
      inquilino => inquilino.dni === dni
    );

    if (esCliente) {
      return subTotal * (1 - DESC_CLIENTE_EXISTENTE / 100);
    }
    return subTotal;
  };

  calcularSubTotal = (days, deptoSelected) => {
    const { pMes, pNoche } = deptoSelected;
    const total = cond([
      [equals(30), () => pMes * (1 - DESC_15_DIAS / 100)],
      [complement(gte(15)), days => pNoche * days * (1 - DESC_15_DIAS / 100)],
      [complement(gte(4)), days => pNoche * days * (1 - DESC_4_DIAS / 100)],

      [T, days => pNoche * days]
    ])(parseInt(days));

    return total;
  };

  handleSubmit = e => {
    e.preventDefault();
    const newAlquiler = this.state;

    this.setState({
      name: '',
      days: '',
      dni: '',
      total: '',
      disableBtnAplicar: true
    });

    this.props.onSubmit(this.props.deptoSelected.id, newAlquiler);
  };

  render() {
    const { deptoSelected, message } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form onSubmit={this.handleSubmit}>
              <div className="row depto-selected">
                <div className="col-12">
                  <div className="row">
                    <div className="col-12">
                      {!deptoSelected && (
                        <p>No hay ningun departamento seleccionado</p>
                      )}
                      {deptoSelected && !message && (
                        <DeptoSelected deptoSelected={deptoSelected} />
                      )}
                      {message && <span>{message}</span>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <div className="form-group">
                    <label className="label">Nombre</label>
                    <input
                      type="text"
                      value={this.state.name}
                      name="name"
                      onChange={this.handleInputChange}
                      pattern="[A-Za-z]+"
                      title="Name"
                      placeholder="Name"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group">
                    <label className="label">Dni</label>
                    <input
                      type="text"
                      value={this.state.dni}
                      name="dni"
                      onChange={this.handleInputChange}
                      title="Dni"
                      placeholder="DNI"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group">
                    <label className="label">Dias a alquilar</label>
                    <input
                      type="number"
                      min="1"
                      title="Dias"
                      name="days"
                      value={this.state.days}
                      onChange={this.handleDayChange}
                      placeholder="Dias"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group div-total col-12">
                  <label className="span-total">Total a pagar($):</label>
                  <span>{this.state.total}</span>
                </div>
              </div>
              <input
                type="submit"
                className="btn btn-primary"
                value="Alquilar"
                disabled={this.state.disableBtnAplicar}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Payment.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  deptoSelected: PropTypes.shape({
    id: PropTypes.number,
    ubicacion: PropTypes.string,
    ambientes: PropTypes.number,
    metros: PropTypes.number,
    pNoche: PropTypes.number,
    pMes: PropTypes.number
  }),
  message: PropTypes.string
};
export default Payment;
