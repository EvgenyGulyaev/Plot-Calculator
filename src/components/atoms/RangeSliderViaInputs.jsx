import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from './Input';

const RangeSliderViaInputs = ({value, onChange: onChangeValue, onBlur}) => {
  const onChange = (event) => {
    let [from, to] = value;
    if (event.target.name === 'from') return onChangeValue(null, [event.target.value, to]);
    return onChangeValue(null, [from, event.target.value]);
  };

  const [from, to] = value;

  return <Content>
    <Input
      name="from"
      onChange={onChange}
      value={`${from}`}
      label="From"
      header="From"
      className="text-input"
      onBlur={onBlur}
    />
    <Input
      name="to"
      onChange={onChange}
      value={`${to}`}
      label="To"
      header="To"
      className="text-input"
      onBlur={onBlur}
    />
  </Content>;
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 400px;
  margin-left: 20px;
  
  .text-input {
    margin-right: 20px;
  }
`;

RangeSliderViaInputs.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.array,
};

RangeSliderViaInputs.defaultProps = {
  onChange: () => null,
  value: [],
};

export default RangeSliderViaInputs;


