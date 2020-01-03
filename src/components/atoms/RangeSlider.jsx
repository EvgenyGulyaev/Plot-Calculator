import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import styled from 'styled-components';

const getText = (value) => `${value}`;

const RangeSlider = (props) =>
  <Content>
    <Typography className='text' gutterBottom> Value
    </Typography>
    <Slider
      getAriaValueText={getText}
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
      {...props}
    />
  </Content>;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  
  .text {
    margin: 0 20px;  
  }
`;

RangeSlider.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.array,
  min: PropTypes.number,
  max: PropTypes.number,
};

RangeSlider.defaultProps = {
  onChange: () => null,
  value: [],
  min: -100,
  max: 100,
};

export default RangeSlider;


