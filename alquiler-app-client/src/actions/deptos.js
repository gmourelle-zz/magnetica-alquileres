import { Actions } from '../constants';
import { getDeptos, putDepto } from '../services';

const getDeptosSuccess = payload => ({
  type: Actions.GET_DEPTOS_SUCCESS,
  payload
});
const getDeptosRequest = () => ({
  type: Actions.GET_DEPTOS_REQUEST
});

const submitAlquilerRequest = () => ({
  type: Actions.SUBMIT_ALQUILER_REQUEST
});

export const submitAlquilerSuccess = payload => ({
  type: Actions.SUBMIT_ALQUILER_SUCCESS,
  payload
});

export const selectDepto = depto => ({
  type: Actions.DEPTO_SELECTED,
  payload: depto
});

export const fetchDeptos = () => {
  return dispatch => {
    dispatch(getDeptosRequest());

    getDeptos()
      .then(depto_data => {
        dispatch(getDeptosSuccess(depto_data));
      })
      .catch(err => err);
  };
};

export const submitAlquiler = (id, inquilino) => {
  return dispatch => {
    dispatch(submitAlquilerRequest());
    putDepto(id, inquilino)
      .then(depto_data => dispatch(submitAlquilerSuccess(depto_data)))
      .catch(err => err);
  };
};
