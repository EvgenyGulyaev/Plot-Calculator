import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Stage, Layer, Line, Circle } from 'react-konva';

class Graph extends Component {
  render() {
    const {
      axis,
      points,
      width,
      height,
      range
    } = this.props;
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    return (
      <Stage width={width} height={height}>
        <Layer offsetX={-halfWidth} offsetY={-200}>
          {
            axis &&
            <Fragment>
              <Line
                points={[-halfWidth, 0, halfWidth, 0]}
                stroke='black'
                strokeWidth={2}
              />
              <Line
                points={[0, halfHeight, 0, -halfHeight]}
                stroke='black'
                strokeWidth={2}
              />
              <Circle
                radius={10}
                stroke='black'
                strokeWidth={1}
                fill='black'
              />
            </Fragment>

          }
          <Line
            points={[0, 0, 100, 0, 100, 100]}
            tension={0.5}
            stroke="black"
          />
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