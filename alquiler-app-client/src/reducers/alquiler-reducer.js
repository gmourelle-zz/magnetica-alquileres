import { Actions } from '../constants';

const initialState = {
  deptos: {}
};

export const alquileresReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_DEPTOS_REQUEST:
      return { ...state, fetchingDeptos: true };
    case Actions.GET_DEPTOS_SUCCESS:
      const deptos = action.payload.reduce(
        (acc, curr) => ({ ...acc, [curr.id]: { ...curr } }),
        {}
      );
      return {
        ...state,
        deptos: deptos,
        fetchingDeptos: false
      };
    case Actions.DEPTO_SELECTED:
      return { ...state, deptoSelected: action.payload, message: '' };

    case Actions.SUBMIT_ALQUILER_SUCCESS:
      return {
        ...state,
        deptos: {
          ...state.deptos,
          [action.payload.depto.id]: action.payload.depto
        },
        message: action.payload.message,
        updatingDepto: false
      };
    case Actions.SUBMIT_ALQUILER_REQUEST:
      return { ...state, updatingDepto: true };

    case Actions.RAISE_ERROR:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};
