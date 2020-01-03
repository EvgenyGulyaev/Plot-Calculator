import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Stage, Layer, Line, Circle } from 'react-konva';
import OPZ from '../../utils/OPZ';
import { createArrayFromRange } from '../../utils';

class Graph extends Component {
  calculateGraphCustom = ([start, end] = [], formula) => {
    if (!formula) return;
    OPZ.setInitialValue();

    const opzFormula = OPZ.getOPZformat(formula);

    if (!opzFormula.includes('x')) {
      return OPZ.getOpzValue(opzFormula);
    }

    const vars = createArrayFromRange([start, end]);
    const linePoints = vars.map((x) => {
      const y = OPZ.getOpzValue([...opzFormula], { x }) || 0;
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
      formula,
      wfPoints,
      type
    } = this.props;
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    const data = this.calculateGraphCustom(range, formula) || [];

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
            wfPoints.length && type === false ? <Line
              points={wfPoints}
              tension={0.5}
              stroke="black"
            /> : null
          }
          {
            data.length && type === true ? <Line
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
  wfPoints: PropTypes.array,
  type: PropTypes.bool,
};

Graph.defaultProps = {
  width: window.innerWidth,
  height: 600,
  points: [],
  axis: true,
  range: [],
  formula: '',
  wfPoints: [],
  type: true,
};

export default Graph;