import { TOGGLE_SPINNER } from '../actionNames';

const initialState = {
  status: false,
};

const actions = (state = initialState, { type, data } = {}) => {
  switch (type) {
    case TOGGLE_SPINNER: {
      return {
        ...state,
        status: data !== undefined ? data : !state.status,
      };
    }

    default:
      return state;
  }
};

export default actions;
