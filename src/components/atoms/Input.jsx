import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {TextField, InputAdornment } from '@material-ui/core';


const Input = (props) => <StyledInput
  {...props}
  label="Formula"
  variant="outlined"
  InputProps={{
    startAdornment: <InputAdornment position="start">Y(x) =</InputAdornment>,
  }}
/>;

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
