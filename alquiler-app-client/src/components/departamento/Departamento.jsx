import React from 'react';
import PropTypes from 'prop-types';
import './Departamento.css';
const Departamento = ({ depto, onDeptoClick }) => {
  const { ubicacion, ambientes, metros, pNoche, pMes } = depto;
  return (
    <div className="depto-header" onClick={() => onDeptoClick(depto)}>
      <label>Ubicacion: </label>
      <span className="text-class">{ubicacion}</span>

      <label>Ambientes:</label>
      <span className="text-class">{ambientes}</span>

      <label>Metros cuadrados:</label>
      <span className="text-class">{metros}</span>

      <label>Alquiler por noche($):</label>
      <span className="text-class">{pNoche}</span>

      <label>Alquiler por mes($):</label>
      <span className="text-class">{pMes}</span>
    </div>
  );
};

Departamento.propTypes = {
  onDeptoClick: PropTypes.func.isRequired,
  depto: PropTypes.shape({
    id: PropTypes.number,
    ubicacion: PropTypes.string,
    ambientes: PropTypes.number,
    metros: PropTypes.number,
    pNoche: PropTypes.number,
    pMes: PropTypes.number
  }).isRequired
};

export default Departamento;
