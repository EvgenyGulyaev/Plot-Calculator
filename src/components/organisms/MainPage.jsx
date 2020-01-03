import React from 'react';
import Controls from '../molecules/Controls';
import Graph from '../molecules/Graph';
import axiosWrapper from '../../api/axios';
import { createArrayFromRange } from '../../utils';
import _get from 'lodash.get'
import { compose } from 'redux';
import { withSpinner, withToast } from '../../store/connectFunctions';
import { toast } from 'react-toastify';

class MainPage extends React.Component {
  state = {
    formula: '',
    type: true,
    range: [39, 40],
    wfPoints: [],
  };

  onChangeFormula = (event) => this.setState({ formula: event.target.value });

  onChangeType = async (event) => {
    this.setState({ type: event.target.checked });
    if (!event.target.checked) {
      const { formula, range } = this.state;
      const { toggleSpinner } = this.props;

      const vars = createArrayFromRange(range);
      const wfPoints = [];
      toggleSpinner(true);
      for (let i = 0; i < vars.length; i++) {
        const str = formula.includes('x') ? formula.replace(/x/g, `${vars[i]}`) : formula;
        const result = await this.calculateGraphByWolfram(str);
        const y = _get(result, 'queryresult.pods["0"].subpods["0"].plaintext');
        wfPoints.push(vars[i], +y)
      }
      toggleSpinner(false);
      this.setState({ wfPoints });
    }
  };

  onChangeRange = (event, range) => this.setState({ range });

  calculateGraphByWolfram = async (formula) => {
    try {
      return await axiosWrapper({ url: formula })
    }
    catch (e) {
      toast.warn('Error, please check formula')
    }
  };

  render() {
    const { formula, type, range, wfPoints } = this.state;
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
          wfPoints={wfPoints}
          type={type}
        />
      </div>
    );
  }
}

MainPage.propTypes = {};

export default compose(
  withSpinner,
  withToast,
)(MainPage);