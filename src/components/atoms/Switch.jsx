import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Typography, Grid } from '@material-ui/core';
import styled from 'styled-components';

const CustomSwitch = ({ value, onChange, onHeaderValue, offHeaderValue, className }) =>
  <Typography component="div" className={className}>
    <StyledContainer component="label" container alignItems="center">
      <Grid item>{onHeaderValue}</Grid>
      <Grid item>
        <Switch
          checked={value}
          onChange={onChange}
        />
      </Grid>
      <Grid item>{offHeaderValue}</Grid>
    </StyledContainer>
  </Typography>;

const StyledContainer = styled(Grid)`
  justify-content: center;
  align-items: center;
  height: inherit;
`;

CustomSwitch.propTypes = {
  value: PropTypes.bool,
  onHeaderValue: PropTypes.string,
  offHeaderValue: PropTypes.string,
  onChange: PropTypes.func
};

CustomSwitch.defaultProps = {
  value: '',
  onHeaderValue: 'On',
  offHeaderValue: 'Off',
  onChange: () => null,
};

export default CustomSwitch;