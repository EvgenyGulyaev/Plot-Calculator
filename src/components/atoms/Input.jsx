import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const Input = (props) => <StyledInput {...props} label="Formula" variant="outlined" />;

const StyledInput = styled(TextField)`
  flex: 1 1 auto;
  height: 38px;
  font-size: 16px;
  line-height: 1.38;
`;

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  placeholder: 'Enter...',
  value: '',
  onChange: () => null,
};

export default Input;
