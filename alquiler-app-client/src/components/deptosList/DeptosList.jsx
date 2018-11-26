import React from 'react';

import PropTypes from 'prop-types';
import Departamento from '../departamento/Departamento';
import './DeptosList.css';
const DeptosList = ({ deptos, onDeptoClick }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="row">
            {deptos.length === 0 && (
              <span className="depto-selected">
                No hay departamentos para visualizar
              </span>
            )}
            {deptos &&
              deptos.map(depto => (
                <div key={depto.id} className="col-4 box">
                  <Departamento
                    key={depto.id}
                    depto={depto}
                    onDeptoClick={onDeptoClick}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

DeptosList.propTypes = {
  onDeptoClick: PropTypes.func.isRequired,
  deptos: PropTypes.array.isRequired
};
export default DeptosList;
