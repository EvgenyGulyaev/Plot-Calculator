import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import SnackBar from 'react-material-snackbar';
import { Button } from '@material-ui/core';
import { withToast } from '../../store/connectFunctions';

class Toast extends React.Component {
  timeoutId = null;

  componentDidUpdate(prevProps) {
    if (
      this.props.visible !== prevProps.visible
      && this.props.visible
    ) {
      this.initCloseTimeout();
    }
  }

  initCloseTimeout = () => {
    if (this.timeoutId) {
      return;
    }
    this.timeoutId = setTimeout(() => {
      this.timeoutId = null;
      this.props.hideToast();
    }, 3000);
  }

  onMouseEnter = () => {
    clearTimeout(this.timeoutId);
    this.timeoutId = null;
  }

  render() {
    const { message, visible } = this.props;
    return (
      <SnackBar
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.initCloseTimeout}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={visible}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={message}
        action={[
          <Button
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={this.props.hideToast}
          >
            <i className="material-icons">close</i>
          </Button>,
        ]}
      />
    );
  }
}

Toast.propTypes = {
  hideToast: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default compose(
  withToast,
)(Toast);
