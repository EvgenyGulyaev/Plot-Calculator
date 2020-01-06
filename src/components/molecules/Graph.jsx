import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Stage, Layer, Line, Circle } from 'react-konva';
import { createArrayFromRange } from '../../utils';
import OPZ from 'opz-parser';
import memoizeOne from 'memoize-one';

class Graph extends Component {
  drawGrid = memoizeOne((grid = this.props.grid) => {
    if (grid) {
      const { width, height } = this.props;
      const axisX = [...Array(2 * width).keys()].filter(el=> !(el % 10)).map(el => <Line
        points={[-width + el, -height, -width + el, height]}
        stroke="gray"
        strokeWidth={1}
        key={`axisX-${el}`}
      />)
      const axisY = [...Array(2 * height).keys()].filter(el=> !(el % 10)).map(el => <Line
        points={[-width, -height + el, width, -height + el]}
        stroke="gray"
        strokeWidth={1}
        key={`axisY-${el}`}

      />);
      return [...axisX, ...axisY];
    }
    return [];
  })

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
      axes,
      range,
      width,
      height,
      formula,
      wfPoints,
      type,
      grid
    } = this.props;
    const halfWidth = width / 2;
    const halfHeight = height / 2;
    const gridLines = this.drawGrid(grid);

    const data = this.calculateGraphCustom(range, formula) || [];

    return (
      <Stage width={width} height={height}>
        <Layer offsetX={-halfWidth} offsetY={-200}>
          {gridLines}
          {
            axes &&
            <Fragment>
              <Line
                points={[-halfWidth, 0, halfWidth, 0]}
                stroke="black"
                strokeWidth={1}
              />
              <Line
                points={[0, halfHeight, 0, -halfHeight]}
                stroke="black"
                strokeWidth={1}
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
  axes: PropTypes.bool,
  range: PropTypes.array,
  formula: PropTypes.string,
  wfPoints: PropTypes.array,
  type: PropTypes.bool,
  grid: PropTypes.bool,
};

Graph.defaultProps = {
  width: window.innerWidth,
  height: 600,
  points: [],
  axes: true,
  range: [],
  formula: '',
  wfPoints: [],
  type: true,
  grid: false,
};

export default Graph;