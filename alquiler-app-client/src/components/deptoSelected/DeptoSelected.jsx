import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const DeptoSelected = props => {
  const { ubicacion, ambientes, metros, pNoche, pMes } = props.deptoSelected;
  return (
    <Fragment>
      <div className="form-group">
        <label>Ubicacion: </label>
        <span className="text-class">{ubicacion}</span>
      </div>
      <div className="form-group">
        <label>Ambientes:</label>
        <span className="text-class">{ambientes}</span>
      </div>
      <div className="form-group">
        <label>Metros cuadrados:</label>
        <span className="text-class">{metros}</span>
      </div>
      <div className="form-group">
        <label>Alquiler por noche($):</label>
        <span className="text-class">{pNoche}</span>
      </div>
      <div className="form-group">
        <label>Alquiler por mes($):</label>
        <span className="text-class">{pMes}</span>
      </div>
    </Fragment>
  );
};

DeptoSelected.propTypes = {
  deptoSelected: PropTypes.shape({
    id: PropTypes.number,
    ubicacion: PropTypes.string,
    ambientes: PropTypes.number,
    metros: PropTypes.number,
    pNoche: PropTypes.number,
    pMes: PropTypes.number
  }).isRequired
};

export default DeptoSelected;
