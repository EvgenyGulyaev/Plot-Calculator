import React from 'react';
import PropTypes from 'prop-types';
import Input from '../atoms/Input';
import Switch from '../atoms/Switch';
import styled from 'styled-components';

const Controls = ({
  formula,
  onChangeFormula,
  type,
  onChangeType,
  offHeaderValue,
  onHeaderValue
}) =>
  <StyledControls>
    <Input value={formula} onChange={onChangeFormula} />
    <CustomSwitch
      value={type}
      offHeaderValue={offHeaderValue}
      onHeaderValue={onHeaderValue}
      onChange={onChangeType}
    />
  </StyledControls>;

const StyledControls = styled.div`
  display: flex;
  justify-content: space-between;
  height: 57px;
`;

const CustomSwitch = styled(Switch)`
  width: 230px;
  padding-left: 10px;
  height: inherit;
`;

Controls.propTypes = {
  formula: PropTypes.string,
  offHeaderValue: PropTypes.string,
  onHeaderValue: PropTypes.string,
  type: PropTypes.bool,
  onChangeFormula: PropTypes.func,
  onChangeType: PropTypes.func,
};

Controls.defaultProps = {
  formula: '',
  offHeaderValue: 'Custom',
  onHeaderValue: 'Wolfram',
  type: false,
  onChangeFormula: () => null,
  onChangeType: () => null,
};

export default Controls;