import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {TextField, InputAdornment } from '@material-ui/core';


const Input = (props) => <StyledInput
  {...props}
  variant="outlined"
  InputProps={{
    startAdornment: <InputAdornment position="start">{props.header}</InputAdornment>,
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
  header: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func
};

Input.defaultProps = {
  placeholder: 'Enter...',
  value: '',
  onChange: () => null,
  header: 'Y(x) =',
  label: 'Formula'
};

export default Input;
