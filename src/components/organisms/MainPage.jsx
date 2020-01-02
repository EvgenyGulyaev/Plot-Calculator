import React from 'react';
import Controls from '../molecules/Controls';

class MainPage extends React.Component {
  state = {
    formula: '',
    type: true,
  };

  onChangeFormula = (event) => this.setState({formula : event.target.value});

  onChangeType = (event) => this.setState({type : event.target.checked});

  render() {
    const { formula, type } = this.state;
    return (
      <div>
        <Controls
          formula={formula}
          type={type}
          onChangeFormula={this.onChangeFormula}
          onChangeType={this.onChangeType}
        />
      </div>
    );
  }
}

MainPage.propTypes = {};

export default MainPage;