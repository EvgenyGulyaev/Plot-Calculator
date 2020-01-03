import {
  SHOW_TOAST,
  HIDE_TOAST,
} from '../actionNames';

const initialState = {
  visible: false,
  message: '',
};

const toast = (state = initialState, { type, data } = {}) => {
  switch (type) {
    case SHOW_TOAST:
      return {
        ...state,
        visible: true,
        message: data.message,
      };

    case HIDE_TOAST:
      return {
        ...state,
        visible: false,
        message: '',
      };

    default:
      return state;
  }
};

export default toast;
