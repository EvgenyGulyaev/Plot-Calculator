import React from 'react';
import Controls from '../molecules/Controls';
import Graph from '../molecules/Graph';

class MainPage extends React.Component {
  state = {
    formula: '',
    type: true,
    range: [ 20, 40 ],
  };

  onChangeFormula = (event) => this.setState({formula : event.target.value});

  onChangeType = (event) => this.setState({type : event.target.checked});

  onChangeRange = (event, range) => this.setState({range});

  render() {
    const { formula, type, range } = this.state;
    return (
      <div>
        <Controls
          formula={formula}
          type={type}
          onChangeFormula={this.onChangeFormula}
          onChangeType={this.onChangeType}
          onChangeRange={this.onChangeRange}
          rangeValue={range}
        />
        <Graph
          range={range}
          formula={formula}
        />
      </div>
    );
  }
}

MainPage.propTypes = {};

export default MainPage;