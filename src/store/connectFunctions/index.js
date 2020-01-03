import { connect } from 'react-redux';
import { hideToast } from '../actions/toast';
import { toggleSpinner } from '../actions/spinner';


export const withToast = connect(
  state => ({
    message: state.toast.message,
    visible: state.toast.visible,
  }),
  { hideToast },
);

export const withSpinner = connect(null, { toggleSpinner });
