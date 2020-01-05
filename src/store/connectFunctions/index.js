import { connect } from 'react-redux';
import { hideToast, showToast } from '../actions/toast';
import { toggleSpinner } from '../actions/spinner';


export const withToast = connect(
  state => ({
    message: state.toast.message,
    visible: state.toast.visible,
  }),
  { hideToast, showToast },
);

export const withSpinner = connect(null, { toggleSpinner });
