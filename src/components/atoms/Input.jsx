import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = (props) => <StyledInput {...props} />;

const StyledInput = styled.input`
  flex: 1 1 100%;
  height: 38px;
  font-size: 16px;
  line-height: 1.38;
`;

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

Input.defaultProps = {
  placeholder: 'Enter...',
  value: '',
};

export default Input;
