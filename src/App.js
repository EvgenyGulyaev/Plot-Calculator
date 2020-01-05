import React, { memo, Fragment } from 'react';
import MainPage from './components/organisms/MainPage';
import Spinner from './components/atoms/Spinner';
import Toastify from './components/atoms/Toastify';
import styled from 'styled-components';

const App = () =>  <Fragment>
  <Spinner/>
  <StyledToastify
    autoClose={1000}
    draggable
    newestOnTop
  />
  <MainPage />
</Fragment>;

const StyledToastify = styled(Toastify)`
  justify-content: flex-end;
  display: flex;
`
export default memo(App);
