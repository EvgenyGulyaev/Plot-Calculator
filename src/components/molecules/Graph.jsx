import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Stage, Layer, Line, Circle } from 'react-konva';
import OPZ from '../../utils/OPZ';

class Graph extends Component {

  calculateGraph = ([start, end] = [], formula) => {
    if (!formula) return;
    OPZ.setInitialValue();

    const opzFormula = OPZ.getOPZformat(formula);

    if (!opzFormula.includes('x')) {
      return OPZ.getOpzValue(opzFormula);
    }

    const length = Math.abs(end - start) + 1;
    const vars = Array.from({ length }, (v, k) => k + Math.min(end, start));
    const linePoints = vars.map((x) => {
      const y = OPZ.getOpzValue([...opzFormula], {x}) || 0;
      return [y, x];
    });
    const flatPoints = linePoints.flat();
    if (flatPoints.includes(NaN)) return false;
    return flatPoints
  };

  render() {
    const {
      axis,
      range,
      width,
      height,
      formula
    } = this.props;
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    const data = this.calculateGraph(range, formula) || [];

    return (
      <Stage width={width} height={height}>
        <Layer offsetX={-halfWidth} offsetY={-200}>
          {
            axis &&
            <Fragment>
              <Line
                points={[-halfWidth, 0, halfWidth, 0]}
                stroke="black"
                strokeWidth={2}
              />
              <Line
                points={[0, halfHeight, 0, -halfHeight]}
                stroke="black"
                strokeWidth={2}
              />
              <Circle
                radius={10}
                stroke="black"
                strokeWidth={1}
                fill="black"
              />
            </Fragment>

          }
          {
            data.length ? <Line
              points={data}
              tension={0.5}
              stroke="black"
            /> : null
          }

        </Layer>
      </Stage>
    );
  }
}

Graph.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  points: PropTypes.array,
  axis: PropTypes.bool,
  range: PropTypes.array,
  formula: PropTypes.string,
};

Graph.defaultProps = {
  width: window.innerWidth,
  height: 600,
  points: [],
  axis: true,
  range: [],
  formula: '',
};

export default Graph;