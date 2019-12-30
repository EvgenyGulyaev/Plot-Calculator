import React from 'react';
import PropTypes from 'prop-types';
import Input from '../atoms/Input';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (
      <div>
        <Input/>
        
      </div>
    );
  }
}

MainPage.propTypes = {};

export default MainPage;