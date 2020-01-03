import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import spinner from '../../res/img/spinner.svg';

export const withSpinner = connect(
  state => ({ status: state.spinner.status }),
);

const Spinner = (props) => {
  const { status } = props;
  return (
    <Fragment>
      {status
      && <CustomSpinner>
        <img src={spinner} alt="Spinner"/>
      </CustomSpinner>
      }
    </Fragment>
  );
};

const CustomSpinner = styled.div`
  position: fixed;
  z-index: 99999;
  text-align: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5a616912;
  
  img {
    width: 60px;
    height: 60px;
    position: relative;
    z-index: 2;
  }
`;

Spinner.propTypes = {
  status: PropTypes.bool,
};

Spinner.defaultProps = {
  status: false,
};

export default withSpinner(Spinner);
